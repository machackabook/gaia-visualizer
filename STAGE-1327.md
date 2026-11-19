# STAGE-1327 — hold lerp alpha literal 0.05 with new Vector3 allocation after switch (2026-11-19T02:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1327 holding the final position lerp.

## Session pin (paste not rewritten)
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Smooth interpolation of current position to the target geometric state after the switch evaluates x/y/z.
- Alpha is literal 0.05, unread by state.gravityPull and unread by state.toroidalWeave.
- Session allocates a new THREE.Vector3 inside the lerp call each frame.
- prior holds: 1326 theta step product unread by the geometry switch.
- Paste not rewritten.

## Enhancement this hop
Holds the terminal interpolation `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)` as the session contract. Alpha stays the literal 0.05. Fresh Vector3 allocation inside the call. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1328 — hold phi external (referenced, never assigned inside update(t)).
2. 1329 — hold uniforms write order uTime then uGravity.
3. 1330 — hold full kernel closure with all prior pins (uniforms, theta, major/minor, four-case switch, lerp).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
