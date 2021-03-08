#!/bin/bash

# by default github actions doesn't fetch the whole repo so we are getting the latest commit on main
git fetch origin main:main --depth=1

# find the repo in the git diff and then set it to an env variables
REPO_TO_LINT=$(
    git diff main readme.md | 
    # Look for changes (indicated by lines startingi with +)
    grep ^+ | 
    # Get the line that includes the readme
    grep -Eo 'https.*#readme' | 
    # Get just the url
    sed 's/#readme//')

# If there's no repo found exit quietly
if [ -z ${REPO_TO_LINT+x} ];
then 
    echo "No new link found in the format:  https://....#readme"
else
    echo "Cloning $REPO_TO_LINT"
    mkdir cloned
    cd cloned
    git clone --depth=1 "$REPO_TO_LINT" .
    npx awesome-lint
fi
