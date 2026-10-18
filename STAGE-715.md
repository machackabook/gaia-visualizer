# STAGE-715 — Hold infinity lemniscate denom shared by x and z only (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity case:
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- denom shared by x and z only. Y uses minor * sin(phi) * sin(t*0.5 + idx). Unread by denom.
- Prior holds remain: switch sole four-case (714), major/minor before switch (713), uniforms order (712), theta step (711).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 716 — hold hamiltonian hScale = major (no 1.5 factor); x/z free of minor; y lift sin(t)*2.
2. 717 — hold triangular sector floor (2π/3) and y lane (idx % 3 - 1) * major * 0.5.
3. 718 — hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity formula.

Numeral 137451921129154222.
Connecting: living-bibliography-continuity-engine stage pins advanced in parallel where applicable.
