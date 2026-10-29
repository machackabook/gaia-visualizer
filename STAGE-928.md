# STAGE-928 — hold major/minor pre-switch assignment (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used across all four cases. Index-scaled major, weave-scaled minor. Unread by uniforms and theta step.
- Full kernel otherwise as prior 927 reaffirmation (theta step unread by switch, uniforms uTime then uGravity, four-case switch, lerp 0.05 session allocation).
- prior holds: 927 theta step (0.01 + idx * 0.002) * gravityPull unread by switch.

## Enhancement this hop
Pins the major and minor radius assignments before the geometry switch. Major is index-scaled and unread by gravityPull. Minor is weave-scaled. Both feed the four cases. Does not rewrite the paste or invent additional scales. Living path may optimize but must preserve the formulas and pre-switch order. Paste not rewritten. No secrets.

## Next stages compiled
1. 929 — hold infinity lemniscate denom shared by x/z only; y unread by denom.
2. 930 — hold hamiltonian y lift free of hScale/minor.
3. 931 — hold triangular floor snap to 2π/3 and y sector free of theta*5.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
