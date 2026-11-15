# STAGE-1282 — hold infinity case lemniscate of Bernoulli mapping with shared denom on x/z (2026-11-15T21:09Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1282 holding the infinity lemniscate mapping.

## Session pin (paste not rewritten)
- case 'infinity':
- const scale = major * 1.5;
- const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Shared denom applied only to x and z. Y unread by denom. Scale from major*1.5. Phi external.
- prior holds: 1281 major/minor assignment order before switch.
- Paste not rewritten.

## Enhancement this hop
Holds the lemniscate of Bernoulli parametric form for the infinity case. Denominator shared exclusively by x/z coordinates. Y remains independent of the denom and uses minor * sin(phi) * sin(t*0.5 + idx). Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1283 — hold hamiltonian parametric free of minor on x/z and y lift (hScale=major, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift).
2. 1284 — hold triangular floor theta to 2π/3 with y sector free of theta*5.
3. 1285 — hold torus/default tube (major + minor*cos(phi)) on x/z, y shared with infinity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
