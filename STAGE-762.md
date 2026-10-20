# STAGE-762 — Hold theta step (0.01 + idx * 0.002) * gravityPull and major/minor assigned before switch (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta increment: this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Base step 0.01 + idx*0.002 scaled solely by gravityPull. Does not take toroidalWeave, t, or phi.
- Radii:
  let major = 10 + (this.idx * 2);
  let minor = 3 + (state.toroidalWeave * 2);
- Both assigned before switch(targetState.geometry). Major unread by gravityPull. Minor takes toroidalWeave. Hamiltonian ignores minor.
- Paste not rewritten. No secrets.
- Prior holds remain: uniforms uTime then uGravity (761), lerp alpha (760), phi external (759).

## Compiled next stages
1. 763 — hold switch(targetState.geometry) as sole four-case dispatcher.
2. 764 — hold infinity lemniscate denom 1 + sin(theta)^2 shared by x/z only.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
