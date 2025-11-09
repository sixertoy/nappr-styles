#!/bin/bash

set -e

DIST_DIR=./dist
INPUT_FILE=./styles.scss
BANNER_TEMP_FILE=./styles.metadata.scss
OUTPUT_FILE=${DIST_DIR}/styles.css
OUTPUT_FILE_MIN=${DIST_DIR}/styles.min.css
OUTPUT_TEMP_FILE=${DIST_DIR}/styles.tmp.css
OUTPUT_TEMP_MAP_FILE=${OUTPUT_TEMP_FILE}.map

# ----------------------------------
#
# Récupérer les informations du package.json
#
# ----------------------------------
VERSION=$(node -p "require('./package.json').version")
REPOSITORY=$(node -p "require('./package.json').repository.url")
SINCE=$(date +%Y-%m-%d)

echo -e "\033[32mBuilding SASS files (v${VERSION})\033[m"

# ----------------------------------
#
# Nettoyer et recréer le dossier dist
#
# ----------------------------------
[ -d ${DIST_DIR} ] && rm -rf ${DIST_DIR}
mkdir -p ${DIST_DIR}

# ----------------------------------
#
# Générer le fichier de métadonnées SASS (Banner)
#
# ----------------------------------
echo -e "\033[33mGenerating SASS banner file...\033[m"

cat > $BANNER_TEMP_FILE <<EOF
\$version: '${VERSION}';
\$repository: '${REPOSITORY}';
\$since: '${SINCE}';
EOF

# ----------------------------------
#
# Compiler le fichier SASS une seule fois dans un fichier temporaire
#
# ----------------------------------
echo -e "\033[33mCompiling SASS to temporary file...\033[m"
yarn sass \
  --load-path=../node_modules \
  --color \
  $INPUT_FILE $OUTPUT_TEMP_FILE \
  $1

# Vérifier que la compilation SASS a réussi
if [ ! -f "$OUTPUT_TEMP_FILE" ]; then
  echo -e "\033[31m✗ SASS compilation failed\033[m"
  exit 1
fi

# ----------------------------------
#
# Générer la version DEV
#
# ----------------------------------
echo -e "\033[33mProcessing expanded version with PostCSS (dev)...\033[m"
NODE_ENV=development yarn postcss \
  $OUTPUT_TEMP_FILE \
  --output $OUTPUT_FILE \
  --verbose

# ----------------------------------
#
# Générer la version PROD
#
# ----------------------------------
echo -e "\033[33mProcessing minified version with PostCSS (prod)...\033[m"
NODE_ENV=production yarn postcss \
  $OUTPUT_TEMP_FILE \
  --output $OUTPUT_FILE_MIN \

# ----------------------------------
#
# Nettoyer le fichier temporaire
#
# ----------------------------------
echo -e "\033[33mCleaning up temporary files...\033[m"
[ -f ${BANNER_TEMP_FILE} ] && rm -f ${BANNER_TEMP_FILE}
[ -f ${OUTPUT_TEMP_FILE} ] && rm -f ${OUTPUT_TEMP_FILE}
[ -f ${OUTPUT_TEMP_MAP_FILE} ] && rm -f ${OUTPUT_TEMP_MAP_FILE}

# ----------------------------------
#
# Compiler le thème de documentation
#
# ----------------------------------
# DOCS_INPUT=./docs.theme.scss
# DOCS_OUTPUT=./docs/docs.theme.css

# [ -f $DOCS_OUTPUT ] && rm $DOCS_OUTPUT
# [ -f ${DOCS_OUTPUT}.map ] && rm ${DOCS_OUTPUT}.map

# yarn sass \
#   --load-path=../node_modules \
#   --style=compressed \
#   $SASS_DEBUG_FLAG \
#   $DOCS_INPUT $DOCS_OUTPUT

# # Traiter avec PostCSS (docs theme)
# echo -e "\033[33mProcessing docs theme with PostCSS...\033[m"
# NODE_ENV=production yarn postcss $DOCS_OUTPUT --output $DOCS_OUTPUT --map

echo -e "\033[32m✓ Build completed successfully\033[m"
# Les fichiers temporaires seront nettoyés automatiquement par le trap EXIT
exit 0
