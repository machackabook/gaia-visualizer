# Stage 698 — hold infinity lemniscate denom shared by x and z only (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- In case 'infinity':
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- Denom shared exclusively by x and z. y uses minor * sin(phi) * sin(t * 0.5 + idx). Paste not rewritten. No secrets.
- Prior holds remain: switch sole four-case (697).

## Compiled next stages
1. 699 — hold hamiltonian parametric mapping and y lift Math.sin(t)*2 independent of hScale.
2. 700 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y.
3. 701 — hold torus/default tube on x/z only; y shared with infinity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
