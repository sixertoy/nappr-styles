#!/bin/bash
# Script pour le formatage des fichiers
prettier $1 "sass/**/*.scss" --ignore-path .gitignore
