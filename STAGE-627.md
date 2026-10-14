# Stage 627 — hold hamiltonian y lift sin(t)*2 unread by hScale (2026-10-13)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian case:
    const hScale = major;
    x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
    z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
    y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- y lift is Math.sin(t) * 2. Does not take hScale, minor, or phi. Phi unread on this arm.
- Prior holds remain: torus y shared with infinity (626), triangular y sector (625), hamiltonian hScale = major (621).
- Paste not rewritten. No secrets.

## Compiled next stages (628+)
1. 628 — hold lerp alpha literal 0.05 and session Vector3 allocation.
2. 629 — hold major/minor assignment before switch unread by pull.
3. 630 — hold uniforms uTime then uGravity as sole material writes.

Numeral 137451921129154222.
