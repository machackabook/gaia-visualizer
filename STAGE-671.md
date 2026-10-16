# Stage 671 — hold infinity lemniscate denom shared by x and z only (2026-10-16 09:12 CDT)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity (Lemniscate of Bernoulli):
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Denom is shared by x and z only. y does not use denom or scale.
- Paste not rewritten. No secrets.
- Prior holds remain: switch sole four-case (670), major/minor pre-switch (669).

## Compiled next stages
1. 672 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2.
2. 673 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y.
3. 674 — hold torus/default tube on x/z only; y shared with infinity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
