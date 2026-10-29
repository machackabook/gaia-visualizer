# STAGE-936 — hold uniforms write order uTime then uGravity (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Write order uTime then uGravity. Sources t and state.gravityPull. Unread by theta step and geometry switch.
- Full kernel otherwise as prior 935 reaffirmation (theta step, major/minor pre-switch, four-case switch, lerp 0.05 session allocation, phi external).
- prior holds: 935 full kernel pin from current connecting chat.

## Enhancement this hop
Pins the uniforms write order uTime then uGravity as the first statements in update(t). Does not rewrite the paste or alter sources. Living path may optimize but must preserve the order. Paste not rewritten. No secrets.

## Next stages compiled
1. 937 — hold theta step unread by switch.
2. 938 — hold major/minor pre-switch assignment.
3. 939 — hold switch(targetState.geometry) sole four-case dispatch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
