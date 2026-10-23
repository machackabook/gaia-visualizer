# STAGE-801 — Hold triangular floor snap and y sector (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case: modulo-based snapping to form a 3D tetrahedron/triangular lattice.
- tAngle = Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
- x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
- z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap on theta to 2π/3 for lattice vertices. Raw theta*5 remains on minor ripple (x/z only).
- Y sector free of theta*5. Uses idx % 3 and major.
- Session paste still allocates `new THREE.Vector3` inside lerp with alpha 0.05. Living path keeps no-alloc lerp.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian parametric (800), infinity lemniscate (799), switch sole four-case (798), major/minor before switch (797).

## Enhancement this hop
Pins the session triangular floor snap and y sector. Holds the lattice vertex snap and the sector unread by theta*5.

- floor snap to 2π/3 on tAngle
- minor ripple theta*5 on x/z only
- y sector (idx % 3 - 1) * major * 0.5 free of theta*5
- paste not rewritten

## Compiled next stages
1. 802 — hold torus/default tube radius shared by xz and shared y.
2. 803 — hold theta step and gravityPull multiplier.
3. 804 — hold lerp alpha 0.05 and session allocation.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
