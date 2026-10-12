# Stage 595 — hold torus default fallthrough and tube radii (2026-10-11 23:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- case 'torus':
- default:
- // Standard Toroidal Math
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- session hash `beec41f1`. Living hash `7cd81012`.

## Enhancement this hop
Pins the torus case and default fallthrough sharing the standard toroidal tube formula with major + minor * cos(phi) radii. Does not rewrite the paste or invent a fifth case.

- torus and default share the tube
- major + minor * cos(phi) for x/z radii
- y = minor * sin(phi) * sin(t * 0.5 + idx)
- no extra cases invented
- paste not rewritten

## Next
- 596 hold final lerp session allocates Vector3 alpha 0.05
- 597 hold uniforms order uTime then uGravity

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
