# Stage 707 — hold hamiltonian hScale = major (no 1.5 factor) (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian case:
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- hScale = major only. No *1.5. Y lift independent of hScale. X/Z free of minor. Paste not rewritten. No secrets.
- Prior holds remain: infinity scale (706), major/minor (705), uniforms (704).

## Compiled next stages
1. 708 — hold triangular floor snap to 2π/3 and y sector.
2. 709 — hold torus/default tube on x/z only; y shared with infinity.
3. 710 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
