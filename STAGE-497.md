# Stage 497 — hold lerp alpha as the literal 0.05 (2026-10-08 13:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- blend: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`
- alpha stays the literal `0.05`. It is not scaled by `state.gravityPull`, `state.toroidalWeave`, or `t`.
- the session paste still allocates `new THREE.Vector3` inside lerp. Living path may reuse `_kernelTarget` outside this paste.
- prior hold remains: theta step `(0.01 + idx * 0.002) * gravityPull` does not increment phi.

## Enhancement this hop
- checker: `noteSessionLerpAlphaLiteral` in `src/sessionLerpAlphaLiteral.js`, compiled by `compileSessionStage497`.
- stage 482 still holds alpha 0.05 as the only blend. Stage 440 still holds that alpha unscaled by gravity. This hop pins the literal form on the re-pasted session body.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 498 hold lemniscate scale as `major * 1.5`, unread by minor.
- 499 hold default as sharing the torus tube, not a fifth session case.
- 500 hold phi still: the session paste does not increment phi.

Numeral `137451921129154497`.
