#!/bin/bash

# by default github actions doesn't fetch the whole repo so we are getting the latest commit on main
git fetch origin main:main --depth=1

# find the repo in the git diff and then set it to an env variables
git diff main readme.md | grep ^+ | grep -Eo 'https.*#readme' | sed 's/#readme//' | xargs -I {} echo "::set-env name=REPO_TO_LINT::{}"

# If there's no repo found leave an error message
if [ -z ${REPO_TO_LINT+x} ];
then 
    echo "Link to your list using the form https://....#readme" && exit 0; 
else
    echo "Repo detected '$var'"; 
    # Clone the repo into a new folder
    echo "Cloning $REPO_TO_LINT" && mkdir cloned && cd cloned && git clone --depth=1 "$REPO_TO_LINT" .
    npx awesome-lint
fi
