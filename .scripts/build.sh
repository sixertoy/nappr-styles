#!/bin/bash

INPUT_FILE=./styles.scss
OUTPUT_FILE=./dist/styles.css
VERSION=$(node -p "require('./package.json').version")

echo -e "\033[32mBuilding SASS files\033[m"

if [ -f $OUTPUT_FILE ];
then
  rm $OUTPUT_FILE
fi

$(yarn bin)/sass $INPUT_FILE $OUTPUT_FILE

INPUT_FILE=./docs.theme.scss
OUTPUT_FILE=./docs/docs.theme.css

if [ -f $OUTPUT_FILE ];
then
  rm $OUTPUT_FILE
fi

$(yarn bin)/sass $INPUT_FILE $OUTPUT_FILE

exit 0
