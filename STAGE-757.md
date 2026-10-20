# STAGE-757 — Hold triangular tAngle floor snap to 2π/3; y sector (idx%3-1)*major*0.5 unread by theta*5 (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case (modulo-based snapping to form a 3D tetrahedron/triangular lattice):
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap to 2π/3. Y sector (idx % 3 - 1) * major * 0.5 does not take theta * 5. Ripple uses minor. Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian hScale (756), infinity denom (755), switch sole four-case (754).

## Compiled next stages
1. 758 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y minor*sin(phi)*sin(t*0.5+idx).
2. 759 — hold phi referenced but never assigned inside session paste (external).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
