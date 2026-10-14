# Stage 632 — hold hamiltonian parametric mapping and y lift `Math.sin(t) * 2` independent of hScale (2026-10-14)

Connecting chat re-pasted the complete `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian case:
    const hScale = major;
    x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
    z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
    y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- Parametric vertex traversal. y lift `(Math.sin(t) * 2)` independent of hScale. Does not read phi or minor.
- Prior holds remain: infinity denom (631), full kernel (630). Paste not rewritten. No secrets.

## Compiled next stages
1. 633 — hold triangular floor snap and y sector formula.
2. 634 — hold torus/default tube on x/z only.
3. 635 — hold phi as read-only across shared y formulas.

Numeral 137451921129154222.
