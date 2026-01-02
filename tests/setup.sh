#!/bin/bash

# Setup script for installing test dependencies
# This script helps set up the testing environment for repo_linter.sh tests

set -e

echo "🔧 Setting up test environment for repo_linter.sh tests..."

# Detect OS
OS="unknown"
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macos"
fi

echo "📋 Detected OS: $OS"

# Check if bats is already installed
if command -v bats &> /dev/null; then
    echo "✅ Bats is already installed ($(bats --version))"
else
    echo "📦 Installing Bats (Bash Automated Testing System)..."

    case $OS in
        linux)
            if command -v apt-get &> /dev/null; then
                echo "   Using apt-get..."
                sudo apt-get update
                sudo apt-get install -y bats
            elif command -v yum &> /dev/null; then
                echo "   Using yum..."
                sudo yum install -y bats
            elif command -v npm &> /dev/null; then
                echo "   Using npm..."
                sudo npm install -g bats
            else
                echo "   Installing manually..."
                install_bats_manually
            fi
            ;;
        macos)
            if command -v brew &> /dev/null; then
                echo "   Using Homebrew..."
                brew install bats-core
            elif command -v npm &> /dev/null; then
                echo "   Using npm..."
                npm install -g bats
            else
                echo "   Installing manually..."
                install_bats_manually
            fi
            ;;
        *)
            echo "   Unsupported OS, installing manually..."
            install_bats_manually
            ;;
    esac
fi

# Function to install bats manually
install_bats_manually() {
    local temp_dir=$(mktemp -d)
    cd "$temp_dir"
    git clone https://github.com/bats-core/bats-core.git
    cd bats-core
    sudo ./install.sh /usr/local
    cd -
    rm -rf "$temp_dir"
    echo "✅ Bats installed manually"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

echo "✅ Git is installed ($(git --version))"

# Make test files executable
chmod +x "$(dirname "$0")/repo_linter.bats" 2>/dev/null || true

echo ""
echo "✨ Setup complete!"
echo ""
echo "To run the tests:"
echo "  cd tests"
echo "  bats repo_linter.bats"
echo ""
echo "For more options, see tests/README.md"
