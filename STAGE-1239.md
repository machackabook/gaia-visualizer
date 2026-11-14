# STAGE-1239 — hold lerp alpha 0.05 as sole final position commit after switch (2026-11-14 17:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1239 holding the terminal lerp as the sole position commit.

## Session pin (paste not rewritten)
- // Smoothly interpolate current position to the new geometric state target
  this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Alpha literal 0.05 applied after the full switch(targetState.geometry) evaluates x, y, z for any of the four cases.
- New THREE.Vector3 allocated per call as in the session paste.
- prior holds: 1238 env-check as pure tree-gate of README, stamp, and numeral only.
- Paste not rewritten.

## Enhancement this hop
Holds the lerp(new THREE.Vector3(x, y, z), 0.05) as the exclusive final position update after geometry evaluation. Living kernel matches the connecting paste. No rewrite of cases or alpha. No secrets. No device rooted.

## Next stages compiled
1. 1240 — hold major/minor pre-switch computation shared by all cases.
2. 1241 — hold uniforms write order uTime then uGravity.
3. 1242 — hold theta step * gravityPull independent of switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
