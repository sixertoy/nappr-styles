# Architecture SASS (7-1 Pattern & ITCSS)

Le principe fondamental est de structurer le code en couches, allant du code le plus générique et de faible spécificité (variables) au code le plus spécifique et le plus impactant (composants, utilitaires importants).

## I. Structure des Dossiers (Le 7-1 Pattern)

Créez le dossier racine de votre librairie (ex: `sass/`) et les sept sous-dossiers suivants. Tous les fichiers SASS dans ces sous-dossiers doivent être des **partials** (précédés d'un underscore, ex: `_variables.scss`).

| Index ITCSS | Dossier | Rôle et Spécificité | Contenu Type |
| :---: | :--- | :--- | :--- |
| **1** | `abstracts/` | **Variables, Mixins, Functions.** La couche la plus basse. Ne génère **JAMAIS** de CSS par elle-même. | `_variables.scss` (Design Tokens), `_mixins.scss`, `_functions.scss`, `_placeholders.scss` |
| **2** | `base/` | **Styles de base pour les éléments bruts.** Styles HTML sans classe. Très faible spécificité. | `_reset.scss` (ou Normalize), `_typography.scss` (styles pour `h1`, `p`), `_base.scss` (styles pour `html`, `body`) |
| **3** | `layout/` | **Macro-mise en page.** Structures majeures non réutilisables comme des composants (Container, Header, Grid System). | `_grid.scss`, `_header.scss`, `_footer.scss`, `_container.scss` |
| **4** | `components/` | **Composants UI autonomes (BEM).** Les morceaux d'interface réutilisables (Boutons, Cartes, Formulaires). | `_button.scss`, `_card.scss`, `_form.scss`, `_modal.scss` |
| **5** | `themes/` | **Styles de thèmes/skins.** Overrides spécifiques (ex: Dark Mode, thèmes clients). | `_dark-theme.scss`, `_admin-theme.scss` |
| **6** | `utilities/` | **Helpers et utilitaires (`!important`).** La couche de spécificité la plus élevée, conçue pour écraser les autres styles. | `_alignment.scss`, `_spacing.scss`, `_hidden.scss` |

> 🔑 **Note pour l'IA :** Le dossier `utilities/` est souvent ajouté en tant que 8ème dossier car il nécessite d'être importé en **DERNIER** dans le flux d'ITCSS pour garantir que ses styles *utility-first* puissent écraser les styles des composants.

---

## II. Fichier d'Importation Principal (`main.scss` ou `style.scss`)

Ce fichier est la seule chose que l'utilisateur final du projet importera. Il doit contenir **uniquement** des instructions `@use` (ou `@forward` en SASS moderne) et doit suivre l'ordre strict ITCSS.

**Instruction :** Importez les dossiers dans l'ordre séquentiel ci-dessous.

| Ordre ITCSS | Objectif de l'Importation | Syntaxe SASS (Exemple) |
| :---: | :--- | :--- |
| **1.** | **Abstracts** (Tokens & Tools) | `@use 'abstracts/variables';` (Doit être en premier) |
| **2.** | **Base** (Base HTML) | `@use 'base/reset';` |
| **3.** | **Layout** (Structure) | `@use 'layout/grid';` |
| **4.** | **Components** (Modules UI) | `@use 'components/button';` |
| **5.** | **Themes** (Skins) | `@use 'themes/dark-theme';` |
| **6.** | **Utilities** (Overrides/Helpers) | `@use 'utilities/alignment';` (Doit être en dernier) |

### Exemple du Fichier `main.scss` :

```sass
// 1. ABSTRACTS - Variables, Mixins, Functions (Le "Design Token Layer")
@use 'abstracts/variables';
@use 'abstracts/functions';
@use 'abstracts/mixins';
@use 'abstracts/placeholders';

// 2. BASE - Base HTML Styles, Reset, Typo
@use 'base/reset';
@use 'base/typography';
@use 'base/base';

// 3. LAYOUT - Major structural blocks
@use 'layout/grid';
@use 'layout/container';

// 4. COMPONENTS - Reusable UI Modules (BEM naming preferred)
@use 'components/button';
@use 'components/card';
@use 'components/form';

// 5. THEMES - Theming and skinning
@use 'themes/default';
@use 'themes/dark-mode';

// 6. UTILITIES - Overrides and Helpers (High specificity, often using !important)
@use 'utilities/alignment';
@use 'utilities/spacing';
@use 'utilities/visibility';
```

---

## III. Architecture Modulaire des Composants et Layouts

### Structure Modulaire d'un Composant

Chaque composant dans `components/` doit être organisé dans son propre dossier avec la structure suivante :

```
components/
└── [component-name]/
    ├── _.scss              # Fichier principal du composant (importe les autres)
    ├── _config.scss        # Variables de configuration spécifiques au composant
    ├── _mixins.scss        # Mixins spécifiques au composant (optionnel)
    └── _placeholders.scss  # Placeholders spécifiques au composant (optionnel)
```

**Règles pour les composants modulaires :**

1. **Fichier principal (`_.scss`)** :
   - Doit importer `config`, `mixins` (si présent), et `placeholders` (si présent)
   - Contient tous les styles CSS du composant
   - Utilise les variables depuis `config`, les mixins depuis `mixins`, et étend les placeholders depuis `placeholders`

2. **Fichier de configuration (`_config.scss`)** :
   - Contient uniquement les variables SASS spécifiques au composant
   - Préfixe les variables avec `$NAPPR_[COMPONENT]_[PROPERTY]` (ex: `$NAPPR_BUTTON_BORDER_RADIUS`)
   - Utilise `!default` pour permettre la surcharge

3. **Fichier de mixins (`_mixins.scss`)** :
   - Créé uniquement si le composant nécessite des mixins spécifiques
   - Contient les mixins réutilisables uniquement pour ce composant
   - Importe `config` si les mixins utilisent des variables du composant

4. **Fichier de placeholders (`_placeholders.scss`)** :
   - Créé uniquement si le composant nécessite des placeholders spécifiques
   - Contient les placeholders réutilisables uniquement pour ce composant

5. **Barrel file (`components/_.scss`)** :
   - Importe chaque composant via `@use '[component-name]/_.scss' as *;`

**Exemple d'implémentation :**

```sass
// components/button/_config.scss
$NAPPR_BUTTON_BORDER_RADIUS: 0.25rem !default;
$NAPPR_BUTTON_PADDING_X: 1rem !default;

// components/button/_mixins.scss
@use 'config' as config;
@mixin button-interactive {
  &:not(:disabled):not(.disabled) {
    @content;
  }
}

// components/button/_placeholders.scss
%button-base {
  align-items: center;
  display: inline-flex;
}

// components/button/_.scss
@use 'config' as config;
@use 'mixins' as mixins;
@use 'placeholders' as *;

.btn {
  @extend %button-base;
  border-radius: config.$NAPPR_BUTTON_BORDER_RADIUS;
  padding: 0 config.$NAPPR_BUTTON_PADDING_X;
  
  @include mixins.button-interactive {
    &:hover { /* ... */ }
  }
}
```

### Structure Modulaire d'un Layout

Les layouts complexes dans `layout/` peuvent également être organisés en sous-dossiers avec une structure modulaire :

```
layout/
└── [layout-name]/
    ├── _.scss              # Barrel file qui importe les sous-fichiers
    ├── _[layout-name].scss # Fichier principal du layout
    ├── _[feature-1].scss   # Fichiers spécialisés (optionnel)
    └── _[feature-2].scss   # Fichiers spécialisés (optionnel)
```

**Règles pour les layouts modulaires :**

1. **Barrel file (`_.scss`)** :
   - Importe tous les sous-fichiers du layout dans l'ordre logique
   - Exemple : `@use 'grid'; @use 'columns'; @use 'gaps'; @use 'offsets';`

2. **Fichiers spécialisés** :
   - Organisés par fonctionnalité (columns, gaps, offsets, etc.)
   - Chaque fichier contient les classes CSS liées à sa fonctionnalité

3. **Barrel file principal (`layout/_.scss`)** :
   - Importe chaque layout via `@use '[layout-name]/_.scss' as *;`

**Exemple d'implémentation :**

```sass
// layout/grid/_grid.scss
.nappr-grid {
  display: grid;
  /* ... */
}

// layout/grid/_columns.scss
.nappr-grid-col-1 { /* ... */ }
.nappr-grid-col-2 { /* ... */ }

// layout/grid/_.scss
@use 'grid';
@use 'columns';
@use 'gaps';
@use 'offsets';
```

---

## IV. Bonnes Pratiques Complémentaires

1.  **Nommage des Composants (Components) :** Appliquez systématiquement la méthodologie **BEM** (Block-Element-Modifier) pour tous les fichiers dans `components/`.
      * Exemple : `.card`, `.card__header`, `.card--active`.

2.  **Nommage des Utilitaires (Utilities/Helpers) :** Les classes utilitaires dans `utilities/` suivent une convention descriptive basée sur leur fonction :
      * Classes de texte : `.text-left`, `.text-center`, `.text-right`, `.text-justify`
      * Classes d'état : `.is-flex`, `.is-block`, `.is-hidden`, `.is-visible`
      * Classes de négation : `.no-margin`, `.no-padding`, `.no-underline`
      * Classes de positionnement : `.valign-top`, `.valign-middle`, `.valign-bottom`
      * Pour les layouts de grille, le préfixe `nappr-` est utilisé (ex: `.nappr-grid`, `.nappr-grid--gap`).

3.  **Variables et Design Tokens :** 
      * Les variables globales doivent être définies dans `abstracts/variables/` de manière sémantique (`$color-primary`, `$space-md`), et **non** de manière rigide (`#007bff`, `20px`).
      * Les variables spécifiques à un composant doivent être dans `components/[component-name]/_config.scss` avec le préfixe `$NAPPR_[COMPONENT]_[PROPERTY]`.

4.  **Séparation des préoccupations :**
      * Les variables, mixins et placeholders **globaux** (réutilisables par plusieurs composants) vont dans `abstracts/`.
      * Les variables, mixins et placeholders **spécifiques à un composant** vont dans le dossier du composant (`components/[component-name]/`).

5.  **Unités de Mesure :**
      * **Typographie :** Utilisez **`rem`** pour toutes les tailles de police pour une meilleure accessibilité et mise à l'échelle.
      * **Espacement :** Utilisez **`rem`** pour le `margin` et le `padding`.
      * **Dimensions :** Utilisez des pourcentages, `vw`/`vh`, ou des unités **`rem`** pour les largeurs/hauteurs.

6.  **Ordre d'importation dans les fichiers de composants :**
      * D'abord les imports externes (`@use 'sass:...'`, `@use 'sass-rem'`, etc.)
      * Ensuite les imports de configuration (`@use 'config' as config;`)
      * Puis les imports de mixins (`@use 'mixins' as mixins;`)
      * Enfin les imports de placeholders (`@use 'placeholders' as *;`)

7.  **Note sur les dossiers non utilisés :**
      * Les dossiers `vendors/` (CSS de librairies tierces) et `pages/` (styles spécifiques aux pages) ne font pas partie de l'architecture de cette librairie et ne doivent pas être créés.
