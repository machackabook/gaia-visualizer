# STAGE-948 — hold major/minor pre-switch assignment and switch sole four-case dispatch (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used across all four cases. Index-scaled major, weave-scaled minor. Unread by uniforms and theta step.
- switch(targetState.geometry) is the sole four-case dispatcher: infinity | hamiltonian | triangular | torus/default.
- prior holds: 947 uniforms uTime then uGravity write order.

## Enhancement this hop
Holds the pre-switch major/minor assignment and the switch as the sole four-case dispatch exactly as in the pasted kernel. No fifth case. Runtime extras not promoted. Paste not rewritten. No secrets.

## Next stages compiled
1. 949 — hold session lerp new Vector3 allocation with literal alpha 0.05.
2. 950 — reaffirm full update(t) kernel pin from current connecting chat.
3. 951 — hold infinity lemniscate denom shared by x/z only.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
