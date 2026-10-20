# STAGE-761 — Hold uniforms write order uTime then uGravity before theta step (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- First two lines of the kernel:
  this.material.uniforms.uTime.value = t;
  this.material.uniforms.uGravity.value = state.gravityPull;
- Write order is uTime then uGravity. Both precede the theta increment. uGravity receives state.gravityPull. Paste not rewritten. No secrets.
- Prior holds remain: session lerp allocates new THREE.Vector3 with literal alpha 0.05 (760), phi referenced but never assigned inside paste (759).

## Compiled next stages
1. 762 — hold theta step (0.01 + idx * 0.002) * gravityPull; major/minor assigned before switch.
2. 763 — hold switch(targetState.geometry) as sole four-case dispatcher (infinity | hamiltonian | triangular | torus/default).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
