#!/bin/bash

# Find the repo in the git diff and then set it to an env variables.
REPO_TO_LINT=$(
	git diff origin/main -- readme.md |
	# Look for changes (indicated by lines starting with +).
	grep ^+ |
	# Get the line that includes the readme.
	grep -Eo 'https.*#readme' |
	# Get just the URL.
	sed 's/#readme//')

# If there's no repo found, exit quietly.
if [ -z "$REPO_TO_LINT" ]; then
	echo "No new link found in the format:  https://....#readme"
else
	echo "Cloning $REPO_TO_LINT"
	mkdir cloned
	cd cloned
	git clone "$REPO_TO_LINT" .
	npx awesome-lint
fi
