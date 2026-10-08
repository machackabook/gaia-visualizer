# Stage 494 — hold triangular sector snap unread by the theta*5 weave (2026-10-08 10:07 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- snap: `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));`
- that line does not read `theta * 5` or minor.
- weave is added beside the snap: `minor * Math.cos/sin(this.theta * 5)` on x and z.
- triangular y still does not read tAngle.
- sample: theta pi snaps to `2/3 pi`.

## Enhancement this hop
- checker: `noteSessionTriangularSnap` in `src/sessionTriangularSnap.js`, compiled by `compileSessionStage494`.
- band compile: `compileSessionStages492to494` in `src/sessionStages492to494.js`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 495 hold shared y tube identical on infinity and torus, unread by tube radius.
- 496 hold theta step as `(0.01 + idx * 0.002) * gravityPull`.
- 497 hold lerp alpha as the literal 0.05.

Numeral `137451921129154494`.
