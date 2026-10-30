# STAGE-946 — hold theta advance (0.01 + idx*0.002)*gravityPull and phi external (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Theta step is computed before the switch and is unread by any geometry case.
- this.phi is referenced in infinity y, triangular (not), torus/default y and tube, but never assigned inside the update(t) paste. External binding only.
- prior holds: 945 torus/default tube shared by x/z; y shared with infinity.

## Enhancement this hop
Holds the theta advance formula and the external nature of phi exactly as in the pasted kernel. Theta step does not enter the switch bodies. Phi is never written in the session paste. Paste not rewritten. No secrets.

## Next stages compiled
1. 947 — hold uniforms uTime/uGravity write order and material reference.
2. 948 — hold major/minor pre-switch assignment and switch sole four-case dispatch.
3. 949 — hold session lerp new Vector3 allocation with literal alpha 0.05.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
