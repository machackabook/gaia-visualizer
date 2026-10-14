# Stage 631 — hold infinity lemniscate denom `1 + Math.pow(Math.sin(this.theta), 2)` shared by x and z only (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity case:
    const scale = major * 1.5;
    const denom = 1 + Math.pow(Math.sin(this.theta), 2);
    x = (scale * Math.cos(this.theta)) / denom;
    z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- denom is `1 + sin(theta)^2`, shared exclusively by x and z. y does not read denom.
- Prior holds remain: full kernel from 630, major/minor before switch, uniforms order, theta step, lerp 0.05 + Vector3 alloc. Paste not rewritten. No new session geometries. No secrets.

## Compiled next stages
1. 632 — hold hamiltonian parametric mapping and y lift `Math.sin(t) * 2` independent of hScale.
2. 633 — hold triangular floor snap and y sector formula.
3. 634 — hold torus/default tube `(major + minor * Math.cos(this.phi))` on x and z only, y shared with infinity.

Numeral 137451921129154222.
