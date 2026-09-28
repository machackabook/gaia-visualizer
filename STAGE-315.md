# Stage 315 — Session kernel weave + finite guards

Compiled 2026-09-27 21:06 CDT from the current session `update(t)` paste.

## Done this stage
- Reconfirmed the four-geometry user paste (infinity | hamiltonian | triangular | torus).
- Kept Stage 314 extras in the session switch (klein, figure8, hopf, trefoil, mobius).
- Added guarded `this.phi += 0.007 * state.toroidalWeave` so hopf / klein / mobius precess in the *session* paste.
- Finite-guard `x/y/z` before lerp on the session path (parity with living evaluate).
- Session hash `c315e7a1`. Prior paste hash retained as `67185cf3`. Living hash unchanged `7cd81012`.

## Next stages (316+)
1. GPU / TF shader parity for the five extras (same formulas, no `new THREE.Vector3` in the hot path).
2. Reuse `_kernelTarget` inside the session paste (currently allocates a Vector3 every frame — documented, not copied into evaluate).
3. Geometry blender: lerp between two `targetState.geometry` keys using `state.blend`.
4. Confirm GPU auto at count > 1024 and CPU instance-matrix skip 4096–16384 still hold after shader parity.
5. The-Hive HeartbeatScan on HTTP mutation + WS (issue #4) + authenticated `ledger_pulse`.
6. Public band hamiltoniansingularity.ai default geometry `blend`.
