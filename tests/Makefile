# Makefile for repo_linter.sh tests

.PHONY: help setup test test-verbose test-tap clean

help: ## Show this help message
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

setup: ## Install test dependencies (bats)
	@echo "Installing test dependencies..."
	@bash setup.sh

test: ## Run all tests
	@echo "Running tests..."
	@bats repo_linter.bats

test-verbose: ## Run tests with verbose output
	@echo "Running tests (verbose mode)..."
	@bats --verbose repo_linter.bats

test-tap: ## Run tests with TAP output (for CI/CD)
	@echo "Running tests (TAP format)..."
	@bats --tap repo_linter.bats

clean: ## Clean up temporary test files
	@echo "Cleaning up..."
	@rm -rf /tmp/tmp.* 2>/dev/null || true
	@echo "✅ Cleanup complete"

check: test ## Alias for 'test' target
