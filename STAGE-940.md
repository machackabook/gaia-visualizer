# STAGE-940 — hold lerp alpha literal 0.05 and session Vector3 allocation (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Literal alpha 0.05. No modulation by gravityPull or toroidalWeave.
- Session allocates new THREE.Vector3 inside the lerp call.
- Living path may reuse _kernelTarget; session paste holds the allocation.
- Full kernel otherwise as prior 939 hold on switch sole four-case dispatch.
- prior holds: 939 switch sole four-case dispatch.

## Enhancement this hop
Pins the lerp interpolation alpha as the literal 0.05 with session Vector3 allocation exactly as pasted. No rewriting of the paste. Living path may optimize allocation but must preserve the alpha literal and the geometric target computation. Paste not rewritten. No secrets.

## Next stages compiled
1. 941 — hold phi external binding.
2. 942 — hold infinity lemniscate denom shared by x/z only.
3. 943 — hold hamiltonian y lift free of hScale/minor.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
