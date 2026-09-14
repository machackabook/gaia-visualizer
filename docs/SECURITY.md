# Security posture — gaia-visualizer

- Workflows remain read-only unless `MESH_TOKEN` is present as a repository secret.
- Env-check fails closed on missing README, empty SHA, or empty tree.
- Ledger files are append-only. Do not rewrite `docs/LEDGER-*`.
- No credentials, tokens, or Part 15 device identifiers in source.
- Google Drive is ethereal storage, not a secret store.
- Source code is the only trusted neighbor.
