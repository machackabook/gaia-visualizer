# STAGE-809 — Hold infinity lemniscate denom shared by x/z only (2026-10-23)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case: Lemniscate of Bernoulli mathematical mapping.
- const scale = major * 1.5;
- const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Denom shared by x and z only. Y unread by denom or scale.
- Paste not rewritten. No secrets.
- Prior holds remain: switch sole dispatcher (808), major/minor (807).

## Enhancement this hop
Pins the infinity lemniscate mapping with denom shared exclusively by x and z.

- denom = 1 + sin(theta)^2 shared by x/z
- y independent of denom
- scale = major * 1.5
- paste not rewritten

## Compiled next stages
1. 810 — hold hamiltonian hScale = major and y lift independent.
2. 811 — hold triangular floor snap and y sector.
3. 812 — hold torus/default tube radius shared by x/z.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
