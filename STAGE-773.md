# STAGE-773 — Hold infinity lemniscate denom 1 + sin(theta)^2 shared by x and z only (y unread by denom) (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case (Lemniscate of Bernoulli):
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Denom shared exclusively by x and z. Y unread by denom. Scale = major * 1.5. Phi and minor drive y only.
- Paste not rewritten. No secrets.
- Prior holds remain: major/minor before switch (772), theta step (771), uniforms order (770), phi unread (769).

## Enhancement this hop
Pins the exact lemniscate denominator. The figure-eight mapping contracts only in the xz plane. Y remains an independent weave. This holds the infinity contract without altering the paste.

- denom = 1 + sin(theta)^2 shared by x/z only
- y free of denom
- scale = major * 1.5
- paste not rewritten

## Compiled next stages
1. 774 — hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2 unread by hScale/minor.
2. 775 — hold triangular tAngle floor to 2π/3 and y sector (idx%3-1)*major*0.5 free of theta*5.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
