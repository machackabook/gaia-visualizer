# STAGE-881 — Hold hamiltonian y lift sin(t)*2 free of hScale/minor; x/z free of minor (2026-10-26)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'hamiltonian':
  - const hScale = major;
  - x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
  - z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
  - y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2); // lift free of hScale and minor
- x/z free of minor
- prior holds: infinity denom (880), uniforms order, theta step, major/minor pre-switch, sole four-case switch, phi external, lerp alpha 0.05 session allocation preserved

## Enhancement this hop
Pins the Hamiltonian parametric mapping where the y lift (sin(t)*2) is independent of hScale and minor, and x/z coordinates are free of minor. Paste not rewritten.

## Next stages compiled
1. 882 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
2. 883 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity.
3. 884 — hold session Vector3 allocation inside lerp (alpha 0.05 literal).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine named next in waterfall.
