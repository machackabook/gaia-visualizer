# STAGE-797 — Hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- After theta step: `let major = 10 + (this.idx * 2);` then `let minor = 3 + (state.toroidalWeave * 2);` then switch(targetState.geometry).
- Major and minor assigned before the switch. Unread by pull. External toroidalWeave.
- Paste not rewritten. No secrets.
- Prior holds remain: uniforms uTime then uGravity (796), theta step unread by geometry (795).

## Enhancement this hop
Pins the session major and minor assignment order and placement before the geometry switch. Holds formulas as written.

- major = 10 + (idx * 2)
- minor = 3 + (toroidalWeave * 2)
- assigned before switch
- paste not rewritten

## Compiled next stages
1. 798 — hold switch(targetState.geometry) sole four-case dispatch.
2. 799 — hold infinity lemniscate mapping and shared y.
3. 800 — hold hamiltonian parametric mapping.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
