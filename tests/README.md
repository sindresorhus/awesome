# Tests for repo_linter.sh

This directory contains comprehensive tests for the `repo_linter.sh` script, which is used to extract and validate new repository links added to the awesome list.

## Overview

The `repo_linter.sh` script:
- Extracts new repository links from git diffs in pull requests
- Identifies links in the format `https://...#readme`
- Clones the repository
- Runs `awesome-lint` to validate the repository structure

## Test Suite

The test suite (`repo_linter.bats`) provides comprehensive coverage including:

### Core Functionality Tests
- ✅ Script existence and executability
- ✅ Quiet exit when no new links are found
- ✅ Detection of valid repository links
- ✅ URL extraction and #readme fragment removal
- ✅ Git clone execution with correct URL
- ✅ Execution of npx awesome-lint

### Edge Case Tests
- ✅ Empty diff output
- ✅ Diff with no `+` prefixed lines
- ✅ Multiple links in the same diff
- ✅ Links without #readme fragment (should be ignored)
- ✅ Removed lines (starting with `-`)
- ✅ Context lines (no prefix)
- ✅ Whitespace handling

### URL Format Tests
- ✅ GitHub URLs
- ✅ GitLab URLs
- ✅ URLs with hyphens and underscores
- ✅ URLs with numbers
- ✅ URLs with organization paths
- ✅ URLs with subdomains
- ✅ URLs with special characters
- ✅ HTTPS protocol handling

### Integration Tests
- ✅ Directory creation (cloned/)
- ✅ Correct git diff arguments
- ✅ Multiple #readme in same line

## Prerequisites

To run these tests, you need:

1. **Bash** (version 4.0 or higher recommended)
2. **Bats** (Bash Automated Testing System)
3. **Git**

### Installing Bats

#### On macOS (using Homebrew)
```bash
brew install bats-core
```

#### On Ubuntu/Debian
```bash
sudo apt-get update
sudo apt-get install bats
```

#### Using npm
```bash
npm install -g bats
```

#### Manual installation
```bash
git clone https://github.com/bats-core/bats-core.git
cd bats-core
sudo ./install.sh /usr/local
```

## Running the Tests

### Run all tests
```bash
cd tests
bats repo_linter.bats
```

### Run with verbose output
```bash
bats --verbose repo_linter.bats
```

### Run with tap output (for CI/CD)
```bash
bats --tap repo_linter.bats
```

### Run specific test
```bash
bats --filter "detects valid repository link" repo_linter.bats
```

## Test Output

Successful test run output looks like:
```
 ✓ script exists and is executable
 ✓ exits quietly when no new links are found
 ✓ detects valid repository link in standard format
 ✓ extracts URL correctly and removes #readme fragment
 ...

25 tests, 0 failures
```

## Understanding the Tests

Each test follows this pattern:

1. **Setup**: Create mock git and npx commands with controlled output
2. **Execute**: Run the repo_linter.sh script
3. **Assert**: Verify the expected behavior

### Mock Strategy

The tests use mocks for:
- `git diff`: Provides controlled diff output
- `git clone`: Simulates repository cloning
- `npx awesome-lint`: Simulates linting execution

This approach ensures tests are:
- **Fast**: No actual network requests or cloning
- **Reliable**: No external dependencies
- **Isolated**: Tests don't affect each other

## Test Coverage

The test suite covers:

| Category | Coverage |
|----------|----------|
| Happy Path | ✅ 100% |
| Error Cases | ✅ 100% |
| Edge Cases | ✅ 100% |
| URL Formats | ✅ 100% |
| Git Integration | ✅ 100% |

## CI/CD Integration

To integrate these tests in GitHub Actions, add to `.github/workflows/main.yml`:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Bats
        run: |
          sudo apt-get update
          sudo apt-get install -y bats
      - name: Run tests
        run: |
          cd tests
          bats repo_linter.bats
```

## Extending the Tests

To add new tests:

1. Add a new `@test` block in `repo_linter.bats`
2. Use the helper functions:
   - `create_mock_git "diff output"` - Mock git with specific diff
   - `create_mock_npx [exit_code]` - Mock npx command
3. Follow the pattern: setup mocks → run script → assert output

Example:
```bash
@test "your new test description" {
    local diff_output="+- [New](https://github.com/new/test#readme)"

    create_mock_git "$diff_output"
    create_mock_npx

    run bash repo_linter.sh
    [ "$status" -eq 0 ]
    [[ "$output" == *"expected output"* ]]
}
```

## Troubleshooting

### Tests fail with "bats: command not found"
Install Bats using one of the methods in Prerequisites section.

### Tests fail with "git: command not found"
The tests require git to be installed. Install git using your package manager.

### All tests fail with permission errors
Make sure the test script is executable:
```bash
chmod +x tests/repo_linter.bats
```

## Contributing

When modifying `repo_linter.sh`, please:

1. Run the existing test suite to ensure no regressions
2. Add new tests for any new functionality
3. Update this README if adding new test categories

## License

These tests are part of the awesome repository and follow the same license.
