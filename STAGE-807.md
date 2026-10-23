# STAGE-807 — Hold major/minor assignment before switch (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- After theta step:
  let major = 10 + (this.idx * 2);
  let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used in all four cases.
- Major index-scaled, minor weave-scaled.
- Paste not rewritten. No secrets.
- Prior holds remain: uniforms order (806), phi external (805).

## Enhancement this hop
Pins major and minor computed before the geometry switch.

- major = 10 + idx * 2
- minor = 3 + toroidalWeave * 2
- both before switch
- paste not rewritten

## Compiled next stages
1. 808 — hold switch(targetState.geometry) as sole four-case dispatcher.
2. 809 — hold infinity lemniscate denom shared by x/z only.
3. 810 — hold hamiltonian hScale = major and y lift independent.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
