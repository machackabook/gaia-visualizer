# Stage 676 — hold theta step (0.01 + idx*0.002)*gravityPull (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advance:
  this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Step coefficient is `(0.01 + this.idx * 0.002)` multiplied by `state.gravityPull`.
- No other angle advance in the session paste. Phi is not incremented here.
- Paste not rewritten. No secrets.
- Prior holds remain: lerp alpha literal 0.05 and new THREE.Vector3 each update (675), torus/default tube on x/z only; y shared with infinity (674).

## Compiled next stages
1. 677 — hold uniforms written uTime then uGravity.
2. 678 — hold major/minor assigned before the switch.
3. 679 — hold switch(targetState.geometry) sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
