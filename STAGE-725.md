# STAGE-725 — Hold infinity scale = major * 1.5 and hamiltonian hScale = major (no minor) (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case: `const scale = major * 1.5;` then denom = 1 + Math.pow(Math.sin(this.theta), 2); x/z use scale / denom.
- Hamiltonian case: `const hScale = major;` x/z = hScale * Math.cos(this.theta * 3) * cos/sin(this.theta); free of minor.
- Formulas held exactly as in the chat paste.
- Prior holds remain: major/minor radius formulas (724), dispatcher sole four-case (723), gravityPull / toroidalWeave external (722), full kernel pin (721).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 726 — hold lerp alpha literal 0.05 and session Vector3 allocation.
2. 727 — hold phi referenced but never assigned (external weave).
3. 728 — hold triangular tAngle floor modulo 2π/3 and y sector free of theta*5.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
