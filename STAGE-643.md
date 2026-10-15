# Stage 643 — hold triangular floor snap (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- triangular case:
    const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
    x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
    y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap to 3 sectors. Raw theta*5 ripple on x/z. y sector unread by phi.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity scale/denom (642), shared y (641).

## Compiled next stages
1. 644 — hold hamiltonian parametric x/z and y lift free of minor.
2. 645 — hold torus/default tube on x/z only; y shared.
3. 646 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
