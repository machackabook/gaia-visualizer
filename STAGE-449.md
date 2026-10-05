# STAGE 449 — session minor radii + next-stage compile

Chat paste 2026-10-05 17:06 CDT reconfirmed the four-case switch. Session hash `beec41f1` held. Living hash `7cd81012` held.

## Session pin

- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default
- session paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only

## Enhancement

`src/sessionMinorRadii.js` documents that minor enters infinity y, the triangular ripple and y lift, and the torus tube, and does not enter the hamiltonian case. `compileSessionNextStages` queues 450–452. The session switch was not rewritten.

## Next

- 450 hold lemniscate denom `1 + sin(theta)^2` and scale `major * 1.5`
- 451 hold hamiltonian y `hScale * sin(theta * 3) + sin(t) * 2`
- 452 hold triangular sector y without `theta * 5`

No secrets. No history rewrite. No root claim.
