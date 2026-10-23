# Stage 819 — hold infinity lemniscate denom shared by x and z only (2026-10-23 17:07 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case: Lemniscate of Bernoulli.
- scale = major * 1.5
- denom = 1 + Math.pow(Math.sin(this.theta), 2) shared by x and z only.
- x = (scale * Math.cos(this.theta)) / denom
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx) — unread by denom or scale.
- Phi referenced but never assigned inside paste. No secrets. Paste not rewritten.

## Next
- 820 — hold hamiltonian hScale = major and y lift sin(t)*2.
- 821 — hold triangular floor snap and y sector free of theta*5.

NUMERAL=137451921129154222
