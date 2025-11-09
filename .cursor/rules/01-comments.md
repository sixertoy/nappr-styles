# Standardisation des Commentaires SASS

Ce document décrit les règles de standardisation des commentaires dans tous les fichiers SASS. **Ces règles doivent être strictement respectées** lors de toute modification ou création de fichiers SASS.

## Règles Générales

1. **Tous les commentaires doivent utiliser le style `//` (commentaires sur une ligne)** sauf pour la documentation en en-tête de fichier qui utilise `/** */`
2. **Les commentaires de section doivent être uniformisés** selon les règles ci-dessous
3. **Aucun commentaire CSS (`/* */`) ne doit être utilisé** pour les commentaires de code, uniquement pour la documentation

---

## Types de Commentaires

### 1. Documentation en En-tête de Fichier

**Format :** `/** */` (commentaire multi-lignes)

**Usage :** Uniquement pour la documentation complète d'un fichier en en-tête.

**Exemple :**

```scss
/**
 * Placeholders Sass centralisés
 *
 * Tous les placeholders utilisés dans la librairie sont définis ici.
 * Ils peuvent être étendus via @extend dans les autres fichiers.
 */
```

---

### 2. Grandes Sections Principales

**Format :** `// ==================================================`

**Usage :** Pour délimiter les grandes sections principales d'un fichier (niveau 1).

**Règles :**
- Exactement 50 caractères `=`
- Le titre de la section est centré entre deux lignes de `=`
- Une ligne vide avant et après la section

**Exemple :**

```scss
@use 'config/variables/' as *;

// ==================================================
// 1. CONFIGURATION / OUTILS (Tools)
// ==================================================

```

---

### 3. Sous-sections

**Format :** `// --- Titre de la sous-section ---`

**Usage :** Pour les sous-sections à l'intérieur d'une grande section (niveau 2).

**Règles :**
- Exactement 3 tirets `---` suivis d'un espace
- Toujours une ligne vide avant

**Exemple :**

```scss
// ==================================================
// 3. CLASSES DE COLONNES (MOBILE ET RESPONSIVE)
// ==================================================

// --- 3.1. Colonnes par défaut (Mobile First)
@for $i from 1 through $grid-columns {
  // ...
}

// --- 3.2. Colonnes Responsives pour chaque Breakpoint
@each $name, $value in $breakpoints {
  // ...
}
```

**Exemple dans les variables :**

```scss
// --- Configuration
$body-width: 100vw !default;

// --- Spacings
$spacings-max: 32 !default;

// --- Grid
$grid-columns: 12 !default;
```

---

### 4. Commentaires Simples

**Format :** `// Commentaire`

**Usage :** Pour tous les commentaires explicatifs, notes, ou clarifications dans le code.

**Règles :**
- Toujours utiliser `//` (jamais `/* */`)
- Un espace après les `//`
- Peuvent être sur la même ligne que le code ou sur une ligne séparée

**Exemples :**

```scss
// Variable de debug (peut être surchargée via --define DEBUG=true lors de la compilation)
$debug: false !default;

// Affichage des variables en mode debug
@if $debug {
  @debug '=== PALETTE ===';
}

// Les éléments de formulaire héritent de la police du body
input,
button,
textarea,
select {
  font: inherit;
}

body {
  line-height: 1.5; // Meilleure accessibilité
  min-height: 100vh;
}
```

---

## Structure Hiérarchique Recommandée

```
/**
 * Documentation du fichier (optionnel)
 */

// ==================================================
// 1. GRANDE SECTION PRINCIPALE
// ==================================================

// --- 1.1. Sous-section
// Commentaire explicatif si nécessaire
code {
  // ...
}

// --- 1.2. Autre sous-section
// Autre commentaire
more-code {
  // ...
}

// ==================================================
// 2. AUTRE GRANDE SECTION
// ==================================================
```

---

## Exemples Concrets

### Exemple 1 : Fichier avec plusieurs grandes sections

