# Stage 583 — hold minor = 3 + (toroidalWeave * 2) before switch (2026-10-11 19:12 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity` written first
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + (idx * 2)`, `minor = 3 + (toroidalWeave * 2)` assigned before switch
- four-case switch: infinity | hamiltonian | triangular | torus (default shares torus)
- infinity: scale = major * 1.5, denom = 1 + sin(theta)^2 shared by x and z only
- hamiltonian: hScale = major, y lift sin(t)*2 independent of hScale
- triangular: tAngle floor snap to 2π/3, y sector (idx % 3 - 1) * major * 0.5
- torus tube: (major + minor * cos(phi))
- final: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1`. Living hash `7cd81012`.
- Living path reuses `_kernelTarget` scratch. Session paste still allocates.

## Enhancement this hop
`noteSessionMinorHold` pins the session minor radius assignment `minor = 3 + (state.toroidalWeave * 2)` before the geometry switch. It does not rewrite the paste and does not add a session case.

- minor assigned once before switch(targetState.geometry)
- form held as 3 + (toroidalWeave * 2)
- used by infinity y, triangular ripple/y, torus tube; ignored by hamiltonian
- no extra cases invented
- paste not rewritten

## Next
- 584 hold theta step (0.01 + idx * 0.002) * gravityPull
- 585 hold uniforms uTime then uGravity as sole material writes
- 586 hold lerp alpha 0.05 session allocation

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
