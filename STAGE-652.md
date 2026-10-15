# Stage 652 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2 (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian (parametric vertex traversal):
    const hScale = major;
    x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
    z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
    y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- x/z free of minor. Y lift is sin(t)*2 added to hScale * sin(theta*3). hScale = major. No phi, no minor in this case.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity lemniscate denom (651), switch sole four-case (650), uniforms order (649), major/minor pre-switch (648).

## Compiled next stages
1. 653 — hold triangular floor snap and y sector free of theta*5 on y.
2. 654 — hold torus/default tube on x/z and shared y with infinity.
3. 655 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
