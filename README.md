# 🎂 NAPPR Styles

> Collection de classes utilitaires et de helpers SCSS/CSS, incluant un système de grille responsive basé sur CSS Grid.

## 📦 Installation

```bash
yarn add https://github.com/sixertoy/nappr-styles.git#latest
```

## 🎯 Usage

### Intégration CSS

```scss
// Import dans votre fichier SCSS principal
@import '@nappr/nappr-styles';
```

### Import des Sources SCSS

Pour surcharger les variables par défaut (couleurs, espacements, configuration de la grille, etc.), importez vos propres variables avant les sources de la librairie.

```scss
// 1. Définition de vos variables personnalisées (fichier: './variables.scss')
@use './variables.scss' as *; 

// 2. Import des sources, qui utiliseront les variables définies ci-dessus
@use '@nappr/nappr-styles/styles.scss' as *;
```

## 📖 Documentation

**[Documentation Complète](https://sixertoy.github.io/nappr-styles)**

La documentation inclut les sections suivantes :

  * **Guide de Démarrage Rapide :** Instructions pas à pas pour la première utilisation.
  * **Système de Grille CSS Grid :** Détails sur l'utilisation du système de grille responsive.
  * **Classes Utilitaires :** Référence complète des helpers, typographie et classes d'espacement.
  * **Configuration des Variables :** Guide pour la personnalisation des paramètres globaux via SCSS.

### Pour les Contributeurs et Agents IA

Voir [AGENT.md](./AGENT.md) pour la documentation complète des règles et conventions du projet, organisée dans `.cursor/rules/`.
