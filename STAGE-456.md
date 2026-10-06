# Stage 456 — hold gravityPull as a multiplier of the theta step only (2026-10-06 16:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- uniform order: `uTime` then `uGravity`
- `uGravity.value = state.gravityPull`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + (idx * 2)` does not read gravityPull
- `minor = 3 + (toroidalWeave * 2)` does not read gravityPull
- session lerp alpha stays the literal `0.05`

## Enhancement this hop
- checker: `noteSessionGravityPullScope`, compiled by `compileSessionStage456`
- bundle: `compileSessionStages451to458`
- living path may still reuse `_kernelTarget`; session paste still allocates `new THREE.Vector3`
- paste not rewritten. No secrets.

Next: 457 infinity y identical to torus y, 458 major and minor assigned before the switch, 459 hamiltonian y lift `sin(t)*2` independent of hScale.
Numeral `137451921129154456`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
