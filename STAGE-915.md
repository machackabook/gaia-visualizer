# STAGE-915 — hold uniforms write order uTime then uGravity (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- order: uTime then uGravity; sources t and state.gravityPull
- prior holds: 914 phi external binding, 913 lerp alpha literal 0.05 + session Vector3 alloc, 912 torus tube

## Enhancement this hop
Holds the uniforms write order exactly as pasted. No reordering. Paste not rewritten. No secrets.

## Next stages compiled
1. 916 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
2. 917 — hold major/minor assignment before switch.
3. 918 — reaffirm full kernel pin from current connecting chat.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
