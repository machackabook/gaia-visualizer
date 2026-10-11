# Stage 580 — hold lemniscate denom 1 + sin(theta)^2 shared by x and z (2026-10-11 15:12 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity case: const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Lemniscate of Bernoulli. Denom shared by x and z only. y unread by denom.
- prior holds remain: infinity scale = major * 1.5, torus tube, hamiltonian.

## Enhancement this hop
- checker for lemniscate denom identity and share by x/z.
- paste not rewritten. No secrets. No fifth session case.

## Next
- 581 hold final lerp session allocates Vector3 alpha 0.05
- 582 hold major = 10 + (idx * 2) before switch
- 583 hold minor = 3 + (toroidalWeave * 2) before switch

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`.
