#!/bin/bash

OUTPUT_FILE=./styles.css
INPUT_FILE=./lib/styles.scss

echo -e "\033[32mBuilding SASS files\033[m"

if [ -f $OUTPUT_FILE ];
then
  rm $OUTPUT_FILE
fi

$(yarn bin)/node-sass --recursive --output-style=compressed $INPUT_FILE $OUTPUT_FILE

exit 0
