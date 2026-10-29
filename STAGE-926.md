# STAGE-926 — hold uniforms write order uTime then uGravity (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Order held: uTime then uGravity. No other material uniforms written inside the session paste.
- Full kernel otherwise as prior 925 reaffirmation (theta step, major/minor pre-switch, four-case switch, lerp 0.05 session allocation).
- prior holds: 925 full kernel pin reaffirmation from current connecting chat.

## Enhancement this hop
Pins the sole material uniform writes at the top of update(t) in the exact order uTime then uGravity. Does not rewrite the paste, does not add uniforms, does not modulate. Living path may optimize but must preserve order and sources. Paste not rewritten. No secrets.

## Next stages compiled
1. 927 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
2. 928 — hold major/minor pre-switch assignment.
3. 929 — hold infinity lemniscate denom shared by x/z only; y unread by denom.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
