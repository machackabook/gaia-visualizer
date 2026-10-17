# Stage 692 — hold torus/default tube on x/z only; y shared with infinity (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case:
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius on x/z only. Y formula is identical to the infinity arm (shared tube).
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor snap and y sector (691).

## Compiled next stages
1. 693 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.
2. 694 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull.
3. 695 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
