# Stage 849 — hold toroidalWeave minor radius verification (2026-10-24 23:06 CDT)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `minor = 3 + (state.toroidalWeave * 2);` assigned before the switch.
- Infinity y: `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)` — minor scales the y amplitude.
- Triangular: lane `(this.idx % 3 - 1) * major * 0.5` unread by minor; ripple `Math.sin(t) * minor` scales with minor.
- Torus/default: tube radius `(major + minor * Math.cos(this.phi))` on x/z; y shared with infinity uses minor.
- Hamiltonian: ignores minor entirely (`hScale = major`).
- Paste not rewritten. No secrets. No fifth session case. GravityPull from stage 848 still modulates theta only.

## Compiled next stages
1. 850 — major = 10 + (idx * 2) held unread by gravityPull; used for scale/hScale/sector.
2. 851 — uniforms order: uTime then uGravity; sources t and state.gravityPull respectively.
3. 852 — lerp alpha remains literal 0.05; no modulation by gravityPull or toroidalWeave.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
