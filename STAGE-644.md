# Stage 644 — hold hamiltonian parametric x/z and y lift free of minor (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian case:
    const hScale = major;
    x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
    z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
    y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- Parametric favoring vertex traversal. y lift is `sin(t)*2` independent of minor and hScale additive only. Phi unused.
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor (643), infinity scale/denom (642), shared y (641).

## Compiled next stages
1. 645 — hold torus/default tube on x/z only; y shared with infinity.
2. 646 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.
3. 647 — hold theta step as (0.01 + idx * 0.002) * gravityPull factor.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
