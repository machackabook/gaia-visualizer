# Stage 587 — hold switch(targetState.geometry) sole four-case dispatch (2026-10-11 20:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity` written first
- theta step held
- major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch
- switch(targetState.geometry): infinity | hamiltonian | triangular | torus (default shares torus tube)
- session hash `beec41f1`. Living hash `7cd81012`.

## Enhancement this hop
Pins the sole four-case dispatch. Default falls through to torus. No fifth session case. Extras (klein / hopf / figure8 / trefoil / mobius) remain runtime-only.

- switch is the only geometry dispatch in the session paste
- labels held exactly as posted
- no promotion of runtime extras into the session kernel
- paste not rewritten

## Next
- 588 hold phi read-only in shared y formulas
- 589 hold major = 10 + (idx * 2) before switch

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
