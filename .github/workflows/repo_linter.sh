#!/bin/bash
set -eo pipefail

# Pin awesome-lint to a verified version (avoid pulling an arbitrary/compromised release at CI time).
AWESOME_LINT_VERSION="2.3.0"

# Find the repo in the git diff and then set it to an env variable.
REPO_TO_LINT=$(
	git diff origin/main -- readme.md |
	# Look for changes (indicated by lines starting with +).
	(grep ^+ || true) |
	# Get the line that includes the readme.
	(grep -Eo 'https.*#readme' || true) |
	# Get just the URL.
	sed 's/#readme//')

# If there's no repo found, exit quietly.
if [ -z "$REPO_TO_LINT" ]; then
	echo "No new link found in the format:  https://....#readme"
	exit 0
fi

# Only accept canonical GitHub repo URLs (anti-injection: reject anything else).
if ! [[ "$REPO_TO_LINT" =~ ^https://github\.com/[A-Za-z0-9._-]+/[A-Za-z0-9._-]+/?$ ]]; then
	echo "::error::Refused URL (expected https://github.com/owner/repo): $REPO_TO_LINT"
	exit 1
fi

echo "Cloning $REPO_TO_LINT"
mkdir -p cloned
cd cloned
# Isolate the untrusted clone: no hooks executed, no tags, shallow.
GIT_ALLOW_PROTOCOL=https \
git -c core.hooksPath=/dev/null clone --depth 1 --no-tags "$REPO_TO_LINT" .
npx "awesome-lint@${AWESOME_LINT_VERSION}"
