# TODO - Améliorations et corrections SASS

> Liste des tâches issues de l'analyse du code SASS du projet `@nappr/nappr-styles`

## 🔴 Priorité Critique

### Erreurs de compilation
- [x] **Corriger l'erreur de syntaxe dans `utilities/_typography.scss` (ligne 26)**
  - Remplacer `#{value}rem` par `#{$value}rem`
  - Fichier: `sass/utilities/_typography.scss`
  - Impact: Le code ne compile pas correctement

### Fichiers manquants ou vides
- [ ] **Réimplémenter les styles des headings dans `elements/_typography.scss`**
  - Le fichier est actuellement vide
  - Réintégrer les styles pour h1-h6, p, etc.
  - Utiliser les placeholders `%text-h1` à `%text-h6` si nécessaire
  - Fichier: `sass/elements/_typography.scss`

- [ ] **Restaurer ou réimplémenter les placeholders de typographie**
  - Les placeholders `%text-h1` à `%text-h6` ont été supprimés
  - Vérifier leur utilisation dans `utilities/_typography.scss`
  - Réimplémenter dans `core/placeholders/_typography.scss` ou `elements/_typography.scss`
  - Fichier: `sass/core/placeholders/_typography.scss`

## ⚠️ Priorité Haute

### Code en production
- [x] **Supprimer ou commenter le `@debug` dans `utilities/_spacings.scss`**
  - Ligne 18: `@debug $spacing-tokens-map;`
  - Fichier: `sass/utilities/_spacings.scss`

### Variables manquantes
- [ ] **Ajouter la variable `$text-size-p` dans `configs/_typography.scss`**
  - Utilisée dans `elements/_typography.scss` (ligne 26) mais non définie
  - Fichier: `sass/configs/_typography.scss`

### Incohérences de structure
- [ ] **Standardiser le formatage des boucles `@each`**
  - Format multi-lignes (lignes 34-49) vs format compact (lignes 55-59, 65-69)
  - Choisir un format unique et l'appliquer partout
  - Fichier: `sass/utilities/_typography.scss`

- [x] **Corriger l'incohérence dans la boucle TEXT TRANSFORM**
  - Ligne 65: Utilise seulement `$value` alors que `$key` pourrait être utile
  - Aligner avec le pattern utilisé dans FONT WEIGHT
  - Fichier: `sass/utilities/_typography.scss`

## 💡 Priorité Moyenne

### Optimisations de code
- [ ] **Optimiser les boucles répétitives dans `utilities/_typography.scss`**
  - Consolider les 3 boucles (TEXT ALIGNMENT, TEXT TRANSFORM, etc.) en une map unifiée
  - Réduire la duplication de code
  - Fichier: `sass/utilities/_typography.scss`

- [ ] **Optimiser la génération de classes dans `utilities/_spacings.scss`**
  - Éviter les recalculs dans les media queries
  - Fichier: `sass/utilities/_spacings.scss`

### Documentation
- [ ] **Compléter la documentation du mixin `apply-text-style`**
  - Commentaire incomplet à la ligne 4
  - Ajouter la documentation complète avec tous les paramètres
  - Fichier: `sass/core/mixins/_typography.scss`

- [ ] **Ajouter la documentation au mixin `generate-spacings-classes`**
  - Documenter les paramètres et le comportement
  - Fichier: `sass/core/mixins/_spacings.scss`

### Standardisation
- [ ] **Standardiser la convention de nommage des classes utilitaires**
  - `.is-*` pour certaines classes (italic, underline, stroked, small-caps)
  - `.text-*` pour d'autres (left, right, center, justify)
  - `.text--*` pour les variantes (alt, md, sm)
  - Choisir une convention (BEM ou autre) et l'appliquer partout
  - Fichiers: `sass/utilities/_typography.scss`

- [ ] **Réorganiser l'ordre des sections dans `utilities/_typography.scss`**
  - Ordre logique suggéré: Transform → Decoration → Alignment
  - Actuellement: Alignment (ligne 51) → Transform (ligne 61) → Decoration (ligne 71)
  - Fichier: `sass/utilities/_typography.scss`

### Imports
- [ ] **Standardiser les imports dans les fichiers de typographie**
  - `core/placeholders/_typography.scss`: Importe `configs` et `mixins` directement
  - `utilities/_typography.scss`: Importe via `../core/placeholders/` et `../core/mixins/`
  - `elements/_typography.scss`: Aucun import (fichier vide)
  - Harmoniser les patterns d'import
  - Fichiers: `sass/core/placeholders/_typography.scss`, `sass/utilities/_typography.scss`, `sass/elements/_typography.scss`

## 🔍 Priorité Basse

### Nettoyage et maintenance
- [ ] **Vérifier l'utilisation de `!important`**
  - Documenter ou éviter l'utilisation de `!important` dans `.text--alt`
  - Fichier: `sass/utilities/_typography.scss` (ligne 96)

- [ ] **Vérifier les placeholders non utilisés**
  - `%text-truncate`: Supprimé mais peut-être encore référencé
  - `%text-no-decoration`: Supprimé mais peut-être encore référencé
  - `%text-no-transform`: Supprimé mais peut-être encore référencé
  - Faire un audit complet des placeholders dans `core/placeholders/`
  - Fichier: `sass/core/placeholders/_typography.scss`

- [ ] **Vérifier l'utilisation de `$text-size-lg`**
  - Défini dans `configs/_typography.scss` mais jamais utilisé
  - Supprimer ou documenter son usage prévu
  - Fichier: `sass/configs/_typography.scss`

### Améliorations futures
- [ ] **Créer une map unifiée pour les configurations de typographie**
  - Centraliser toutes les configurations (sizes, weights, transforms, etc.)
  - Faciliter la maintenance et l'extension
  - Fichier: `sass/configs/_typography.scss`

- [ ] **Ajouter des tests de compilation**
  - Vérifier que tous les fichiers compilent sans erreurs
  - Détecter automatiquement les erreurs de syntaxe

- [ ] **Créer une documentation des conventions**
  - Documenter les conventions de nommage
  - Documenter les patterns d'import
  - Documenter les structures de fichiers

## 📝 Notes

- Les fichiers analysés sont dans `sass/`
- L'architecture suit le pattern 7-1 (ITCSS)
- Les règles de l'agent sont dans `.cursor/rules/`

---

**Dernière mise à jour**: Analyse effectuée le $(date)
**Fichiers analysés**: 
- `sass/utilities/_typography.scss`
- `sass/core/placeholders/_typography.scss`
- `sass/elements/_typography.scss`
- `sass/core/mixins/_typography.scss`
- `sass/configs/_typography.scss`
- `sass/utilities/_spacings.scss`
- Et autres fichiers du projet
