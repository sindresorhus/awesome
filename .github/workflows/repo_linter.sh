#!/bin/bash

# Find the repo in the git diff and then set it to an env variable.
REPO_TO_LINT=$(
    git diff origin/main -- readme.md |
    grep ^+ |
    grep -Eo 'https.*#readme' |
    sed 's/#readme//' |
    head -n 1   # Use only the first match if multiple
)

# If there's no repo found, exit quietly.
if [ -z "$REPO_TO_LINT" ]; then
    echo "No new link found in the format: https://....#readme"
    exit 0
fi

echo "Cloning $REPO_TO_LINT"

CLONE_DIR="cloned"

# Remove existing cloned directory if exists
if [ -d "$CLONE_DIR" ]; then
    rm -rf "$CLONE_DIR"
fi

mkdir "$CLONE_DIR"
cd "$CLONE_DIR" || exit 1

git clone "$REPO_TO_LINT" .

# Run awesome-lint
npx awesome-lint

# Go back to original directory
cd ..
