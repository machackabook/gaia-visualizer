#!/usr/bin/env bash
set -euo pipefail
echo "[gaia-env] node=gaia-visualizer"
command -v git >/dev/null || { echo missing git; exit 2; }
echo "[gaia-env] PASS"
