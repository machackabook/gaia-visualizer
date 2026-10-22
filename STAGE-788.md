# STAGE-788 — Hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `let major = 10 + (this.idx * 2);`
- `let minor = 3 + (state.toroidalWeave * 2);`
- Both assigned after theta step, before `switch(targetState.geometry)`.
- Unread by gravityPull for scaling. Hamiltonian ignores minor.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 789 — hold switch(targetState.geometry) as sole four-case dispatch with default torus.
2. 790 — hold infinity lemniscate mapping and shared y formula.
3. 791 — hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
