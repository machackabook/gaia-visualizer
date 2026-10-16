# Stage 673 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular:
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap to 2π/3 sectors. y sector by idx % 3 free of the theta*5 perturbation on x/z.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian x/z free of minor (672), infinity denom (671).

## Compiled next stages
1. 674 — hold torus/default tube on x/z only; y shared with infinity.
2. 675 — hold lerp alpha literal 0.05 and new THREE.Vector3 allocation each update.
3. 676 — hold theta step (0.01 + idx*0.002)*gravityPull.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
