# STAGE-947 — hold uniforms uTime/uGravity write order and material reference (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Uniforms written in order uTime then uGravity. Sources are the function parameter t and state.gravityPull respectively.
- Material reference is this.material; no other material mutation in the paste.
- prior holds: 946 theta advance and phi external.

## Enhancement this hop
Holds the uniforms write order and sources exactly as pasted. uTime first, uGravity second. Paste not rewritten. No secrets.

## Next stages compiled
1. 948 — hold major/minor pre-switch assignment and switch sole four-case dispatch.
2. 949 — hold session lerp new Vector3 allocation with literal alpha 0.05.
3. 950 — reaffirm full update(t) kernel pin from current connecting chat.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
