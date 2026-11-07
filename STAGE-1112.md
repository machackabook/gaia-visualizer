# STAGE-1112 — hold infinity scale = major * 1.5 and shared denom for x/z only (2026-11-07)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1112 holding the infinity lemniscate scale and shared denom.

## Session pin (paste not rewritten)
- case 'infinity':
  - const scale = major * 1.5;
  - const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  - x = (scale * Math.cos(this.theta)) / denom;
  - z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); (shared with torus)
- Scale and denom unread by hamiltonian / triangular / torus cases
- Prior holds: toroidalWeave on minor, full switch, 0.05 lerp, uniforms, theta, major/minor placement, phi external
- Paste not rewritten

## Enhancement this hop
Holds the infinity case scale factor (major * 1.5) and the shared Bernoulli denom applied only to x/z parametric forms. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1113 — hold hamiltonian y lift free of hScale/minor.
2. 1114 — hold triangular tAngle floor to 2π/3 and y sector free of theta*5.
3. 1115 — hold torus/default tube (major + minor * cos(phi)) on x/z with y shared to infinity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
