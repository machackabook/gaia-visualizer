# STAGE-938 — hold major/minor pre-switch assignment (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used across all four cases. Index-scaled major, weave-scaled minor. Unread by uniforms and theta step.
- Full kernel otherwise as prior 937 hold on theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
- prior holds: 937 theta step unread by switch.

## Enhancement this hop
Pins the major and minor radius assignments before the geometry switch. Major is index-scaled and unread by gravityPull. Minor is weave-scaled. Both feed the four cases. Does not rewrite the paste or invent additional scales. Living path may optimize but must preserve the formulas and pre-switch order. Paste not rewritten. No secrets.

## Next stages compiled
1. 939 — hold switch(targetState.geometry) sole four-case dispatch.
2. 940 — hold lerp alpha literal 0.05 and session Vector3 allocation.
3. 941 — hold phi external binding.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
