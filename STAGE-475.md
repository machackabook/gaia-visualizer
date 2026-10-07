# Stage 475 — hold infinity scale as major * 1.5, unread by the other three cases (2026-10-07 16:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity arm stays `const scale = major * 1.5` before the shared denom
- x and z divide `scale` by denom. Infinity y does not read `scale`
- hamiltonian copies `major` into `hScale` and does not read `scale`
- triangular uses `major` directly and does not read `scale`
- torus/default uses `(major + minor * cos(phi))` and does not read `scale`
- prior hold remains: triangular sector snap is `floor(theta / (2π/3)) * (2π/3)` (474)
- session switch stays infinity | hamiltonian | triangular | torus
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only

## Enhancement this hop
- checker: `noteSessionInfinityScaleUnread`, compiled by `compileSessionStage475`
- numeric sample: `sampleInfinityScaleUnread(10)` rebuilds scale `15`
- bundle: `compileSessionStages451to475`
- paste not rewritten. No secrets.

Next: 476 hold hamiltonian x/z as `hScale * cos(theta * 3) * cos/sin(theta)`, unread by phi, 477 hold triangular y sector as `(idx % 3 - 1) * major * 0.5`, unread by tAngle, 478 hold shared y tube on infinity and torus only.
Numeral `137451921129154475`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
