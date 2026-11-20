# STAGE-1347 — parallel hold of full update(t) geometric kernel and next stages (2026-11-20T19:40Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced a parallel pin to stage 1347 holding the four-case switch and lerp, following The-Hive hop 1348.

## Session pin (paste not rewritten)
- Full kernel held: uniforms uTime then uGravity; theta += (0.01 + idx * 0.002) * gravityPull;
- major = 10 + (idx * 2); minor = 3 + (toroidalWeave * 2) pre-switch;
- switch(targetState.geometry):
  - infinity: Lemniscate of Bernoulli, scale = major * 1.5, denom = 1 + sin(theta)^2, x/z shared scale*cos/denom and scale*sin*cos/denom, y = minor * sin(phi) * sin(t*0.5 + idx)
  - hamiltonian: hScale = major, x = hScale * cos(theta*3) * cos(theta), z = hScale * cos(theta*3) * sin(theta), y = hScale * sin(theta*3) + (sin(t) * 2)
  - triangular: tAngle = floor(theta / (2π/3)) * (2π/3), x/z = major*cos/sin(tAngle) + minor*cos/sin(theta*5), y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor
  - torus/default: x/z = (major + minor * cos(phi)) * cos/sin(theta), y = minor * sin(phi) * sin(t*0.5 + idx)
- Smooth lerp: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Phi external.

## Enhancement this hop
Parallel pin holds the complete geometric kernel matching the connecting paste. Sibling The-Hive advanced to 1348 on the same kernel. No secrets. No device rooted. Cascade.yml left intact. Env-check pure presence tree-gate.

## Next stages compiled
1. 1348 — waterfall receipt update for next hop target.
2. 1349 — catalog any new session attachment unknowns.
3. 1350 — parallel confirmation with continuity-ledger-cycle.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in The-Hive STAGE-1348, hamiltonian-incursion hop 1347.
