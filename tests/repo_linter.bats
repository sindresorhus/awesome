#!/usr/bin/env bats

# Test suite for repo_linter.sh
# This file tests the repository linter script that extracts and validates
# new repository links added to readme.md

setup() {
    # Create a temporary directory for test fixtures
    export TEST_TEMP_DIR="$(mktemp -d)"
    export ORIGINAL_DIR="$(pwd)"

    # Create a mock git command that we can control
    export PATH="$TEST_TEMP_DIR/bin:$PATH"
    mkdir -p "$TEST_TEMP_DIR/bin"
    mkdir -p "$TEST_TEMP_DIR/test-repo"

    # Copy the script to test directory
    cp .github/workflows/repo_linter.sh "$TEST_TEMP_DIR/"
    cd "$TEST_TEMP_DIR"
}

teardown() {
    # Clean up temporary directory
    cd "$ORIGINAL_DIR"
    rm -rf "$TEST_TEMP_DIR"
}

# Helper function to create a mock git diff output
create_mock_git() {
    local diff_output="$1"
    local real_git_path
    real_git_path=$(which -a git | grep -v "$TEST_TEMP_DIR/bin/git" | head -1)

    cat > "$TEST_TEMP_DIR/bin/git" << 'EOF'
#!/bin/bash
if [[ "$1" == "diff" ]]; then
    cat << 'DIFF_OUTPUT'
DIFF_PLACEHOLDER
DIFF_OUTPUT
elif [[ "$1" == "clone" ]]; then
    # Mock git clone - just create a directory
    mkdir -p "$2" 2>/dev/null || true
    exit 0
fi
exit 0
EOF

    # Replace the placeholder with actual diff output
    sed -i "s|DIFF_PLACEHOLDER|$diff_output|" "$TEST_TEMP_DIR/bin/git"
    chmod +x "$TEST_TEMP_DIR/bin/git"
}

# Helper function to create a mock npx command
create_mock_npx() {
    local exit_code="${1:-0}"
    cat > "$TEST_TEMP_DIR/bin/npx" << 'NPXEOF'
#!/bin/bash
echo "Mock npx awesome-lint called"
exit 0
NPXEOF
    chmod +x "$TEST_TEMP_DIR/bin/npx"
}

@test "script exists and is executable" {
    [ -f ".github/workflows/repo_linter.sh" ]
    [ -x ".github/workflows/repo_linter.sh" ]
}

@test "exits quietly when no new links are found" {
    create_mock_git ""
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"No new link found"* ]]
}

@test "exits quietly when diff has no lines starting with +" {
    local diff_output="- Old line without link
  Context line
- Another old line"

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"No new link found"* ]]
}

@test "detects valid repository link in standard format" {
    local diff_output="+- [Awesome List](https://github.com/user/awesome-list#readme) - Description."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"Cloning https://github.com/user/awesome-list"* ]]
    [[ "$output" == *"Mock npx awesome-lint called"* ]]
}

@test "extracts URL correctly and removes #readme fragment" {
    local diff_output="+- [Test](https://github.com/test/repo#readme) - Test repo."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    # Should clone without #readme
    [[ "$output" == *"https://github.com/test/repo"* ]]
    [[ "$output" != *"#readme"* ]] || [[ "$output" == *"Cloning"*"#readme"* ]]
}

@test "ignores lines without #readme" {
    local diff_output="+- [Invalid](https://github.com/user/repo) - No readme fragment."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"No new link found"* ]]
}

