# STAGE-913 — hold lerp alpha literal 0.05 and session allocation of new THREE.Vector3 (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- alpha literal 0.05; no modulation by gravityPull or toroidalWeave
- session path allocates new THREE.Vector3 each call; living path may reuse _kernelTarget
- prior holds: 912 torus/default tube with phi external, 911 triangular floor snap, 910 hamiltonian y, 909 infinity

## Enhancement this hop
Holds the final lerp exactly as pasted: literal alpha 0.05 with per-call Vector3 allocation. Paste not rewritten. No secrets.

## Next stages compiled
1. 914 — hold phi external binding (referenced, never assigned inside update(t)).
2. 915 — hold uniforms write order uTime then uGravity.
3. 916 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
