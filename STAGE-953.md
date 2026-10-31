# STAGE-953 — hold triangular modulo tAngle and three-lane y (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'triangular':
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Modulo-based snapping to form a 3D tetrahedron/triangular lattice.
- tAngle floors theta into three sectors of 2π/3.
- y is three-lane by idx % 3; free of the theta*5 perturbation on x/z.
- prior holds: 952 hamiltonian parametric mapping.

## Enhancement this hop
Holds the triangular case floor snap and three-lane y exactly as pasted. No promotion of runtime extras. Paste not rewritten. No secrets.

## Next stages compiled
1. 954 — hold torus/default tube radius shared by x/z and y weave.
2. 955 — reaffirm phi external across all cases that reference it.
3. 956 — hold full kernel as sole session source of truth.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
