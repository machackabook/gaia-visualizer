# Stage 502 — hold triangular tAngle unread by the theta * 5 weave (2026-10-08 19:09 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- triangular arm still sets `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));`
- x and z add the weave beside that snap: `minor * Math.cos(this.theta * 5)` and `minor * Math.sin(this.theta * 5)`
- the tAngle assignment does not read `theta * 5`
- sample: theta `1`, sector `2π/3`, tAngle `0`, weave `5`. `tAngleUsesWeave` false.
- prior hold remains: infinity y is the shared tube and does not read `scale = major * 1.5`

## Enhancement this hop
- checker: `noteSessionTriangularTAngleUnread` in `src/sessionTriangularTAngleUnread.js`, compiled by `compileSessionStage502`.
- band: `compileSessionStages501to502` in `src/sessionStage502.js`.
- wired through `chatKernelNext.js` as `triangularTAngleUnreadNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 503 hold hamiltonian lift `(sin(t) * 2)` unread by hScale.
- 504 hold session lerp alpha as the literal `0.05`.
- 505 hold major = `10 + idx * 2` assigned before the switch.

Numeral `137451921129154502`.
