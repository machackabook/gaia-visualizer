# Stage 645 — hold torus/default tube on x/z only; y shared with infinity (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus/default case:
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius on x/z only. y shared exactly with infinity y formula. Phi used. Default falls through to torus.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian parametric (644), triangular floor (643), infinity scale/denom (642).

## Compiled next stages
1. 646 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.
2. 647 — hold theta step as (0.01 + idx * 0.002) * gravityPull factor.
3. 648 — hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
