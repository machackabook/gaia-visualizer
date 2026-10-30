# STAGE-943 — hold hamiltonian y lift free of hScale/minor (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'hamiltonian': const hScale = major;
- x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
- z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
- y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2); // y uses hScale and sin(t)*2; free of minor and of any denom
- Hamiltonian y lift is independent of minor radius and of the infinity denom.
- prior holds: 942 infinity lemniscate denom shared by x/z only.

## Enhancement this hop
Holds the hamiltonian parametric mapping exactly as pasted. Y lift uses hScale * sin(theta*3) + sin(t)*2 and remains free of minor and of any shared denom. Paste not rewritten. No secrets.

## Next stages compiled
1. 944 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
2. 945 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity.
3. 946 — hold theta advance (0.01 + idx*0.002)*gravityPull and phi external.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
