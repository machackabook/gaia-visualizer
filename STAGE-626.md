# Stage 626 — hold torus y shared with infinity (2026-10-13)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus / default case:
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- y formula shared with infinity case. Does not use separate lift. Phi weave and sin(t*0.5 + idx) held.
- Prior holds remain: triangular y sector (625), hamiltonian hScale = major (621), torus default fallthrough (623).
- Paste not rewritten. No secrets.

## Compiled next stages (627+)
1. 627 — hold hamiltonian y lift sin(t)*2 unread by hScale.
2. 628 — hold lerp alpha literal 0.05 and session Vector3 allocation.
3. 629 — hold major/minor assignment before switch unread by pull.

Numeral 137451921129154222.
