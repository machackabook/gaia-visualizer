# STAGE-1117 — hold full kernel continuity (uniforms + theta + major/minor + four-case switch + lerp) (2026-11-07 16:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1117 holding the full kernel continuity.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry) { infinity | hamiltonian | triangular | torus/default }
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Full path from uniforms through theta, scales, four-case geometry, to terminal lerp held as continuous
- Prior holds from 1116 (0.05 lerp with session Vector3) remain
- Paste not rewritten

## Enhancement this hop
Holds the complete geometric field kernel continuity from the connecting paste: uniforms write, theta advance, major/minor assignment, four-case switch dispatch, and terminal lerp. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1118 — hold uniforms write order uTime then uGravity.
2. 1119 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
3. 1120 — hold major/minor assignment prior to switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
