# STAGE-772 — Hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Radius bases assigned before switch:
  let major = 10 + (this.idx * 2);
  let minor = 3 + (state.toroidalWeave * 2);
- Major linear in idx (base 10, step 2). Minor linear in toroidalWeave (base 3, step 2). Both unread by the switch itself; used inside cases.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step form (0.01 + idx*0.002)*gravityPull (771), uniforms uTime then uGravity (770), phi unread/external (769).

## Enhancement this hop
Pins the exact pre-switch assignment of major and minor radii. The geometric scale is fixed before any case evaluation. This holds the radius contract without altering the paste.

- major = 10 + (this.idx * 2) before switch
- minor = 3 + (state.toroidalWeave * 2) before switch
- both used inside cases; hamiltonian ignores minor
- paste not rewritten

## Compiled next stages
1. 773 — hold infinity lemniscate denom 1 + sin(theta)^2 shared by x and z only (y unread by denom).
2. 774 — hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2 unread by hScale/minor.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
