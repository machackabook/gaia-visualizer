# Stage 43 — fidelity on inbound frames (2026-09-10)

Session `update(t)` unchanged (infinity | hamiltonian | triangular | torus, lerp 0.05).
sourceHash `beec41f1`.

## Shipped

- HUD samples `sampleFidelityOnHashMismatch` whenever inbound `sourceHash` is missing or ≠ `beec41f1`.
- Match frames skip the four-geometry sample and stamp `fid-ok`.
- Mismatch frames stamp `fid-drift` plus maxDelta / mismatches.
- Hive `/api/health` exposes the same contract (`fidelity` object).

## Next

| Stage | Owner | Work |
|------|--------|------|
| 13 | both | Authenticated live `ledger_pulse` → Hive WS |
| 14 | The-Hive | Memory engrams into Drive `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band |
| 19-panels | The-Hive | Quine / NexusStudio emit hooks |
| 42-enclave | ENCLAVE-ADAM-REUNITED | Auto-unpack watch + env-check autocomplete |
| 44 | The-Hive | Compact engram GET + replay into visualizer `pendingKernel` |
| 45 | mesh | Continuity cascade carries STAGE + sourceHash |
