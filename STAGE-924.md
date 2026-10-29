# STAGE-924 — hold phi external binding (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held: uniforms uTime then uGravity, theta += (0.01 + idx * 0.002) * gravityPull, major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch, four-case switch (infinity | hamiltonian | triangular | torus/default).
- Phi is referenced in infinity y, triangular (implicit), torus/default y and tube, but never assigned inside the session paste. External binding held.
- All geometry formulas unchanged.
- Lerp allocates new THREE.Vector3(x, y, z) with literal alpha 0.05.
- prior holds: 923 session Vector3 allocation inside lerp (alpha 0.05 literal)

## Enhancement this hop
Holds that phi is an external binding only. The session paste never assigns this.phi. Living path must preserve the external source for phi. Paste not rewritten. No secrets.

## Next stages compiled
1. 925 — reaffirm full kernel pin from current connecting chat.
2. 926 — hold uniforms write order uTime then uGravity.
3. 927 — hold theta step unread by switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
