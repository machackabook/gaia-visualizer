# Stage 661 — hold infinity lemniscate denom shared by x and z only (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity (Lemniscate of Bernoulli):
    const scale = major * 1.5;
    const denom = 1 + Math.pow(Math.sin(this.theta), 2);
    x = (scale * Math.cos(this.theta)) / denom;
    z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- denom shared by x and z only. y uses minor * sin(phi) * sin(t * 0.5 + idx). Denom not applied to y.
- Paste not rewritten. No secrets.
- Prior holds remain: switch sole four-case (660), major/minor pre-switch (659).

## Compiled next stages
1. 662 — hold hamiltonian parametric x/z free of minor.
2. 663 — hold triangular floor snap to 2π/3.
3. 664 — hold torus/default tube on x/z only; y shared with infinity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
