# STAGE-760 — Hold session lerp allocates new THREE.Vector3(x, y, z) with literal alpha 0.05 (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Final line: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`
- Alpha is the literal `0.05`. It does not take gravityPull, idx, toroidalWeave, or t. Session paste allocates a fresh Vector3 each call. Living path may reuse `_kernelTarget`. Paste not rewritten. No secrets.
- Prior holds remain: phi external (759), torus tube (758).

## Compiled next stages
1. 761 — hold uniforms write order uTime then uGravity before theta step.
2. 762 — hold theta step (0.01 + idx * 0.002) * gravityPull; major/minor assigned before switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
