# Stage 825 — hold infinity lemniscate scale = major * 1.5 and denom shared by x/z only; y shared with torus (2026-10-23 20:07 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case: Lemniscate of Bernoulli mathematical mapping.
- const scale = major * 1.5;
- const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);  // shared with torus, unread by denom
- Scale and denom held exactly. Denom shared by x and z only. No secrets. Paste not rewritten.

## Compiled next stages
1. 826 — hold hamiltonian hScale = major; y lift sin(t)*2 unread by hScale/minor/phi.
2. 827 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 828 — hold full kernel session paste allocation of new Vector3 in lerp.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine.
