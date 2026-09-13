#!/usr/bin/env bash
set -euo pipefail
# Continuity env-check — fail closed. Numeral 137451921129154222.

fail() { echo "ENV-CHECK FAIL: $1" >&2; exit 1; }

[ -f README.md ] || fail "missing README.md"
[ -s README.md ] || fail "empty README.md"
[ -f package.json ] || fail "missing package.json"

sha=$(git rev-parse HEAD 2>/dev/null || true)
[ -n "${sha}" ] || fail "empty SHA / not a git worktree"
[ "${sha}" != "0000000000000000000000000000000000000000" ] || fail "null SHA refused"

echo "ENV-CHECK OK sha=${sha} repo=gaia-visualizer numeral=137451921129154222"
