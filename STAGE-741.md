# STAGE-741 — Hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Assigned before switch(targetState.geometry). Major unread by gravityPull. Minor takes toroidalWeave. Hamiltonian ignores minor.
- Formulas held exactly as in the chat paste.
- Prior holds remain: theta step (740), phi unread (739).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 742 — hold switch sole four-case dispatch.
2. 743 — hold uniforms uTime then uGravity.
3. 744 — hold infinity scale = major * 1.5 and denom shared by x/z.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
