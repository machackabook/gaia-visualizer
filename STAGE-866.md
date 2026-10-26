# STAGE-866 — Hold theta step (0.01 + this.idx * 0.002) * state.gravityPull unread by the geometry switch (2026-10-26)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Kernel held (paste not rewritten)
- theta += (0.01 + idx * 0.002) * gravityPull
- step unread by switch; pure angular advance
- uniforms written uTime then uGravity
- major/minor assigned pre-switch
- sole four-case switch; extras non-promoted
- lerp alpha 0.05 literal
- phi external

## Enhancement this hop
Pins the theta step form as the sole gravityPull consumer before geometry evaluation. Holds unread by the switch cases.

## Next stages compiled
- 867: hold major/minor pre-switch assignment
- 868: hold phi external binding
- 869: hold session Vector3 allocation inside lerp

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
