# STAGE-764 — Hold infinity lemniscate denom 1 + sin(theta)^2 shared by x/z only (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case (Lemniscate of Bernoulli):
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); // denom unread by y
- Denom is shared exclusively by x and z. Y remains independent of the lemniscate denominator.
- Scale held as major * 1.5. Major assigned before switch.
- Paste not rewritten. No secrets.
- Prior holds remain: sole four-case switch (763), major/minor pre-switch (762).

## Enhancement this hop
Pins the infinity lemniscate denominator formula `1 + Math.pow(Math.sin(this.theta), 2)` and its exclusive use by the x and z coordinates. Y coordinate uses minor/phi/time/idx and does not divide by denom. Does not rewrite the paste.

- denom = 1 + sin(theta)^2
- shared by x and z only
- y independent of denom
- scale = major * 1.5 held
- paste not rewritten

## Compiled next stages
1. 765 — hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2 independent.
2. 766 — hold triangular tAngle floor snap to 2π/3 and y sector (idx % 3 - 1) * major * 0.5.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