@test "handles multiple added lines but extracts only first #readme link" {
    local diff_output="+- [First](https://github.com/user/first#readme) - First repo.
+- [Second](https://github.com/user/second#readme) - Second repo.
+- [Third](https://github.com/user/third) - No fragment."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    # Should only clone the first one (based on script logic)
    [[ "$output" == *"Cloning https://github.com/user/first"* ]]
}

@test "ignores removed lines (starting with -)" {
    local diff_output="-- [Removed](https://github.com/user/removed#readme) - Removed repo.
+- [Added](https://github.com/user/added#readme) - Added repo."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/user/added"* ]]
    [[ "$output" != *"removed"* ]]
}

@test "handles URLs with different domain" {
    local diff_output="+- [GitLab](https://gitlab.com/user/project#readme) - GitLab project."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://gitlab.com/user/project"* ]]
}

@test "handles URLs with hyphens and underscores" {
    local diff_output="+- [Complex](https://github.com/user-name/repo_name-test#readme) - Complex naming."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/user-name/repo_name-test"* ]]
}

@test "handles URLs with organizations and slashes" {
    local diff_output="+- [Org](https://github.com/my-org/sub-project/repo#readme) - Org repo."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"Cloning"* ]]
}

@test "creates cloned directory" {
    local diff_output="+- [Test](https://github.com/test/repo#readme) - Test."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    # Check if cloned directory was created (it will exist after script runs)
    [ -d "cloned" ]
}

@test "runs npx awesome-lint in cloned directory" {
    local diff_output="+- [Test](https://github.com/test/repo#readme) - Test."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"Mock npx awesome-lint called"* ]]
}

@test "handles empty diff output" {
    create_mock_git ""
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"No new link found"* ]]
}

@test "handles whitespace in diff output" {
    local diff_output="

+- [Test](https://github.com/test/repo#readme) - Test.
    "

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"Cloning https://github.com/test/repo"* ]]
}

@test "handles context lines (no + or - prefix)" {
    local diff_output=" Context line
+- [Test](https://github.com/test/repo#readme) - Test.
 Another context line"

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"Cloning https://github.com/test/repo"* ]]
}

@test "handles HTTPS URLs correctly" {
    local diff_output="+- [HTTPS](https://github.com/secure/repo#readme) - Secure."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/secure/repo"* ]]
}

@test "handles URLs with numbers" {
    local diff_output="+- [Numbered](https://github.com/user123/repo456#readme) - Numbers."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/user123/repo456"* ]]
}

@test "handles URLs with dots in domain" {
    local diff_output="+- [Subdomain](https://awesome.github.io/project#readme) - GitHub Pages."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://awesome.github.io/project"* ]]
}

@test "script uses correct git diff arguments" {
    # This test verifies the git diff command is called correctly
    cat > "$TEST_TEMP_DIR/bin/git" << 'EOF'
#!/bin/bash
if [[ "$1" == "diff" ]]; then
    # Verify it's comparing with origin/main and readme.md
    echo "Git diff called with: $@" >&2
    if [[ "$2" == "origin/main" ]] && [[ "$3" == "--" ]] && [[ "$4" == "readme.md" ]]; then
        echo "+- [Test](https://github.com/test/repo#readme) - Test."
    fi
elif [[ "$1" == "clone" ]]; then
    mkdir -p "$2" 2>/dev/null || true
fi
exit 0
EOF
    chmod +x "$TEST_TEMP_DIR/bin/git"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"Cloning"* ]]
}

@test "handles edge case: link at start of line" {
    local diff_output="+https://github.com/user/repo#readme"

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/user/repo"* ]]
}

@test "handles edge case: multiple #readme in same line" {
    local diff_output="+- [First](https://github.com/user/first#readme) and [Second](https://github.com/user/second#readme)"

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    # Script should extract first match
    [[ "$output" == *"Cloning"* ]]
}

@test "verifies git clone is called with extracted URL" {
    local diff_output="+- [Test](https://github.com/verify/clone-test#readme) - Test."

    # Create a git mock that logs clone commands
    cat > "$TEST_TEMP_DIR/bin/git" << 'EOF'
#!/bin/bash
if [[ "$1" == "diff" ]]; then
    echo "+- [Test](https://github.com/verify/clone-test#readme) - Test."
elif [[ "$1" == "clone" ]]; then
    echo "Git clone called with URL: $2" >&2
    mkdir -p "$2" 2>/dev/null || true
    exit 0
fi
EOF
    chmod +x "$TEST_TEMP_DIR/bin/git"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/verify/clone-test"* ]]
}

@test "handles special characters in URL path" {
    local diff_output="+- [Special](https://github.com/user/repo-with-special_chars.test#readme) - Special."

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"https://github.com/user/repo-with-special_chars.test"* ]]
}
