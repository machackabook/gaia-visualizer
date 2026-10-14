# Stage 636 — hold theta step (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- theta advance held exactly as:
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Written after uniforms (`uTime` then `uGravity`), before major/minor assignment and the four-case switch.
- Base 0.01 + per-idx 0.002, scaled by gravityPull. No other factors. Paste not rewritten. No secrets.
- Prior holds remain: shared y tube (635), torus x/z tube (634), triangular sector (633), hamiltonian lift (632), infinity denom (631).

## Compiled next stages
1. 637 — hold lerp `new THREE.Vector3(x, y, z)` with alpha 0.05 session allocation.
2. 638 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
3. 639 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
