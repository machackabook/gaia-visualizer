# STAGE-924 — hold phi external binding (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held: uniforms uTime then uGravity, theta += (0.01 + idx * 0.002) * gravityPull, major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch, four-case switch.
- Phi: this.phi is referenced in infinity (y), torus/default (tube and y), and triangular (not in y sector) cases but never assigned or incremented inside the pasted update(t). Phi is an external weave parameter.
- All geometry formulas and lerp unchanged in this hold.
- Lerp(new THREE.Vector3(x, y, z), 0.05).
- prior holds: 923 session Vector3 allocation inside lerp (alpha 0.05 literal)

## Enhancement this hop
Holds that this.phi is an external binding. It is read by the mathematical mappings (infinity y, torus tube/y) but never written inside the session paste. Living path must not invent an increment of phi inside update(t). Paste not rewritten. No secrets.

## Next stages compiled
1. 925 — reaffirm full kernel pin from current connecting chat.
2. 926 — hold uniforms write order uTime then uGravity.
3. 927 — hold theta step unread by switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-engine-ssos hop next in waterfall.
