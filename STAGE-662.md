# Stage 662 — hold hamiltonian parametric x/z free of minor (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian:
    const hScale = major;
    x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
    z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
    y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- x/z free of minor and of phi. y lift is sin(t)*2, independent of minor.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity denom (661), switch sole four-case (660).

## Compiled next stages
1. 663 — hold triangular floor snap to 2π/3.
2. 664 — hold torus/default tube on x/z only; y shared with infinity.
3. 665 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
