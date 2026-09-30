# Stage 349 — Heartbeat mutation + ledger_pulse

Compiled 2026-09-30 16:06 CDT from the current session `update(t)` paste.

## Session pin (unchanged)
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- switch: infinity | hamiltonian | triangular | torus default
- `mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1` held. Living hash `7cd81012` held.

## This hop
- HeartbeatScan surfaces on HTTP mutation + WS.
- Authenticated `ledger_pulse` envelope (no secrets) includes `frozen`, `ready`, `next`.
- Session switch remains four-case only. Runtime extras stay off-session.

## Next
- 350 public band / Quine HUD bind polish
- 14 memory engrams Drive folder CRYPTIC-HEARTBEAT-NEXUS-ROOT (no secrets)
