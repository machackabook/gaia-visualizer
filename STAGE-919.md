# STAGE-919 — hold infinity lemniscate denom shared by x/z only (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held: uniforms uTime then uGravity, theta += (0.01 + idx * 0.002) * gravityPull, major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch, four-case switch.
- Infinity: scale = major * 1.5; denom = 1 + Math.pow(Math.sin(this.theta), 2); x = (scale * Math.cos(this.theta)) / denom; z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom; y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx). Denom shared by x and z only; y unread by denom.
- Hamiltonian, triangular, torus/default unchanged in this hold.
- Lerp(new THREE.Vector3(x, y, z), 0.05).
- Phi referenced, never assigned inside paste (external binding).
- prior holds: 918 full kernel reaffirm, 917 major/minor pre-switch

## Enhancement this hop
Holds the infinity lemniscate of Bernoulli mathematical mapping: denom `1 + sin(theta)^2` is applied only to the x and z components. Scale = major * 1.5. Y remains free of the denom. Paste not rewritten. Living path may optimize but must preserve the mapping. No secrets.

## Next stages compiled
1. 920 — hold hamiltonian y lift free of hScale/minor.
2. 921 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 922 — hold torus/default tube (major + minor * cos(phi)) shared by x/z.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-engine-ssos hop next in waterfall.
