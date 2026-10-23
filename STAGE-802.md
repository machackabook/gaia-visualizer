# STAGE-802 — Hold torus/default tube radius shared by xz and shared y (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case: standard toroidal math.
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only.
- Y is minor * sin(phi) * sin(...). Phi external / unread in paste.
- Default falls through to the same tube math. Not a fifth session case.
- Session paste still allocates `new THREE.Vector3` inside lerp with alpha 0.05. Living path keeps no-alloc lerp.
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor (801), hamiltonian parametric (800), infinity lemniscate (799), switch sole four-case (798).

## Enhancement this hop
Pins the session torus/default tube. Holds the shared tube radius on xz and the y formula.

- tube radius major + minor * cos(phi) shared by x/z
- y = minor * sin(phi) * sin(t * 0.5 + idx)
- default shares torus arm
- paste not rewritten

## Compiled next stages
1. 803 — hold theta step and gravityPull multiplier.
2. 804 — hold lerp alpha 0.05 and session allocation.
3. 805 — hold phi external / unread in session paste.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
