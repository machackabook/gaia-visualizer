# Stage 696 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- major and minor assigned before switch:
  let major = 10 + (this.idx * 2);
  let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used across all four cases. Index-scaled major, weave-scaled minor. Paste not rewritten. No secrets.
- Prior holds remain: uniforms write order uTime then uGravity (695).

## Compiled next stages
1. 697 — hold switch(targetState.geometry) as sole four-case dispatch (infinity | hamiltonian | triangular | torus/default).
2. 698 — hold infinity lemniscate denom `1 + Math.pow(Math.sin(this.theta), 2)` shared by x and z only.
3. 699 — hold hamiltonian parametric mapping and y lift `Math.sin(t) * 2` independent of hScale.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
