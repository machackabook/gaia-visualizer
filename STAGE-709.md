# Stage 709 — hold torus/default tube on x/z only; y shared with infinity (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case:
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only. Y is the shared infinity y formula, free of the tube radius. Default falls through to torus. Paste not rewritten. No secrets.
- Prior holds remain: triangular floor (708), hamiltonian hScale (707), infinity scale (706).

## Compiled next stages
1. 710 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.
2. 711 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull.
3. 712 — hold uniforms written uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
