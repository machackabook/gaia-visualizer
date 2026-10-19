# STAGE-738 — Hold lerp new THREE.Vector3(x, y, z) alpha 0.05 (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Session paste allocates fresh Vector3 inside lerp. Living path reuses _kernelTarget.
- Alpha fixed 0.05. No gravityPull multiplier on lerp in paste.
- Formulas held exactly as in the chat paste.
- Prior holds remain: torus tube (737), triangular (736).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 739 — hold phi unread (no assignment in paste).
2. 740 — hold theta step before major/minor.
3. 741 — hold uniforms uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
