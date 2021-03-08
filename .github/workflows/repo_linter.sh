#!/bin/bash

# by default github actions doesn't fetch the whole repo so we are getting the latest commit on main
git fetch origin main:main --depth=1

# find the repo in the git diff and then set it to an env variables
git diff main readme.md | grep ^+ | grep -Eo 'https.*#readme' | sed 's/#readme//' | xargs -I {} echo "::set-env name=REPO_TO_LINT::{}"

# If there's no repo found leave an error message
if [ -z ${REPO_TO_LINT+x} ];
then 
    echo "No new link found in the format:  https://....#readme"
else
    echo "Repo detected '$var'"
    echo "Cloning $REPO_TO_LINT"
    mkdir cloned
    cd cloned
    git clone --depth=1 "$REPO_TO_LINT" .
    npx awesome-lint
fi
