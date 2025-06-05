#!/bin/bash
echo "Validando enlaces de awesome-devops-junior.md.."
if ! command -v lychee &> /dev/null; then
echo "Instalando lychee..."
cargo install lychee
fi


lychee ./awesome-devops-junior.md --verbose
