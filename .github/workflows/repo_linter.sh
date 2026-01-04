#!/bin/bash

# Strict error handling: exit on error, undefined variables, and pipe failures
set -euo pipefail

# Constants
readonly CLONE_DIR="cloned"
readonly MAIN_BRANCH="origin/main"
readonly README_FILE="readme.md"

# Function: Extract repository URL from git diff
# Looks for newly added lines containing GitHub repository links with #readme anchors
extract_repo_url() {
    local repo_url

    # Parse git diff to find new repository links:
    # 1. Get changes from main branch in readme.md
    # 2. Filter for added lines (starting with +)
    # 3. Extract URLs ending with #readme
    # 4. Remove the #readme suffix
    # 5. Take only the first match
    repo_url=$(git diff "${MAIN_BRANCH}" -- "${README_FILE}" | \
        grep '^+' | \
        grep -Eo 'https.*#readme' | \
        sed 's/#readme//' | \
        head -n 1)

    echo "${repo_url}"
}

# Function: Validate repository URL
# Ensures the URL is non-empty and points to GitHub
validate_repo_url() {
    local url="$1"

    if [ -z "${url}" ]; then
        return 1
    fi

    # Verify it's a GitHub URL
    if [[ ! "${url}" =~ ^https://github\.com/ ]]; then
        echo "Error: Invalid GitHub URL: ${url}" >&2
        return 1
    fi

    return 0
}

# Function: Setup clone directory
# Removes existing clone directory if present and creates a fresh one
setup_clone_directory() {
    if [ -d "${CLONE_DIR}" ]; then
        echo "Removing existing clone directory..."
        rm -rf "${CLONE_DIR}"
    fi

    mkdir "${CLONE_DIR}"
}

# Function: Clone repository and run awesome-lint
# Clones the repository into the clone directory and runs the linter
clone_and_lint() {
    local repo_url="$1"

    echo "Cloning ${repo_url}"

    # Clone the repository
    if ! git clone "${repo_url}" "${CLONE_DIR}"; then
        echo "Error: Failed to clone repository" >&2
        return 1
    fi

    # Run linter in the cloned directory (using subshell to preserve pwd)
    (cd "${CLONE_DIR}" && npx awesome-lint)
}

# Main execution flow
main() {
    local repo_to_lint

    # Step 1: Extract repository URL from the diff
    repo_to_lint=$(extract_repo_url)

    # Step 2: Validate the extracted URL
    if ! validate_repo_url "${repo_to_lint}"; then
        echo "No new link found in the format: https://github.com/...#readme"
        exit 0
    fi

    # Step 3: Setup clean clone directory
    setup_clone_directory

    # Step 4: Clone and lint the repository
    clone_and_lint "${repo_to_lint}"
}

# Execute main function
main
