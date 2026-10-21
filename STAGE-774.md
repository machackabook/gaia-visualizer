# STAGE-774 — Hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2 unread by hScale/minor (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian case:
  const hScale = major;
  x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- hScale = major exactly. X/Z free of minor and phi. Y lift is literal sin(t)*2, unread by hScale, minor, or phi.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity denom (773), major/minor before switch (772), theta step (771).

## Enhancement this hop
Pins the exact hamiltonian parametric form. Vertex traversal is driven solely by major-scale and theta multiples. The vertical lift is a pure time oscillation. This holds the hamiltonian contract without altering the paste.

- hScale = major (no minor)
- x/z = hScale * cos(theta*3) * cos/sin(theta)
- y lift sin(t)*2 free of hScale/minor/phi
- paste not rewritten

## Compiled next stages
1. 775 — hold triangular tAngle floor to 2π/3 and y sector (idx%3-1)*major*0.5 free of theta*5.
2. 776 — hold torus/default tube (major + minor*cos(phi)) shared by x/z and y = minor*sin(phi)*sin(t*0.5+idx).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
