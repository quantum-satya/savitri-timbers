#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"

REQUIRED_FILES=(
  index.html
  about.html
  products.html
  manufacturing.html
  contact.html
  css/style.css
  css/products.css
  js/main.js
  robots.txt
  _headers
)

for file in "${REQUIRED_FILES[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "ERROR: missing required file: $file" >&2
    exit 1
  fi
done

echo "Savitri Timbers site structure verified (${#REQUIRED_FILES[@]} files)."
