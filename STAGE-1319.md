# STAGE-1319 — hold major/minor assignment major=10+(idx*2) minor=3+(toroidalWeave*2) prior to switch; phi external (2026-11-18T16:20Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1319 holding the radius declarations prior to the geometry switch.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
- Assignments occur before switch(targetState.geometry). Phi remains external (referenced via this.phi, never assigned inside update(t)).
- prior holds: 1318 lerp new THREE.Vector3(x, y, z) alpha literal 0.05 unread by gravityPull/toroidalWeave.
- Paste not rewritten.

## Enhancement this hop
Holds major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) prior to the four-case switch. Phi stays external. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1320 — hold uniforms order uTime then uGravity and theta step * gravityPull.
2. 1321 — hold phi as external binding never assigned inside update(t).
3. 1322 — hold full kernel hash reaffirmation across infinity/hamiltonian/triangular/torus.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
