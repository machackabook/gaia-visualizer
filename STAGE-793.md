# STAGE-793 — Hold torus/default tube radius (major + minor * cos(phi)) shared by x and z only (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Case 'torus' / default: Standard Toroidal Math.
- `x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);`
- `z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);`
- `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);` — tube radius (major + minor * cos(phi)) shared by x and z only. Y free of the tube term. Phi external.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 794 — hold lerp alpha 0.05 and session new Vector3 allocation (living reuses target).
2. 795 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.
3. 796 — hold uniforms written uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
