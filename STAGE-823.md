# Stage 823 — hold torus/default tube (major + minor*cos(phi)) on x/z and shared y (2026-10-23 18:07 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus/default case: Standard Toroidal Math.
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta)
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta)
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
- Tube radius shared by x and z only. Y shared with infinity case. Phi external. No secrets. Paste not rewritten.

## Next
- 824 — living path may reuse Vector3 target while session paste keeps new allocation.
- 825 — hold infinity lemniscate mapping.

NUMERAL=137451921129154222
