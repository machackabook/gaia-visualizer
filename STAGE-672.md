# Stage 672 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2 (2026-10-16 11:08 CDT)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian (parametric mapping favoring vertex traversal over a spherical grid):
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- X and Z are free of minor (and of toroidalWeave). Y lift is `Math.sin(t) * 2` and does not take hScale or minor.
- Phi is unused in this case. No this.phi += in the session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity lemniscate denom shared by x and z only (671), switch sole four-case (670), major/minor pre-switch (669).

## Compiled next stages
1. 673 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y.
2. 674 — hold torus/default tube on x/z only; y shared with infinity.
3. 675 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
