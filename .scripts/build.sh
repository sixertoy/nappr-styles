#!/bin/bash

set -e

INPUT_FILE=./styles.scss
OUTPUT_FILE=./dist/styles.css
VERSION=$(node -p "require('./package.json').version")

echo -e "\033[32mBuilding SASS files (v${VERSION})\033[m"

# Créer le dossier dist s'il n'existe pas
mkdir -p dist

# Nettoyer les anciens fichiers
[ -f $OUTPUT_FILE ] && rm $OUTPUT_FILE
[ -f ${OUTPUT_FILE}.map ] && rm ${OUTPUT_FILE}.map

# Compiler le fichier principal avec sourcemap
yarn sass \
  --load-path=node_modules \
  --load-path=../node_modules \
  --style=compressed \
  --source-map \
  --embed-sources \
  $INPUT_FILE $OUTPUT_FILE

# Compiler le thème de documentation
DOCS_INPUT=./docs.theme.scss
DOCS_OUTPUT=./docs/docs.theme.css

[ -f $DOCS_OUTPUT ] && rm $DOCS_OUTPUT
[ -f ${DOCS_OUTPUT}.map ] && rm ${DOCS_OUTPUT}.map

yarn sass \
  --load-path=node_modules \
  --load-path=../node_modules \
  --style=compressed \
  --source-map \
  --embed-sources \
  $DOCS_INPUT $DOCS_OUTPUT

echo -e "\033[32m✓ Build completed successfully\033[m"
exit 0
