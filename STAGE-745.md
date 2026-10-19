# STAGE-745 — Hold hamiltonian hScale = major, y = hScale * sin(theta*3) + sin(t)*2 (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'hamiltonian': parametric vertex traversal.
- const hScale = major;
- x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
- z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
- y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- X/Z free of minor. Y lift is sin(t)*2, not scaled by hScale on the addend.
- Formulas held exactly as in the chat paste.
- Prior holds remain: infinity scale/denom (744), uniforms order (743).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 746 — hold triangular floor snap tAngle and y sector (idx % 3 - 1)*major*0.5.
2. 747 — hold torus tube radius shared by x/z.
3. 748 — hold lerp new THREE.Vector3(x,y,z) alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
