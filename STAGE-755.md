# STAGE-755 — Hold infinity lemniscate denom shared by x/z only; y unread by denom (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case (lemniscate of Bernoulli):
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Denom shared by x and z only. Y unread by denom; uses minor, phi, time, idx. Scale = major * 1.5. Paste not rewritten. No secrets.
- Prior holds remain: switch sole four-case (754), uniforms order (753), theta step (752), major/minor before switch (751), phi external (750).

## Compiled next stages
1. 756 — hold hamiltonian hScale = major; y lift sin(t)*2 unread by hScale/minor/phi.
2. 757 — hold triangular tAngle floor snap to 2π/3; y sector (idx%3-1)*major*0.5 unread by theta*5.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
