# Stage 651 — hold infinity lemniscate denom shared by x and z only (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity (Lemniscate of Bernoulli):
    const scale = major * 1.5;
    const denom = 1 + Math.pow(Math.sin(this.theta), 2);
    x = (scale * Math.cos(this.theta)) / denom;
    z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Denom shared by x and z only. Y uses minor * sin(phi) * sin(t*0.5 + idx) and does not take denom. Scale = major * 1.5.
- Paste not rewritten. No secrets.
- Prior holds remain: switch sole four-case (650), uniforms order (649), major/minor pre-switch (648).

## Compiled next stages
1. 652 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2.
2. 653 — hold triangular floor snap and y sector free of theta*5 on y.
3. 654 — hold torus/default tube on x/z and shared y with infinity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
