# STAGE-735 — Hold hamiltonian hScale = major, y lift sin(t)*2 free of minor (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `const hScale = major;`
- x/z use hScale * cos/sin products with theta*3; free of minor.
- y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- Lift free of minor and phi.
- Formulas held exactly as in the chat paste.
- Prior holds remain: infinity scale/denom (734), theta step (733).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 736 — hold triangular tAngle floor to 2π/3 and y sector free of theta*5.
2. 737 — hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity.
3. 738 — hold lerp new THREE.Vector3(x, y, z) alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
