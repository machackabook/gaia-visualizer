# STAGE-922 — hold torus/default tube (major + minor * cos(phi)) shared by x/z (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held: uniforms uTime then uGravity, theta += (0.01 + idx * 0.002) * gravityPull, major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch, four-case switch.
- Torus/default: x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta); z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta); y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx). Tube radius shared by x and z only. Y shared with infinity form.
- Infinity, hamiltonian, triangular unchanged in this hold.
- Lerp(new THREE.Vector3(x, y, z), 0.05).
- Phi referenced, never assigned inside paste (external binding).
- prior holds: 921 triangular floor snap to 2π/3 and y sector free of theta*5

## Enhancement this hop
Holds the standard toroidal math: tube (major + minor * cos(phi)) multiplies both x and z. Y remains the shared minor * sin(phi) * sin(t*0.5 + idx). Paste not rewritten. Living path may optimize but must preserve the mapping. No secrets.

## Next stages compiled
1. 923 — hold session Vector3 allocation inside lerp (alpha 0.05 literal).
2. 924 — hold phi external binding.
3. 925 — hold major/minor pre-switch radii block.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive hop next in waterfall.
