#!/usr/bin/env node

/**
 * Script pour formater automatiquement les imports @use dans les fichiers SCSS.
 * Sépare les imports Sass built-in (sass:*) des imports locaux par une ligne vide.
 *
 * Usage:
 *   node .scripts/format-imports.js [fichier1.scss] [fichier2.scss] ...
 *   Si aucun fichier n'est spécifié, formate tous les fichiers SCSS du projet.
 */

const fs = require('fs');
const path = require('path');

const SASS_BUILT_IN_PREFIX = 'sass:';

function formatImports(content) {
  const lines = content.split('\n');
  const sassImports = [];
  const localImports = [];
  const otherLines = [];
  let inImportSection = false;
  let lastWasImport = false;
  let commentBeforeSass = null;
  let commentBeforeLocal = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Détecter les imports @use
    if (trimmed.startsWith('@use ')) {
      inImportSection = true;

      // Vérifier s'il y a un commentaire avant
      if (i > 0 && lines[i - 1].trim().startsWith('//')) {
        const prevComment = lines[i - 1].trim();
        if (!commentBeforeSass && trimmed.match(/@use\s+['"]sass:/)) {
          commentBeforeSass = prevComment;
        } else if (!commentBeforeLocal && !trimmed.match(/@use\s+['"]sass:/)) {
          commentBeforeLocal = prevComment;
        }
      }

      lastWasImport = true;

      // Extraire le chemin entre guillemets
      const match = line.match(/@use\s+['"]([^'"]+)['"]/);
      if (match) {
        const importPath = match[1];
        if (importPath.startsWith(SASS_BUILT_IN_PREFIX)) {
          sassImports.push(line);
        } else {
          localImports.push(line);
        }
      } else {
        // Si on ne peut pas parser, garder tel quel
        localImports.push(line);
      }
    } else if (trimmed.startsWith('@forward ')) {
      // Gérer aussi @forward
      inImportSection = true;
      lastWasImport = true;
      localImports.push(line);
    } else if (trimmed === '' && lastWasImport) {
      // Ignorer les lignes vides après les imports
      continue;
    } else {
      if (inImportSection && !lastWasImport && trimmed !== '' && !trimmed.startsWith('//')) {
        // On est sorti de la section d'imports
        inImportSection = false;
      }
      lastWasImport = false;
      otherLines.push(line);
    }
  }

  // Reconstruire le contenu
  const formatted = [];

  // Ajouter les imports Sass built-in
  if (sassImports.length > 0) {
    // Utiliser le commentaire existant ou en créer un nouveau
    if (commentBeforeSass && commentBeforeSass.includes('Sass')) {
      formatted.push(commentBeforeSass);
    } else {
      formatted.push('// Sass built-in modules');
    }
    sassImports.forEach(imp => formatted.push(imp));
    formatted.push('');
  }

  // Ajouter les imports locaux
  if (localImports.length > 0) {
    if (sassImports.length > 0) {
      // Utiliser le commentaire existant ou en créer un nouveau
      if (commentBeforeLocal && commentBeforeLocal.includes('Local')) {
        formatted.push(commentBeforeLocal);
      } else {
        formatted.push('// Local modules');
      }
    }
    localImports.forEach(imp => formatted.push(imp));
    formatted.push('');
  }

  // Ajouter le reste du contenu
  otherLines.forEach(line => formatted.push(line));

  return formatted.join('\n');
}

async function formatFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const formatted = formatImports(content);

    if (content !== formatted) {
      fs.writeFileSync(filePath, formatted, 'utf8');
      console.log(`✓ Formatted: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error formatting ${filePath}:`, error.message);
    return false;
  }
}

function findScssFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Ignorer certains dossiers
      if (!['node_modules', 'dist', '.git', '.yarn'].includes(file)) {
        findScssFiles(filePath, fileList);
      }
    } else if (file.endsWith('.scss')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function main() {
  const files = process.argv.slice(2);

  if (files.length === 0) {
    // Par défaut, formater tous les fichiers SCSS du projet
    const scssFiles = findScssFiles(process.cwd());

    let formattedCount = 0;
    for (const file of scssFiles) {
      if (await formatFile(file)) {
        formattedCount++;
      }
    }

    if (formattedCount > 0) {
      console.log(`\n✓ Formatted ${formattedCount} file(s)`);
    } else {
      console.log('\n✓ All files are already formatted');
    }
  } else {
    // Formater les fichiers spécifiés
    for (const file of files) {
      await formatFile(file);
    }
  }
}

main().catch(console.error);
