# STAGE-791 — Hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2 (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Case 'hamiltonian': Parametric mapping favoring vertex traversal over a spherical grid.
- `const hScale = major;`
- `x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);`
- `z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);`
- `y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);` — y lift is sin(t)*2. Unread by minor or phi. X/Z free of minor.
- Phi external. Paste not rewritten. No secrets.

## Compiled next stages
1. 792 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
2. 793 — hold torus/default tube radius (major + minor * cos(phi)) shared by x and z only.
3. 794 — hold lerp alpha 0.05 and session new Vector3 allocation (living reuses target).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
