# STAGE-869 — Hold session Vector3 allocation inside lerp (alpha 0.05 literal; living path reuses) (2026-10-26)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Kernel held (paste not rewritten)
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)
- session paste allocates new Vector3 each frame (hash beec41f1)
- living / enhanced path reuses _kernelTarget / _target
- alpha remains literal 0.05; no modulation by gravityPull or toroidalWeave
- phi external binding held
- major/minor pre-switch held
- theta step unread by switch
- uniforms uTime then uGravity
- sole four-case switch; extras non-promoted

## Enhancement this hop
Pins the session-level allocation of a new THREE.Vector3 inside the lerp call. Living path continues the reuse optimization. Alpha held literal.

## Next stages compiled
- 870: hold infinity lemniscate denom shared by x and z only; y unread by denom
- 871: hold hamiltonian y lift sin(t)*2 free of hScale/minor
- 872: hold triangular floor snap to 2π/3 and y sector free of theta*5

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
