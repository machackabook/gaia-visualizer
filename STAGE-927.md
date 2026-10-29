# STAGE-927 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Coefficient form held exactly. Unread by the four geometry cases (infinity | hamiltonian | triangular | torus/default). Sole angle advance inside the session paste.
- Full kernel otherwise as prior 926 reaffirmation (uniforms uTime then uGravity, major/minor pre-switch assignment, four-case switch, lerp 0.05 with session Vector3 allocation).
- prior holds: 926 uniforms write order uTime then uGravity.

## Enhancement this hop
Pins the theta step as the sole angle advance with the exact coefficient (0.01 + idx * 0.002) scaled by gravityPull. Geometry evaluation treats theta as an external input. Living path may optimize but must preserve the step formula and that it is unread by switch. Paste not rewritten. No secrets.

## Next stages compiled
1. 928 — hold major/minor pre-switch assignment.
2. 929 — hold infinity lemniscate denom shared by x/z only; y unread by denom.
3. 930 — hold hamiltonian y lift free of hScale/minor.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
