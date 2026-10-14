# Stage 633 — hold triangular floor snap and y sector formula (2026-10-14)

Connecting chat re-pasted the complete `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- triangular case:
    const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
    x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
    y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Modulo-based sector snap via floor. y is sector by idx % 3 plus sin(t)*minor. Weave is theta*5 on x/z.
- Prior holds remain: hamiltonian y lift (632), infinity denom (631). Paste not rewritten. No secrets.

## Compiled next stages
1. 634 — hold torus/default tube `(major + minor * Math.cos(this.phi))` on x and z only.
2. 635 — hold shared y tube formula identical on infinity and torus.
3. 636 — hold theta step parentheses as gravity factor.

Numeral 137451921129154222.
