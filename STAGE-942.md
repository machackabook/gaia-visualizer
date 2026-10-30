# STAGE-942 — hold infinity lemniscate denom shared by x/z only (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'infinity': const scale = major * 1.5; const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); // y unread by denom
- denom is shared exclusively by x and z; y formula independent of denom and scale
- prior holds: 941 phi external binding (referenced, never assigned in paste).

## Enhancement this hop
Holds the infinity lemniscate of Bernoulli mapping exactly as pasted. Denom (1 + sin(theta)^2) divides only x and z. Y remains free of denom and uses external phi. Paste not rewritten. No secrets.

## Next stages compiled
1. 943 — hold hamiltonian y lift free of hScale/minor.
2. 944 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 945 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
