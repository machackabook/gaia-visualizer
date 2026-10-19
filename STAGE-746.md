# STAGE-746 — Hold triangular floor snap tAngle and y sector (idx % 3 - 1)*major*0.5 (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'triangular': Modulo-based snapping to form a 3D tetrahedron/triangular lattice.
- const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
- x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
- z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- tAngle snaps to 2π/3 sectors. Y uses discrete sector from idx % 3.
- Formulas held exactly as in the chat paste.
- Prior holds remain: hamiltonian hScale (745), infinity scale/denom (744), uniforms order (743).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 747 — hold torus tube radius shared by x/z.
2. 748 — hold lerp new THREE.Vector3(x,y,z) alpha 0.05.
3. 749 — hold full update(t) kernel as pinned session source of truth.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
