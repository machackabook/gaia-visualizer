# Stage 437 — torus tube radius shared by x and z only (2026-10-05 23:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- tube = `major + minor * cos(phi)` multiplies both x and z
- y is `minor * sin(phi) * sin(t * 0.5 + idx)` and does not use the tube

## Enhancement this hop
`noteSessionTorusTubeSharedXZ` and `compileSessionStage437`. Sample: major 10, minor 3, phi 0, theta 0 → tube 13, x 13, z 0, y 0.
Paste not rewritten. No secrets.

Next: 438 infinity y shares the torus y tube formula, 439 default falls through to torus, 440 lerp alpha stays 0.05 and is not scaled by gravityPull.
Numeral `137451921129154437`.
