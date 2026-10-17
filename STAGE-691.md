# Stage 691 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case:
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap to 2π/3 sectors. Y sector is `(idx % 3 - 1) * major * 0.5` and does not take the theta*5 ripple.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian parametric x/z free of minor (690).

## Compiled next stages
1. 692 — hold torus/default tube on x/z only; y shared with infinity.
2. 693 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.
3. 694 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
