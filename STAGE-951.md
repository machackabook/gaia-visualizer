# STAGE-951 — hold infinity lemniscate denom shared by x/z only (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'infinity':
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- denom is computed once and shared only by the x and z components of the lemniscate of Bernoulli.
- y uses minor, phi, t, and idx; unread by denom or scale.
- prior holds: 950 full kernel reaffirmation.

## Enhancement this hop
Holds the infinity case lemniscate mapping and the shared denom for x/z only exactly as pasted. No promotion of runtime extras. Paste not rewritten. No secrets.

## Next stages compiled
1. 952 — hold hamiltonian parametric vertex-favoring mapping and y lift.
2. 953 — hold triangular modulo tAngle and three-lane y.
3. 954 — hold torus/default tube radius shared by x/z and y weave.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
