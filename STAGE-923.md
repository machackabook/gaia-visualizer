# STAGE-923 — hold session Vector3 allocation inside lerp (alpha 0.05 literal) (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held: uniforms uTime then uGravity, theta += (0.01 + idx * 0.002) * gravityPull, major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch, four-case switch.
- Lerp: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05); Session allocates a new THREE.Vector3 inside the lerp call with literal alpha 0.05. No modulation by gravityPull or toroidalWeave.
- All geometry cases (infinity, hamiltonian, triangular, torus/default) unchanged in this hold.
- Phi referenced, never assigned inside paste (external binding).
- prior holds: 922 torus/default tube (major + minor * cos(phi)) shared by x/z

## Enhancement this hop
Holds the session lerp allocation: `new THREE.Vector3(x, y, z)` is created inside the lerp with fixed alpha 0.05. Living path may reuse a scratch Vector3 but must preserve the mathematical target and the literal 0.05 alpha. Paste not rewritten. No secrets.

## Next stages compiled
1. 924 — hold phi external binding.
2. 925 — reaffirm full kernel pin from current connecting chat.
3. 926 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
