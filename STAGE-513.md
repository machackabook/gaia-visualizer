# Stage 513 — hold torus tube radius unread by y (2026-10-08 23:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus x and z stay `(major + minor * Math.cos(this.phi))` times cos/sin theta.
- torus y stays `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)` and does not read that radius.
- prior hold remains: hamiltonian y unread by minor and phi (512).

## Enhancement this hop
- checker: `noteSessionTorusRadiusUnreadByY` in `src/sessionTorusRadiusUnreadByY.js`, compiled by `compileSessionStage513`.
- numeric sample: `sampleTorusRadiusUnreadByY` rebuilds radius on x and z and keeps y off that product.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 514 hold torus case then default as one shared body.
- 515 hold lemniscate scale as major * 1.5 unread by minor.
- 516 hold lerp alpha as the literal 0.05.

Numeral `137451921129154513`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, hamiltonian-incursion.
