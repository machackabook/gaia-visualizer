# STAGE-768 — Hold final lerp allocation of new THREE.Vector3(x,y,z) with literal alpha 0.05 (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Final line of the session paste:
  this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Allocates a fresh THREE.Vector3 on every call with the computed (x,y,z) target.
- Alpha is the literal 0.05. Not a variable, not multiplied by gravityPull inside the paste.
- Living path may reuse a scratch target; session paste keeps the allocation.
- Paste not rewritten. No secrets.
- Prior holds remain: torus/default tube (767), triangular floor and y sector (766).

## Enhancement this hop
Pins the session lerp allocation and literal alpha. The interpolation target is constructed inline. The blend factor is fixed at 0.05 regardless of pull or weave. This closes the four-case geometric mapping loop for the current paste.

- new THREE.Vector3(x, y, z) allocated each update
- alpha literal 0.05
- no gravityPull factor inside the lerp call
- paste not rewritten

## Compiled next stages
1. 769 — hold phi unread / external inside the session paste (referenced but never assigned).
2. 770 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
