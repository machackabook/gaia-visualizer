# STAGE-939 — hold switch(targetState.geometry) sole four-case dispatch (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- switch(targetState.geometry) {
- case 'infinity': lemniscate of Bernoulli (scale = major * 1.5, denom = 1 + Math.pow(Math.sin(this.theta), 2) shared by x/z only, y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx))
- case 'hamiltonian': parametric vertex traversal (hScale = major, y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2), x/z free of minor)
- case 'triangular': modulo floor snap to 2π/3 (tAngle = floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3), y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor free of theta*5)
- case 'torus': / default: standard toroidal tube ((major + minor * Math.cos(this.phi)) shared by x/z, y shared with infinity)
- Sole four-case dispatch. default shares torus. Runtime extras (klein/hopf/figure8/trefoil) not promoted.
- Full kernel otherwise as prior 938 hold on major/minor pre-switch assignment.
- prior holds: 938 major/minor pre-switch.

## Enhancement this hop
Pins the switch(targetState.geometry) as the sole four-case dispatcher. Formulas held exactly as pasted. No promotion of runtime extras. Living path may optimize but must preserve the case structure and mappings. Paste not rewritten. No secrets.

## Next stages compiled
1. 940 — hold lerp alpha literal 0.05 and session Vector3 allocation.
2. 941 — hold phi external binding.
3. 942 — hold infinity lemniscate denom shared by x/z only.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
