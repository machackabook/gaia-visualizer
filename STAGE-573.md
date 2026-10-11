# Stage 573 — hold infinity lemniscate denom shared by x and z (2026-10-10 23:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity case: const scale = major * 1.5;
- const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- denom shared by both x and z

## Enhancement this hop
- shared Bernoulli denom held exactly as session paste for infinity x and z.
- paste not rewritten. No secrets.

## Next
- 574 hold phi read-only in shared y formulas
- 575 hold theta step (0.01 + idx * 0.002) * gravityPull
- 576 hold triangular tAngle floor snap

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`.
