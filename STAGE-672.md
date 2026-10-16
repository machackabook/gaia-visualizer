# Stage 672 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2 (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian:
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- x and z free of minor. y lift is sin(t)*2 independent of minor/phi.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity denom shared by x/z only (671), switch sole four-case (670).

## Compiled next stages
1. 673 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y.
2. 674 — hold torus/default tube on x/z only; y shared with infinity.
3. 675 — hold lerp alpha literal 0.05 and new THREE.Vector3 allocation each update.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
