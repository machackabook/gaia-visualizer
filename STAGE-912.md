# STAGE-912 — hold torus/default tube formula with phi external (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'torus':
- default:
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- tube radius (major + minor*cos(phi)) shared by x/z only; y uses minor*sin(phi)*sin(...); phi external (never assigned in paste)
- prior holds: 911 triangular floor snap, 910 hamiltonian y lift, 909 infinity, and earlier series

## Enhancement this hop
Holds the standard toroidal math exactly as pasted for torus and default. Phi remains externally bound. Living path may optimize elsewhere. Paste not rewritten. No secrets.

## Next stages compiled
1. 913 — hold lerp alpha literal 0.05 and session allocation of new THREE.Vector3(x, y, z).
2. 914 — hold phi external binding (referenced, never assigned inside update(t)).
3. 915 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
