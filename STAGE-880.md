# STAGE-880 — Hold infinity lemniscate denom shared by x and z only; y unread by denom (2026-10-26)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'infinity':
  - const scale = major * 1.5;
  - const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  - x = (scale * Math.cos(this.theta)) / denom;
  - z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); // unread by denom
- denom shared exclusively by x and z
- scale = major * 1.5
- prior holds: uniforms order, theta step, major/minor pre-switch, sole four-case switch, phi external, lerp alpha 0.05 session allocation preserved

## Enhancement this hop
Pins the Lemniscate of Bernoulli mapping where denom is shared only by the planar x/z coordinates. Y remains the shared tube form with torus. Paste not rewritten.

## Next stages compiled
1. 881 — hold hamiltonian y lift sin(t)*2 free of hScale/minor; x/z free of minor.
2. 882 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 883 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity.
4. 884 — hold session Vector3 allocation inside lerp (alpha 0.05 literal).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine named next in waterfall.
