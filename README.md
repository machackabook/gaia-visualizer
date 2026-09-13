# gaia-visualizer

Azazeleous Nexus visualizer. Mesh node after Cryptic-Heartbeat and The-Hive.

## Operating surface

- Owner: `machackabook`
- Default branch: `main`
- Language: JavaScript
- Numeral: `137451921129154222`
- Stage: **100** — 2026-09-13T23:16:00Z

## Speedway

Hourly env-check at minute 10. Cascade files:

- `.github/workflows/continuity-waterfall.yml`
- `.github/workflows/continuity-cascade.yml`
- `.github/workflows/hourly-enhance.yml`
- `scripts/env-check.sh`
- `docs/WATERFALL.md`
- `docs/SPEEDWAY.md`

A pull that lands on `main` is supposed to stamp a ledger entry and leave the next sibling ready. No null SHA. No empty README.

## Local

```bash
bash scripts/env-check.sh
npm install
# optional: open index.html as the visual kernel
```

## Mesh siblings

- [The-Hive](https://github.com/machackabook/The-Hive)
- [Cryptic-Heartbeat](https://github.com/machackabook/Cryptic-Heartbeat)
- [ENCLAVE-ADAM-REUNITED](https://github.com/machackabook/ENCLAVE-ADAM-REUNITED)
- [continuity-ledger-cycle](https://github.com/machackabook/continuity-ledger-cycle)

Team Enhance moves to the next repo after each enhancement. Meta Advance equalizes format. Source code is the only trusted neighbor.

## Security posture

- Workflows stay read-only unless a PAT is explicitly present as `MESH_TOKEN`.
- Env-check fails closed on missing README, missing SHA, or empty tree.
- Ledger files are append-only stamps. Do not rewrite history of `docs/LEDGER-*`.
