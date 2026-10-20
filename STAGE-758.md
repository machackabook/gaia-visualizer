# STAGE-758 — Hold torus/default tube (major + minor * cos(phi)) shared by x/z; y = minor * sin(phi) * sin(t * 0.5 + idx) (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case (standard toroidal math):
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only. Y uses minor * sin(phi) * sin(...). Default shares the torus tube. Paste not rewritten. No secrets.
- Prior holds remain: triangular floor and y sector (757), hamiltonian hScale (756).

## Compiled next stages
1. 759 — hold phi referenced but never assigned inside the session paste (external / unread).
2. 760 — hold lerp to new THREE.Vector3 with alpha 0.05 (session allocation).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
