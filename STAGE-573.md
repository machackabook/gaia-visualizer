# Stage 573 — hold infinity lemniscate denom shared by x and z (2026-10-11 09:11 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'infinity':
-   const scale = major * 1.5;
-   const denom = 1 + Math.pow(Math.sin(this.theta), 2);
-   x = (scale * Math.cos(this.theta)) / denom;
-   z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
-   y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- denom = 1 + sin(theta)^2 shared by both x and z. Lemniscate of Bernoulli mapping.

## Enhancement this hop
- infinity lemniscate denom held shared exactly as session paste for x and z.
- paste not rewritten. No secrets.

## Next
- 574 hold phi read-only in shared y formulas
- 575 hold final lerp allocates Vector3 alpha 0.05
- 576 hold theta step (0.01 + idx*0.002)*gravityPull

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`.