```scss
// ==================================================
// 1. Modern Reset Core (Basé sur les meilleures pratiques)
// ==================================================

// Active Box-Sizing et réinitialise Marges/Paddings
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

// Améliorations de l'accessibilité et de la réactivité
html {
  text-size-adjust: 100%; // Empêche le zoom texte sur mobile
}

// ==================================================
// 2. Réinitialisation des Saisies et Liens (Simple)
// ==================================================

// Réinitialisation de la décoration des citations
blockquote,
q {
  quotes: none;
}
```

### Exemple 2 : Fichier avec sous-sections

```scss
// ==================================================
// 3. CLASSES DE COLONNES (MOBILE ET RESPONSIVE)
// ==================================================

// --- 3.1. Colonnes par défaut (Mobile First)
@for $i from 1 through $grid-columns {
  .grid-col-#{$i} {
    grid-column: span #{$i} / span #{$i};
  }
}

// --- 3.2. Colonnes Responsives pour chaque Breakpoint
@each $name, $value in $breakpoints {
  $key: get-breakpoint-key($name);

  @if $key != 'xs' {
    @media (min-width: $value) {
      // ...
    }
  }
}
```

### Exemple 3 : Fichier de variables

```scss
@use 'functions/lists' as lists;

// --- Configuration
$body-width: 100vw !default;
$body-font-size: 0.75rem !default;

// --- Spacings
$spacings-max: 32 !default;
$spacings-min: -8 !default;

// --- Grid
$grid-columns: 12 !default;
$grid-max-width: 1200px !default;
```

---

## Règles de Maintenance

### Lors de la Modification d'un Fichier

1. **Vérifier que tous les commentaires suivent le standard**
2. **Convertir les anciens commentaires `/* */` en `//`** (sauf documentation en en-tête)
3. **Uniformiser les séparateurs de section** vers `// ==================================================`
4. **Uniformiser les sous-sections** vers `// --- Titre`

### Lors de la Création d'un Nouveau Fichier

1. **Ajouter une documentation en en-tête** si le fichier le justifie
2. **Utiliser les grandes sections** pour organiser le code
3. **Utiliser les sous-sections** pour les subdivisions logiques
4. **Ajouter des commentaires explicatifs** pour clarifier le code complexe

### Vérification Automatique

Avant de commiter, vérifier que :
- ✅ Tous les commentaires utilisent `//` (sauf documentation en en-tête)
- ✅ Les grandes sections utilisent exactement `// ==================================================`
- ✅ Les sous-sections utilisent exactement `// --- ` (3 tirets + espace)
- ✅ Aucun commentaire CSS `/* */` n'est utilisé pour le code (sauf documentation)

---

## Anti-patterns à Éviter

### ❌ Ne PAS utiliser

```scss
/* Commentaire avec /* */ */
/* -------------------------------------------------------- */
/* Section */
/* -------------------------------------------------------- */
/* --- Sous-section --- */
// ========== Section ==========
// --- Sous-section ---
```

### ✅ Utiliser à la place

```scss
// Commentaire avec //
// ==================================================
// Section
// ==================================================
// --- Sous-section
// ==================================================
// Section
// ==================================================
// --- Sous-section
```

---

## Exemples de Fichiers Types

Les exemples ci-dessus illustrent les différents types de fichiers SASS que vous pourrez rencontrer :

- **Fichier principal** (`main.scss`) - Structure principale avec grandes sections
- **Fichiers de reset** (`_base.scss`, `_nappr_.scss`) - Exemples avec plusieurs grandes sections
- **Fichiers de layout** (`_grid.scss`, `_columns.scss`) - Exemples avec sous-sections
- **Fichiers de variables** (`_variables.scss`, `_config.scss`) - Exemples de fichiers de variables
- **Fichiers de placeholders** (`_placeholders.scss`) - Exemples avec documentation en en-tête

---

## Notes Importantes

1. **Cohérence avant tout** : Si un fichier existant ne suit pas exactement ces règles, il doit être corrigé lors de la prochaine modification
2. **Lisibilité** : Les commentaires doivent améliorer la compréhension du code, pas l'encombrer
3. **Maintenance** : Cette standardisation facilite la maintenance et la navigation dans le code
