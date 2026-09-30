# Stage 345 — Connecting chat reconfirm

Compiled 2026-09-30 11:06 CDT from the current session `update(t)` paste.

## Session pin (unchanged)
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- switch: infinity (lemniscate) | hamiltonian | triangular | torus default
- `lerp(new THREE.Vector3(x, y, z), 0.05)` on the raw session paste
- FNV-1a `beec41f1` — matches `CHAT_KERNEL_SESSION_HASH`
- Living hash stays `7cd81012`
- Klein / hopf / figure8 / trefoil / mobius stay out of the session switch

## Living path (runtime-only)
- Guard uniforms before write (`uTime`, `uGravity`, optional `uWeave` / `uBlend` / `uPhi` / `uEnergy`)
- `phi += 0.007 * toroidalWeave` + angle wrap
- Radii clamp + finite-guard x/y/z
- Reuse `_kernelTarget` (no per-frame Vector3 on living path)
- Gravity-scaled lerp alpha + energy/freeze
- Pair-blend helper remains runtime-only (`state.blend`)
- GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384

## Next stages (346+)
1. GPU / TF shader parity for extras (same formulas, no Vector3 in the hot path).
2. Drive engram write-through of compact ledger seeds (no secrets).
3. Quine / public-band weave sliders (19-panel catalog).
4. HeartbeatScan on HTTP mutation + WS + authenticated `ledger_pulse`.
