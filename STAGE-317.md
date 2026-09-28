# Stage 317 — Session _kernelTarget reuse

Compiled 2026-09-27 23:06 CDT from the current session `update(t)` paste.

## Done this stage
- Reconfirmed the four-geometry user paste (infinity | hamiltonian | triangular | torus).
- Raw session hash remains `beec41f1`. Living hash `7cd81012`.
- Enhanced session pin reuses `this._kernelTarget.set(x, y, z)` then lerp 0.05.
- Kept Stage 315 weave + finite guards on the enhanced pin only.
- Did not promote klein / hopf / figure8 / trefoil / mobius into the four-case chat switch.

## Next stages (318+)
1. Geometry blender: lerp between two `targetState.geometry` keys using `state.blend`.
2. GPU / TF shader parity for the five extras (same formulas, no `new THREE.Vector3` in the hot path).
3. Confirm GPU auto at count > 1024 and CPU instance-matrix skip 4096–16384 still hold.
4. The-Hive HeartbeatScan on HTTP mutation + WS (issue #4) + authenticated `ledger_pulse`.
5. Public band hamiltoniansingularity.ai default geometry `blend`.
