# Stage 473 — hold torus tube as (major + minor * cos(phi)) on x and z (2026-10-07 14:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `case 'torus':` stays fused with `default:`
- tube binding stays `(major + minor * Math.cos(this.phi))`
- x multiplies that binding by `Math.cos(this.theta)`
- z multiplies that binding by `Math.sin(this.theta)`
- torus y does not use the tube; it stays `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`
- prior hold remains: infinity denom is `1 + sin(theta)^2`, shared by x and z (472)
- session switch stays infinity | hamiltonian | triangular | torus
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only

## Enhancement this hop
- checker: `noteSessionTorusTubeXZ`, compiled by `compileSessionStage473`
- numeric sample: `sampleTorusTube(10, 3, 0)` rebuilds tube `13`
- bundle: `compileSessionStages451to473`
- paste not rewritten. No secrets.

Next: 474 hold triangular sector snap as `floor(theta / (2π/3)) * (2π/3)`, 475 hold infinity scale as `major * 1.5`, unread by the other three cases, 476 hold hamiltonian x/z as `hScale * cos(theta * 3) * cos/sin(theta)`, unread by phi.
Numeral `137451921129154473`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
