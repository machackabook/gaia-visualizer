# Stage 568 — hold torus default fallthrough and tube (2026-10-10 19:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'torus':
- default:
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- torus and default share the tube body. Phi read-only. y matches infinity y.
- prior holds remain.

## Enhancement this hop
- torus/default arm held exactly as session paste. Tube radius uses minor. No fifth case.
- paste not rewritten. No secrets.

## Next
- 569 hold uniform writes uTime then uGravity and theta step
- 570 hold final lerp session allocates Vector3 alpha 0.05
- 571 hold major = 10 + idx*2 and minor = 3 + toroidalWeave*2 before switch

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`.
