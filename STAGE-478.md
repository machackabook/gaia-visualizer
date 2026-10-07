# Stage 478 — hold shared y tube on infinity and torus only (2026-10-07 17:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity y and torus/default y stay `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`
- that line omits the tube radius `(major + minor * cos(phi))`
- hamiltonian y stays `hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)` and does not use the shared tube
- triangular y stays `(this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor` and does not use the shared tube
- prior hold remains: triangular y lane is unread by tAngle (477)
- session switch stays infinity | hamiltonian | triangular | torus
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only

## Enhancement this hop
- checker: `noteSessionSharedYTube`, compiled by `compileSessionStage478`
- numeric sample: `sampleSharedYTube(3, Math.PI / 2, 0, 0)` rebuilds y as 0 because `sin(0)` is 0
- bundle: `compileSessionStages451to478`
- paste not rewritten. No secrets.

Next: 479 hold hamiltonian y as `hScale * sin(theta * 3) + sin(t) * 2`, unread by minor, 480 hold triangular weave as `minor * cos/sin(theta * 5)` beside the sector snap, 481 hold the session theta step as the only angle advance; phi is not incremented.
Numeral `137451921129154478`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
