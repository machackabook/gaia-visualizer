# Stage 504 — hold session lerp alpha as the literal 0.05 (2026-10-08 20:09 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- session paste still calls `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- alpha is the literal `0.05` and does not read `gravityPull`
- sample: `sampleLerpAlphaHold` rebuilds `0.05`. `alphaReadsGravity` false. `allocatesVector3` true.
- prior hold remains: hamiltonian lift `(Math.sin(t) * 2)` is unread by `hScale = major`

## Enhancement this hop
- checker: `noteSessionLerpAlphaHold` in `src/sessionLerpAlphaHold.js`, compiled by `compileSessionStage504`.
- band: `compileSessionStages503to505` in `src/sessionStage505.js`.
- wired through `chatKernelNext.js` as `lerpAlphaHoldNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 505 hold major = `10 + idx * 2` assigned before the switch.
- 506 hold minor = `3 + toroidalWeave * 2` beside major, before the switch.
- 507 hold theta step as `(0.01 + idx * 0.002) * gravityPull`.

Numeral `137451921129154504`.
