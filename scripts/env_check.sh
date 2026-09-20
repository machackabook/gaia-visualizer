#!/usr/bin/env bash
set -euo pipefail
echo "[sSoS] gaia-visualizer env $(date -u +%Y-%m-%dT%H:%M:%SZ)"
command -v node >/dev/null && node --version || echo "node missing"
command -v npm >/dev/null && npm --version || echo "npm missing"
echo "numeral=137451921129154222"
