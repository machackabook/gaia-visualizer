# STAGE-744 — Hold infinity scale = major * 1.5, denom = 1 + sin(theta)^2 shared by x/z (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'infinity': Lemniscate of Bernoulli.
- const scale = major * 1.5;
- const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y unread by scale/denom (uses minor * sin(phi) * sin(t*0.5 + idx)).
- Formulas held exactly as in the chat paste.
- Prior holds remain: uniforms uTime then uGravity (743).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 745 — hold hamiltonian hScale = major, y = hScale * sin(theta*3) + sin(t)*2.
2. 746 — hold triangular floor snap and y sector.
3. 747 — hold torus/default tube (major + minor * cos(phi)) shared by x/z, y shared infinity formula.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
