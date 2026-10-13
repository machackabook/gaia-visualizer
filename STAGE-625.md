# Stage 625 — hold triangular y formula (2026-10-13)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- triangular case:
    const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
    x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
    y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- y sector is (idx % 3 - 1) * major * 0.5 and does not take theta * 5. tAngle floor snap and *5 weave held.
- Prior holds remain: torus default fallthrough (623), hamiltonian hScale = major (621).
- Paste not rewritten. No secrets.

## Compiled next stages (626+)
1. 626 — hold torus y shared with infinity (minor * sin(phi) * sin(t*0.5 + idx)).
2. 627 — hold hamiltonian y lift sin(t)*2 unread by hScale.
3. 628 — hold lerp alpha literal 0.05 and session Vector3 allocation.

Numeral 137451921129154222.
