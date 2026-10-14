# Stage 634 — hold torus/default tube on x/z only (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus / default:
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius `(major + minor * cos(phi))` applied to x and z only. y uses the shared minor * sin(phi) * sin(...) form.
- Prior holds remain: triangular sector (633), hamiltonian lift (632), infinity denom (631). Paste not rewritten. No secrets.

## Compiled next stages
1. 635 — hold shared y tube formula identical on infinity and torus: `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`.
2. 636 — hold theta step `(0.01 + this.idx * 0.002) * state.gravityPull`.
3. 637 — hold lerp `new THREE.Vector3(x, y, z)` with alpha 0.05 session allocation.

Numeral 137451921129154222.
Connecting: The-Hive STAGE-634 closed.
