# STAGE-775 — Hold triangular tAngle floor to 2π/3 and y sector (idx%3-1)*major*0.5 free of theta*5 (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case:
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- tAngle snaps to 120-degree sectors via floor. Radial x/z combine major sector + minor high-frequency. Y is discrete sector (idx%3-1)*major*0.5 plus pure sin(t)*minor, free of theta*5 and phi.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian (774), infinity denom (773).

## Enhancement this hop
Pins the exact triangular lattice snap. Holds the modulo-based 3-fold sectoring and the y offset free of the high-frequency term without altering the paste.

- tAngle = floor(theta / (2π/3)) * (2π/3)
- x/z = major*cos/sin(tAngle) + minor*cos/sin(theta*5)
- y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5/phi
- paste not rewritten

## Compiled next stages
1. 776 — hold torus/default tube (major + minor*cos(phi)) shared by x/z and y = minor*sin(phi)*sin(t*0.5+idx).
2. 777 — hold lerp alpha literal 0.05 to new THREE.Vector3 each call.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
