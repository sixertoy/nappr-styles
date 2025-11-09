# Référence Rapide - Règles Importantes

Ce fichier contient les règles essentielles à respecter lors du développement avec `@nappr/nappr-styles`. Pour plus de détails, consulter les fichiers détaillés dans ce dossier.

## Commentaires SASS

1. **Commentaires** - Utiliser `//` (jamais `/* */` sauf documentation en-tête)
2. **Grandes sections** - `// ==========================================================` (exactement 57 caractères `=`)
3. **Sous-sections** - `// --- Titre` (3 tirets + espace, pas de tirets à la fin)
4. **Documentation en-tête** - `/** */` uniquement pour la documentation complète d'un fichier

## Architecture (7-1 Pattern & ITCSS)

1. **Ordre d'importation ITCSS** - Dans ce projet, respecter l'ordre dans `main.scss` : Configuration/Outils (Abstracts) → Base → Placeholders/Utils → Components/Layout → Helpers (Utilities). *(Ordre ITCSS standard complet : Abstracts → Base → Layout → Components → Themes → Utilities. Note : Les dossiers `vendors/` et `pages/` préconisés dans le pattern 7-1 standard ne sont pas utilisés dans cette librairie.)*
2. **Partials SASS** - Tous les fichiers doivent être des partials (préfixe `_`)
3. **Nommage BEM** - Utiliser BEM pour tous les composants dans `components/`
4. **Design Tokens** - Variables sémantiques (`$color-primary`) plutôt que valeurs rigides (`#007bff`)
5. **Unités** - Utiliser `rem` pour typographie, espacement et dimensions (accessibilité)

## Structure des Fichiers

1. **Organisation modulaire** - Un fichier par fonctionnalité/concept
2. **Préfixes de fichiers** - Utiliser `_` pour les fichiers partiels SASS
3. **Barrel files** - Utiliser `_.scss` pour regrouper les imports
4. **Ordre ITCSS** - Respecter l'ordre des couches dans `main.scss`

## Conventions de Nommage

1. **Variables globales** - Préfixe `$NAPPR_` (ex: `$NAPPR_GRID_COLUMNS`)
2. **Classes utilitaires (helpers/)** - Pas de préfixe uniforme, convention descriptive :
   - Classes de texte : `.text-left`, `.text-center`, `.text-right`, `.text-justify`
   - Classes d'état : `.is-flex`, `.is-block`, `.is-hidden`, `.is-visible`
   - Classes de négation : `.no-margin`, `.no-padding`, `.no-underline`
   - Classes de positionnement : `.valign-top`, `.valign-middle`, `.valign-bottom`
3. **Classes de grille (components/grid/)** - Préfixe `nappr-` (ex: `.nappr-grid`, `.nappr-grid--gap`)
4. **Placeholders** - Préfixe `%` (ex: `%flex-display`)
5. **Mixins** - Nom descriptif en kebab-case (ex: `@mixin respond-to`)

## Imports et Modules

1. **@use au lieu de @import** - Utiliser `@use` pour les modules SASS
2. **Namespaces** - Utiliser `as *` pour les imports globaux, ou un namespace spécifique
3. **Ordre des imports** - Variables → Functions → Mixins → Code

## Variables et Configuration

1. **!default** - Toujours utiliser `!default` pour les variables configurables
2. **Variables CSS** - Générer via `:root` avec préfixe `--nappr-`
3. **Breakpoints** - Utiliser les variables définies dans `config/variables/breakpoints`

## Maintenance

1. **Vérification avant commit** - S'assurer que tous les commentaires suivent le standard
2. **Cohérence** - Corriger les fichiers existants lors de leur modification
3. **Documentation** - Ajouter des commentaires explicatifs pour le code complexe

## Fichiers de Référence

- `sass/main.scss` - Structure principale
- `sass/_globals.scss` - Variables globales et mixins d'export
- `sass/abstracts/variables/_defaults.scss` - Variables par défaut
- `sass/abstracts/placeholders/_placeholders.scss` - Placeholders réutilisables
