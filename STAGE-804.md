# STAGE-804 — Hold lerp alpha 0.05 and session allocation (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Lerp: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Literal alpha 0.05. Session allocates Vector3 inside the call.
- Living path reuses _kernelTarget; no alloc on hot path.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step (803), torus tube (802), triangular floor (801).

## Enhancement this hop
Pins the session lerp. Holds the fixed alpha and per-frame allocation as the chat paste source of truth.

- alpha = 0.05 unread by geometry
- new THREE.Vector3(x, y, z) in the paste
- living path may optimize
- paste not rewritten

## Compiled next stages
1. 805 — hold phi external / unread in session paste.
2. 806 — hold uniforms uTime then uGravity order.
3. 807 — hold major/minor assignment before switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
