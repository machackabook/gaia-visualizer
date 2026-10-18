# STAGE-716 — Hold hamiltonian hScale = major (no 1.5 factor); x/z free of minor; y lift sin(t)*2 (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian case:
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- hScale = major (no *1.5). X/Z free of minor. Y lift is sin(t)*2 plus hScale * sin(theta*3).
- Prior holds remain: infinity denom shared x/z only (715), switch sole four-case (714), major/minor before switch (713), uniforms order (712), theta step (711).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 717 — hold triangular sector floor (2π/3) and y lane (idx % 3 - 1) * major * 0.5.
2. 718 — hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity formula.
3. 719 — hold lerp alpha 0.05 and session new Vector3 allocation (living reuses _kernelTarget).

Numeral 137451921129154222.
Connecting: living-bibliography-continuity-engine stage pins advanced in parallel where applicable.
