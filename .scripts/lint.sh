#!/bin/bash
# Script pour la vérification des fichiers
stylelint "**/*.scss" --config stylelint.config.json --ignore-path .gitignore $1
