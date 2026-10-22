# STAGE-790 — Hold infinity lemniscate mapping and shared y formula (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Case 'infinity': Lemniscate of Bernoulli mathematical mapping.
- `const scale = major * 1.5;`
- `const denom = 1 + Math.pow(Math.sin(this.theta), 2);`
- `x = (scale * Math.cos(this.theta)) / denom;`
- `z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;`
- `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);` — shared with torus y formula. Unread by denom or scale.
- Phi external. Paste not rewritten. No secrets.

## Compiled next stages
1. 791 — hold hamiltonian parametric mapping with hScale = major and y lift sin(t)*2.
2. 792 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 793 — hold torus/default tube radius (major + minor * cos(phi)) shared by x and z only.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
