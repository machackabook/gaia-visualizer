# Stage 549 — hold torus tube identity (major + minor * cos(phi)) (2026-10-10 11:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus / default arm uses standard toroidal math
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta)
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta)
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
- shares body with default; not a fifth case

## Enhancement this hop
- session switch remains four cases; tube radius formula held as written
- paste not rewritten. No fifth case promoted. No secrets.

## Next
- 550 hold theta step = (0.01 + idx * 0.002) * gravityPull
- 551 hold lerp alpha literal 0.05 and Vector3 alloc in paste
- 552 hold uniform write order uTime then uGravity

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`.
