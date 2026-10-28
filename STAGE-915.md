# STAGE-915 — reaffirm full update(t) kernel pin from connecting chat paste (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full update(t) held as pinned session source of truth from connecting chat.
- uniforms: uTime = t; uGravity = state.gravityPull
- theta += (0.01 + idx * 0.002) * gravityPull
- major = 10 + (idx * 2); minor = 3 + (toroidalWeave * 2) pre-switch
- switch(targetState.geometry) sole four-case: infinity (lemniscate denom 1+sin^{2}(theta), scale=major*1.5 shared by x/z), hamiltonian (hScale=major, y=sin(theta*3)*hScale + sin(t)*2), triangular (floor 2π/3, ripple theta*5 on x/z, y sector (idx%3-1)*major*0.5 + sin(t)*minor), torus/default tube (major+minor*cos(phi))
- position.lerp(new THREE.Vector3(x,y,z), 0.05); phi external
- prior holds: 912 torus/default, 911 triangular, 910 hamiltonian y lift, 909 infinity, and series

## Enhancement this hop
Reaffirms the complete update(t) kernel pin from the current connecting chat paste. All formulas held exactly. Living path may optimize allocations. Paste not rewritten. No secrets.

## Next stages compiled
1. 916 — hold uniforms write order uTime then uGravity.
2. 917 — hold theta step unread by switch.
3. 918 — hold major/minor pre-switch assignment.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
