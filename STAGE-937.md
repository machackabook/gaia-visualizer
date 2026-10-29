# STAGE-937 — hold theta step unread by switch (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Theta step unread by the geometry switch. Computed before switch. Multiplier (0.01 + idx * 0.002) * gravityPull. Sources this.idx and state.gravityPull.
- Full kernel otherwise as prior 936 hold on uniforms order uTime then uGravity.
- prior holds: 936 uniforms write order uTime then uGravity.

## Enhancement this hop
Pins the theta step as (0.01 + this.idx * 0.002) * state.gravityPull, computed once before the switch and unread by any geometry case. Does not rewrite the paste or alter the formula. Living path may optimize but must preserve the step. Paste not rewritten. No secrets.

## Next stages compiled
1. 938 — hold major/minor pre-switch assignment.
2. 939 — hold switch(targetState.geometry) sole four-case dispatch.
3. 940 — hold lerp alpha literal 0.05 and session Vector3 allocation.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
