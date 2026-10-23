# Stage 821 — hold triangular floor snap and y sector free of theta*5 (2026-10-23 17:07 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case: modulo-based snapping to 3D tetrahedron/triangular lattice.
- tAngle = Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3)
- x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5)
- z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5)
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor
- Floor snap to 2π/3. Y sector free of theta*5. Raw theta*5 stays on minor ripple of x/z only.
- Phi unread. No secrets. Paste not rewritten.

## Compiled next stages
1. 822 — hold full kernel uniforms order, theta step, major/minor before switch, lerp allocation.
2. 823 — hold torus/default tube (major + minor*cos(phi)) on x/z and shared y.
3. 824 — living path may reuse Vector3 target while session paste keeps new allocation.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine.
