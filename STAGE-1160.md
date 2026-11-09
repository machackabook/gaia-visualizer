# STAGE-1160 — hold uniforms order uTime then uGravity and theta step * gravityPull (2026-11-09 16:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1160 holding the uniform writes and theta increment.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
  this.material.uniforms.uGravity.value = state.gravityPull;

  this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- uniforms written uTime then uGravity; theta stepped by (0.01 + idx*0.002) * gravityPull
- prior holds: 1159 final lerp(new THREE.Vector3(x, y, z), 0.05)
- Paste not rewritten

## Enhancement this hop
Holds the uniform assignment order and gravity-modulated theta step from the connecting paste. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1161 — hold major/minor assignment prior to switch.
2. 1162 — hold sole four-case switch(targetState.geometry).
3. 1163 — hold infinity lemniscate denom exclusive to x/z with y minor * sin(phi) * sin(t*0.5 + idx).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
