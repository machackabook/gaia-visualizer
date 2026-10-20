# STAGE-756 — Hold hamiltonian hScale = major; y lift sin(t)*2 unread by hScale/minor/phi (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian case (parametric vertex traversal):
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- hScale = major (no minor). X/Z free of minor. Y lift is sin(t)*2, unread by hScale/minor/phi. Paste not rewritten. No secrets.
- Prior holds remain: infinity denom (755), switch sole four-case (754), uniforms order (753), theta step (752).

## Compiled next stages
1. 757 — hold triangular tAngle floor snap to 2π/3; y sector (idx%3-1)*major*0.5 unread by theta*5.
2. 758 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y minor*sin(phi)*sin(...).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
