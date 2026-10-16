# Stage 674 — hold torus/default tube on x/z only; y shared with infinity (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus (default):
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube (major + minor*cos(phi)) on x/z only. y shared form with infinity case.
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor snap (673), hamiltonian free of minor (672).

## Compiled next stages
1. 675 — hold lerp alpha literal 0.05 and new THREE.Vector3 allocation each update.
2. 676 — hold theta step (0.01 + idx*0.002)*gravityPull.
3. 677 — hold uniforms written uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
