# STAGE-723 — Hold targetState.geometry as sole LLM-assigned dispatcher (four cases + default torus) (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `switch(targetState.geometry)` is the sole dispatcher. Cases: 'infinity' (lemniscate), 'hamiltonian', 'triangular', 'torus' / default (standard toroidal).
- No additional cases invented. `targetState.geometry` is assigned externally by the LLM / session controller.
- Default falls through to torus math.
- Prior holds remain: gravityPull / toroidalWeave external (722), full kernel pin (721), phi unread (720), lerp (719), torus (718), triangular (717), hamiltonian (716), infinity (715).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 724 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) as session radius formulas.
2. 725 — hold infinity scale = major * 1.5 and hamiltonian hScale = major (no minor).
3. 726 — hold lerp alpha literal 0.05 and session Vector3 allocation.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
