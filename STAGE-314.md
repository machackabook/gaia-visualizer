# Stage 314 — Chat kernel next hops

Compiled 2026-09-27 20:07 CDT from the current session `update(t)` paste.

## Done this stage
- Session switch now includes `klein`, `figure8`, `hopf`, `trefoil`, `mobius` in addition to infinity / hamiltonian / triangular / torus.
- Session hash moved `beec41f1` → `67185cf3`.
- Living evaluate path already had those extras; session paste is now in parity for case labels.
- `CHAT_KERNEL_CHAT_GEOMETRIES` expanded to nine named states.

## Next stages (315+)
1. Guarded `this.phi += 0.007 * weave` in the *session* paste so hopf / klein / mobius actually precess without relying only on the living kernel.
2. GPU / TF shader parity for the five extras (same formulas, no `new THREE.Vector3` in the hot path).
3. Reuse `_kernelTarget` inside the session paste (currently allocates a Vector3 every frame — documented, not copied into evaluate).
4. Finite-guard `x/y/z` on the session path to match living evaluate.
5. Geometry blender: lerp between two `targetState.geometry` keys using `state.blend`.
6. Confirm GPU auto at count > 1024 and CPU instance-matrix skip 4096–16384 still hold after shader parity.
