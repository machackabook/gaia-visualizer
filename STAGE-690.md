# Stage 690 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2 (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian case:
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- Parametric x/z free of minor. Y lift is `sin(t) * 2` and does not take hScale, minor, or phi.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity lemniscate denom shared by x and z only (689).

## Compiled next stages
1. 691 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y.
2. 692 — hold torus/default tube on x/z only; y shared with infinity.
3. 693 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
