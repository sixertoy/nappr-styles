## 🤖 Prompt pour l'Agent IA (Documentation SASS/Docsify)

**Titre de la Tâche :** Génération de Documentation Automatisée SassDoc et Markdown (Docsify)

### 🎯 Objectif de la Mission

L'objectif est d'assurer une documentation complète, cohérente et maintenable de la librairie SASS. L'agent IA doit exécuter deux phases séquentielles :
1. **Commenter :** Insérer les blocs de commentaires SassDoc standardisés dans les fichiers SASS pour les éléments fonctionnels uniquement.
2. **Générer :** Créer des fichiers Markdown (`.md`) prêts à être consommés par Docsify :
   - **Depuis SassDoc** : Pour les éléments fonctionnels (`@function`, `@mixin`, `$variables`, `%placeholder`)
   - **Manuellement** : Pour les thèmes, helpers, utilities et couleurs (avec éléments complexes : tableaux, graphiques, etc.)

---

### Phase 1 : Insertion des Commentaires SassDoc (Éléments Fonctionnels Uniquement)

**Instruction :** Parcourir tous les fichiers SASS de la librairie (à l'exception des fichiers de tiers dans `vendors/`) et insérer ou mettre à jour un bloc de commentaire **SassDoc** `/** ... */` directement au-dessus de chaque élément fonctionnel public.

**⚠️ IMPORTANT : SassDoc uniquement pour les éléments fonctionnels :**
- ✅ `@function` - Fonctions SASS
- ✅ `@mixin` - Mixins SASS
- ✅ `$variable` - Variables SASS
- ✅ `%placeholder` - Placeholders SASS

**❌ Ne PAS utiliser SassDoc pour :**
- ❌ `$map` - Maps de thèmes, palettes
- ❌ Classes CSS générées - Utilitaires, helpers

#### Règles de Formatage SassDoc :

1.  **Ouverture/Fermeture :** Utiliser `/**` et `*/`.
2.  **Description :** La première ligne doit être une description concise et claire (français).
3.  **Tags Obligatoires :**
    * **`@group [Nom du Groupe]`** : (Ex: `layout`, `typography`, `spacing`, `buttons`). Utiliser le nom du dossier si pertinent (ex: `@group layout` pour un mixin de grille).
    * **`@public`** : Doit être inclus pour tout élément destiné à la librairie.
    * **`@example`** : Fournir un exemple d'utilisation réel du code SASS. Le code doit être formaté dans un bloc de code SASS (ex: ````scss`).

4.  **Tags Spécifiques aux Types :**

| Élément | Tags Requis | Format |
| :--- | :--- | :--- |
| **`@mixin`** | `@param`, `@example` | `@param {Type} $name [Valeur par défaut] - Description.` |
| **`@function`** | `@param`, `@return`, `@example` | `@return {Type} - Description de la valeur retournée.` |
| **`$variable`** | `@type` | `@type {Type} - Usage de la variable.` |
| **`%placeholder`** | `@example` | Le commentaire doit expliquer quand étendre ce placeholder. |

---

### Phase 2 : Génération des Fichiers Markdown (Docsify)

#### 2.1. Documentation depuis SassDoc (Éléments Fonctionnels)

**Instruction :** Générer les fichiers Markdown suivants dans un dossier `docs/` en se basant **uniquement** sur les commentaires SassDoc des éléments fonctionnels.

##### 1. Fichier de Sommaire et Navigation (`docs/_sidebar.md`)

* Générer un fichier `docs/_sidebar.md` qui liste tous les groupes SassDoc définis. L'ordre des liens doit respecter l'ordre **ITCSS** : `abstracts` > `layout` > `components` > `utilities`.
* Format de lien : `* [Nom du Groupe](chemin/fichier-du-groupe.md)`

##### 2. Fichiers de Documentation par Groupe (Fonctions, Mixins, Placeholders)

* Pour chaque groupe SassDoc (ex: `@group layout`), créer un fichier Markdown correspondant (ex: `docs/abstracts/layout.md`).
* Le contenu du fichier `.md` doit être structuré comme suit :

    * **Titre principal (H1) :** `# Nom du Groupe`
    * **Sous-titre (H2) :** `## [Type d'Élément]s` (ex: `## Functions`, `## Mixins`, `## Placeholders`)
    * Pour chaque élément du groupe, utiliser :
        * **Titre (H3) :** `### [Nom de l'Élément]` (ex: `### theme()`, `### button-variant()`)
        * **Description :** Utiliser la description principale du bloc SassDoc.
        * **Paramètres/Retour :** Lister les paramètres (`@param`) et la valeur de retour (`@return`) sous forme de liste Markdown ou de tableau.
        * **Exemple :** Inclure le contenu du tag `@example` dans un bloc de code SASS (```scss).

#### 2.2. Documentation Markdown Manuelle (Thèmes, Helpers, Utilities, Couleurs)

**Instruction :** Créer des fichiers Markdown manuels dans le dossier `docs/` pour documenter les thèmes, helpers, utilities et couleurs. Ces fichiers permettent d'inclure des éléments complexes non supportés par SassDoc.

##### Structure des Fichiers Markdown Manuels

Les fichiers Markdown manuels doivent être organisés selon l'architecture ITCSS :

```
docs/
├── themes/
│   ├── light.md
│   ├── dark.md
│   ├── comparison.md (tableau comparatif de tous les thèmes)
│   └── ...
├── utilities/
│   ├── typography.md
│   ├── displays.md
│   ├── palette.md
│   ├── grid.md (avec exemples graphiques)
│   └── ...
├── colors/
│   ├── primary.md (avec nuancier)
│   ├── palette.md (avec palette complète)
│   └── ...
└── helpers/
    └── ...
```

##### Éléments Complexes Autorisés dans la Documentation Markdown

Les fichiers Markdown manuels peuvent inclure :

1. **Tableaux de comparaison** (pour les thèmes, couleurs, etc.)
   ```markdown
   | Propriété | Light | Dark | Monokai Pro |
   |-----------|-------|------|-------------|
   | background | #ffffff | #1e1e1e | #2d2a2e |
   | accent | #1a73e8 | #007acc | #ff6188 |
   ```

2. **Exemples graphiques** (pour la grille, layouts, etc.)
   ```markdown
   ## Exemple de Grille
   
   ```
   [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]
   ```
   ```

3. **Nuanciers de couleurs** (pour les palettes)
   ```markdown
   ## Nuancier des Couleurs Primaires
   
   | Couleur | Hex | RGB | Utilisation |
   |---------|-----|-----|-------------|
   | Bleu | #007bff | rgb(0, 123, 255) | Actions principales |
   ```

4. **Exemples HTML/CSS complets** (pour les utilities)
   ```markdown
   ## Exemples d'Utilisation
   
   ```html
   <div class="nappr-grid">
     <div class="nappr-grid-col-6">Colonne 1</div>
     <div class="nappr-grid-col-6">Colonne 2</div>
   </div>
   ```
   ```

5. **Diagrammes et schémas** (pour les architectures complexes)
   ```markdown
   ## Architecture du Système de Thèmes
   
   ```
   [Thème Actif] → [Variables CSS] → [Composants]
   ```

##### Exemple de Fichier Markdown Manuel : `docs/themes/comparison.md`

```markdown
# Comparaison des Thèmes

## Vue d'ensemble

Ce document compare tous les thèmes disponibles dans la librairie.

## Tableau Comparatif

| Propriété | Light | Dark | Monokai Pro | Dracula |
|-----------|-------|------|-------------|---------|
| background | #ffffff | #1e1e1e | #2d2a2e | #282a36 |
| panel | #f8f8f8 | #252526 | #403e41 | #44475a |
| accent | #1a73e8 | #007acc | #ff6188 | #bd93f9 |
| text-primary | #202124 | #cccccc | #f8f8f2 | #f8f8f2 |

## Recommandations d'Utilisation

- **Light** : Pour les applications professionnelles et les environnements clairs
- **Dark** : Pour réduire la fatigue oculaire en environnement sombre
- **Monokai Pro** : Pour les développeurs familiarisés avec ce thème
```

##### Exemple de Fichier Markdown Manuel : `docs/utilities/grid.md`

```markdown
# Système de Grille

## Introduction

Le système de grille utilise CSS Grid avec 12 colonnes par défaut.

## Exemple Visuel

```
┌─────────────────────────────────────────────────────────┐
│  [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]    │
└─────────────────────────────────────────────────────────┘
```

## Classes Disponibles

### Colonnes

- `.nappr-grid-col-1` à `.nappr-grid-col-12`
- `.nappr-grid-md--col-1` à `.nappr-grid-md--col-12` (responsive)

## Exemples

```html
<div class="nappr-grid">
  <div class="nappr-grid-col-6">50%</div>
  <div class="nappr-grid-col-6">50%</div>
</div>
```
```

#### 3. Fichier d'Accueil (`docs/README.md`)

* Générer un fichier `docs/README.md` minimaliste servant de page d'accueil pour Docsify, expliquant brièvement le but de la librairie SASS et son architecture (7-1/ITCSS).

---

### 📝 Contraintes pour l'Agent IA

1.  **SassDoc uniquement pour les éléments fonctionnels :** Ne pas générer de SassDoc pour les variables, maps, ou classes CSS générées.
2.  **Formatage Stricte :** Les blocs de code doivent être délimités par ` ```scss` ou ` ```html` en Markdown selon le contexte.
3.  **Langue :** Toutes les descriptions, noms de groupes et titres doivent être en **Français**.
4.  **Priorité ITCSS :** S'assurer que les éléments d'outils (`abstracts`) et de base apparaissent en premier, et les utilitaires (`utilities`) en dernier dans la navigation (`_sidebar.md`).
5.  **Documentation Markdown Manuelle :** Créer des fichiers Markdown riches pour les thèmes, helpers, utilities et couleurs avec des éléments complexes (tableaux, graphiques, nuanciers).
6.  **Références croisées :** Dans les fichiers SASS, ajouter des commentaires `//` pointant vers la documentation Markdown (ex: `// Documentation complète disponible dans docs/themes/light.md`).
