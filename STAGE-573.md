# Stage 573 — hold infinity lemniscate denom shared by x and z (2026-10-12 19:09 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- in case 'infinity':
- const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- denom shared by both x and z; y does not divide by denom
- scale = major * 1.5

## Enhancement this hop
Infinity lemniscate denominator is held shared between x and z. Paste not rewritten. No secrets.

## Next
- 574 hold phi read-only in shared y formulas
- 575 hold theta step as the only angle write
- 576 hold major/minor before switch

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`.
