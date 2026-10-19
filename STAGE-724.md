# STAGE-724 — Hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) as session radius formulas (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `let major = 10 + (this.idx * 2);` assigned before the switch. Unread by gravityPull.
- `let minor = 3 + (state.toroidalWeave * 2);` assigned before the switch. Used by infinity y, triangular ripple/y, and torus tube. Unread by hamiltonian.
- Formulas held exactly as in the chat paste.
- Prior holds remain: dispatcher sole four-case (723), gravityPull / toroidalWeave external (722), full kernel pin (721), phi unread (720).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 725 — hold infinity scale = major * 1.5 and hamiltonian hScale = major (no minor).
2. 726 — hold lerp alpha literal 0.05 and session Vector3 allocation.
3. 727 — hold phi referenced but never assigned (external weave).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
