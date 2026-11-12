# STAGE-1224 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session alloc alpha literal unread by gravityPull/toroidalWeave (2026-11-12 22:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1224 holding the final mesh position lerp with literal alpha 0.05.

## Session pin (paste not rewritten)
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Alpha literal 0.05 unread by gravityPull or toroidalWeave.
- Fresh Vector3 allocation inside the call each frame (session path).
- Living path may reuse a pooled target and scale alpha via chatKernelLerpAlpha; session paste remains the literal form.
- prior holds: 1223 major=10+(idx*2) minor=3+(toroidalWeave*2) prior to switch; phi external.
- Paste not rewritten.

## Enhancement this hop
Holds the terminal interpolation `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)` as the session contract. Alpha stays the literal 0.05 and is not scaled by gravityPull or toroidalWeave inside the paste. Living kernel may apply a modulated alpha; the connecting paste is untouched. No secrets. No device rooted.

## Next stages compiled
1. 1225 — hold uniforms order uTime then uGravity and theta step * gravityPull.
2. 1226 — hold switch(targetState.geometry) sole four-case dispatcher.
3. 1227 — hold infinity lemniscate denom shared by x/z only; y unread by denom.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
