# STAGE-736 — Hold triangular tAngle floor to 2π/3 and y sector free of theta*5 (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));`
- x/z use cos/sin(tAngle) + minor * cos/sin(theta * 5).
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Y sector free of theta*5 ripple.
- Formulas held exactly as in the chat paste.
- Prior holds remain: hamiltonian (735), infinity (734).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 737 — hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity.
2. 738 — hold lerp new THREE.Vector3(x, y, z) alpha 0.05.
3. 739 — hold phi unread (no assignment in paste).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
