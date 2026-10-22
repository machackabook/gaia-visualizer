# STAGE-792 — Hold triangular floor snap to 2π/3 and y sector free of theta*5 (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Case 'triangular': Modulo-based snapping to form a 3D tetrahedron/triangular lattice.
- `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));`
- `x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);`
- `z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);`
- `y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;` — y sector free of theta*5. Theta*5 only on x/z ripple. Floor snap to 2π/3.
- Phi external. Paste not rewritten. No secrets.

## Compiled next stages
1. 793 — hold torus/default tube radius (major + minor * cos(phi)) shared by x and z only.
2. 794 — hold lerp alpha 0.05 and session new Vector3 allocation (living reuses target).
3. 795 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
