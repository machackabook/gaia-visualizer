# STAGE-776 — Hold torus/default tube (major + minor*cos(phi)) shared by x/z and y = minor*sin(phi)*sin(t*0.5+idx) (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case:
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor*cos(phi)) shared by x and z. Y is minor*sin(phi) modulated by sin(t*0.5 + idx). Phi external/unread in other cases.
- Paste not rewritten. No secrets.
- Prior holds remain: triangular tAngle (775), hamiltonian (774).

## Enhancement this hop
Pins the exact standard toroidal mapping used as default. Holds the shared tube radius and the y modulation without rewrite of the paste.

- x/z share (major + minor*cos(phi)) * cos/sin(theta)
- y = minor*sin(phi)*sin(t*0.5 + idx)
- paste not rewritten

## Compiled next stages
1. 777 — hold lerp(new THREE.Vector3(x, y, z), 0.05) with literal alpha.
2. 778 — hold phi as external driver unread inside paste assignment.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
