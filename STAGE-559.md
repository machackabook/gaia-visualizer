# Stage 559 — hold torus tube (major + minor * cos(phi)) and shared y (2026-10-10 16:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'torus':
- default:
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- torus and default share the body. Tube radius uses minor. y matches infinity y.

## Enhancement this hop
- torus/default arm held exactly as session paste. No fifth case. phi read-only.
- paste not rewritten. No secrets.

## Next
- 560 hold theta step (0.01 + idx * 0.002) * gravityPull and uTime then uGravity
- 561 hold final lerp alpha literal 0.05 with new Vector3
- 562 hold minor = 3 + toroidalWeave * 2 unread by hamiltonian

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`.
