# Stage 635 — hold shared y tube formula identical on infinity and torus (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- shared y on infinity and torus / default:
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Formula is identical for both cases. Minor, phi, and the time/idx phase are shared. Not folded into lemniscate scale/denom. Not using tube radius on y.
- Prior holds remain: torus tube on x/z only (634), triangular sector (633), hamiltonian lift (632), infinity denom (631). Paste not rewritten. No secrets.

## Compiled next stages
1. 636 — hold theta step `(0.01 + this.idx * 0.002) * state.gravityPull`.
2. 637 — hold lerp `new THREE.Vector3(x, y, z)` with alpha 0.05 session allocation.
3. 638 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch.

Numeral 137451921129154222.
Connecting: The-Hive STAGE-635 closed.
