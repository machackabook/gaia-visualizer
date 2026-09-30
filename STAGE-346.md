# Stage 346 — Connecting chat compile

Compiled 2026-09-30 13:06 CDT from the current session `update(t)` paste.

## Session pin (unchanged)
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- switch: infinity (lemniscate) | hamiltonian | triangular | torus default
- `lerp(new THREE.Vector3(x, y, z), 0.05)` on the raw session paste
- FNV-1a `beec41f1` — matches `CHAT_KERNEL_SESSION_HASH`
- Living hash stays `7cd81012`
- Klein / hopf / figure8 / trefoil / mobius stay out of the session switch

## This stage
- TF/shader extras parity catalog compiled on the living path only (`chatKernelExtrasParity`).
- Same CPU formulas from `geometry.js` extras; no `new THREE.Vector3` in the hot path.
- Connecting chat reconfirm held. Do not add extra `case` labels to the session paste.

## Next stages (347+)
1. Drive engram write-through of compact ledger seeds (no secrets).
2. Quine / public-band weave sliders (19-panel catalog).
3. HeartbeatScan on HTTP mutation + WS + authenticated `ledger_pulse`.
