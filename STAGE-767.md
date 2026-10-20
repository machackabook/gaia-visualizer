# STAGE-767 — Hold torus/default tube radius (major + minor*cos(phi)) shared by x/z and y = minor*sin(phi)*sin(t*0.5+idx) (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case (standard toroidal math):
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) is shared by x and z only.
- Y is minor * sin(phi) * sin(t * 0.5 + idx). Does not take the tube radius.
- Default falls through to the same body. It is not a fifth session case.
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor and y sector (766), hamiltonian parametric (765).

## Enhancement this hop
Pins the torus/default shared tube. The radial offset in the xz-plane is (major + minor * cos(phi)). The y coordinate reuses the same minor * sin(phi) factor seen in infinity, modulated by a half-speed time phase plus idx. Phi remains external / unread inside the paste body.

- tube radius (major + minor * cos(phi)) on x/z only
- y = minor * sin(phi) * sin(t * 0.5 + idx)
- default shares the torus body
- paste not rewritten

## Compiled next stages
1. 768 — hold final lerp allocation of new THREE.Vector3(x,y,z) with literal alpha 0.05.
2. 769 — hold phi unread / external inside the session paste (referenced but never assigned).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
