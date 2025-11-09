const sortMediaQueries = require('postcss-sort-media-queries');
const cssnano = require('cssnano');

const devMode = process.env.NODE_ENV === 'development';
module.exports = {
  plugins: [
    sortMediaQueries({
      sort: 'mobile-first',
    }),
    cssnano({
      preset: [
        'advanced',
        {
          /* -------------------

          Lite preset

          ------------------- */
          // Supprime les règles et les at-règles vides.
          discardEmpty: !devMode,
          // Supprime tous les commentaires du CSS.
          discardComments: true,
          // discardComments: !devMode,
          // Normalise les espaces blancs pour la minification.
          normalizeWhitespace: !devMode,
          /* -------------------

          Default preset

          ------------------- */
          // Trie les déclarations de propriétés CSS à l'intérieur des règles.
          cssDeclarationSorter: true,
          // Réduit les expressions 'calc()' lorsque cela est possible.
          calc: !devMode,
          // Minifie les valeurs de couleur (ex: 'white' au lieu de '#FFFFFF').
          colormin: !devMode,
          // Convertit les valeurs numériques en leur forme la plus courte (ex: '0ms' en '0').
          convertValues: true,
          // Supprime les duplicatas de sélecteurs et de règles.
          discardDuplicates: true,
          // Supprime les déclarations de propriétés qui sont immédiatement surchargées.
          discardOverridden: true,
          // Fusionne les propriétés longues en propriétés raccourcies (shorthand).
          mergeLonghand: false,
          // Fusionne les règles ayant des sélecteurs ou des propriétés identiques.
          mergeRules: false,
          // Minifie les valeurs des propriétés liées aux polices de caractères.
          minifyFontValues: true,
          // Simplifie les fonctions de dégradé.
          minifyGradients: true,
          // Minifie les paramètres des 'at-règles'.
          minifyParams: true,
          // Minifie et optimise les sélecteurs.
          minifySelectors: true,
          // Normalise le jeu de caractères ('@charset') en le supprimant si c'est 'UTF-8' par défaut.
          normalizeCharset: false,
          // Normalise les valeurs de 'display' (ex: 'block flow' en 'block').
          normalizeDisplayValues: false,
          // Normalise les valeurs de position (ex: 'center' en '50%').
          normalizePositions: false,
          // Normalise la syntaxe de répétition des dégradés.
          normalizeRepeatStyle: true,
          // Normalise les chaînes de caractères (ex: supprime les guillemets inutiles).
          normalizeString: true,
          // Normalise les fonctions de temporisation (ex: 'ease' en 'cubic-bezier(...)').
          normalizeTimingFunctions: false,
          // Normalise les valeurs unicode.
          normalizeUnicode: true,
          // Normalise les URL dans les fonctions 'url()'.
          normalizeUrl: true,
          // Réorganise les valeurs de certaines propriétés CSS pour la minification.
          orderedValues: true,
          // Remplace les valeurs de propriété réinitialisables par le mot-clé 'initial' si c'est plus court.
          reduceInitial: true,
          // Simplifie les fonctions de transformation 3D en 2D lorsque possible.
          reduceTransforms: false,
          // Optimise les déclarations de données SVG dans CSS.
          svgo: false,
          // Assure que chaque sélecteur est unique dans une règle.
          uniqueSelectors: true,
          /* -------------------

          Advanced preset

          ------------------- */
          // Ajoute des préfixes vendeurs basés sur les règles de support de navigateurs.
          autoprefixer: !devMode,
          // Supprime les règles et sélecteurs inutilisés.
          discardUnused: false,
          // Fusionne les sélecteurs simples ('identifiants') répétés.
          mergeIdents: false,
          // Raccourcit les identifiants (comme les 'keyframes' et les 'grid-names').
          reduceIdents: false,
          // Réduit les valeurs 'z-index' qui sont trop grandes.
          zindex: false,
        },
      ],
    }),
  ],
};
