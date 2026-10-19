# STAGE-731 — Hold major/minor assignment before switch(targetState.geometry) (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `let major = 10 + (this.idx * 2);`
- `let minor = 3 + (state.toroidalWeave * 2);`
- Assigned before switch. Major unread by gravityPull. Minor takes toroidalWeave. Hamiltonian ignores minor.
- Formulas held exactly as in the chat paste.
- Prior holds remain: uniforms order (730), torus shared y (729), triangular floor (728).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 732 — hold switch(targetState.geometry) as sole four-case dispatch.
2. 733 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull.
3. 734 — hold infinity lemniscate scale = major * 1.5 and denom shared by x/z.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
