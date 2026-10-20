# STAGE-766 — Hold triangular tAngle floor snap to 2π/3 and y sector (idx % 3 - 1) * major * 0.5 (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case (modulo-based snapping to 3D tetrahedron/triangular lattice):
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- tAngle snaps theta to multiples of 2π/3 via floor division.
- Y sector is (idx % 3 - 1) * major * 0.5 plus a minor*sin(t) ripple. Does not take theta*5.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian mapping (765), infinity denom (764).

## Enhancement this hop
Pins the triangular lattice floor snap. Theta is quantized to the nearest lower multiple of 2π/3 for the major radius terms. The y coordinate uses a three-sector offset based on idx modulo 3, scaled by major*0.5, plus a minor time ripple. X/Z combine the snapped major angle with a higher-frequency minor oscillation.

- tAngle floor to 2π/3
- y sector (idx % 3 - 1) * major * 0.5
- minor ripple on y and on x/z
- paste not rewritten

## Compiled next stages
1. 767 — hold torus/default tube radius (major + minor*cos(phi)) shared by x/z and y = minor*sin(phi)*sin(t*0.5+idx).
2. 768 — hold final lerp allocation of new THREE.Vector3(x,y,z) with literal alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
