# STAGE-765 — Hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2 independent (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian case (parametric vertex traversal):
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- hScale held as major (no minor). X/Z free of minor and phi.
- Y lift is exactly Math.sin(t) * 2, independent of hScale, minor, phi, or idx.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity denom (764), sole four-case switch (763).

## Enhancement this hop
Pins the hamiltonian parametric mapping. hScale equals major. The y coordinate receives an additive lift of sin(t)*2 that does not scale with hScale or take minor/phi. X and Z use the product of cos(theta*3) and cos/sin(theta) against hScale only.

- hScale = major
- y lift sin(t)*2 independent
- X/Z free of minor
- paste not rewritten

## Compiled next stages
1. 766 — hold triangular tAngle floor snap to 2π/3 and y sector (idx % 3 - 1) * major * 0.5.
2. 767 — hold torus/default tube radius (major + minor*cos(phi)) shared by x/z and y = minor*sin(phi)*sin(t*0.5+idx).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
