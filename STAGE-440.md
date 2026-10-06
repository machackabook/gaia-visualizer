# Stage 440 — lerp alpha stays 0.05 and is not scaled by gravityPull (2026-10-06 10:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- session line remains `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- alpha is the literal `0.05`, not `0.05 * gravityPull` and not `gravityPull`
- prior hold remains: default falls through to torus (439)

## Enhancement this hop
`noteSessionLerpAlphaUnscaled` and `compileSessionStage440`. Living path may still reuse `_kernelTarget`. Paste not rewritten. No secrets.

Next: 441 theta step stays a product of the idx rate and gravityPull, 442 phi still unread as an increment.
Numeral `137451921129154440`.
