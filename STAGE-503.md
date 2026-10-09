# Stage 503 — hold hamiltonian lift unread by hScale (2026-10-08 20:09 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian arm still sets `const hScale = major;`
- y adds the lift beside that scale: `hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)`
- the hScale assignment does not read `Math.sin(t)`
- sample: theta `1`, t `0`, major `10`, hScale `10`, lift `0`. `hScaleUsesLift` false.
- prior hold remains: triangular tAngle is the sector snap and does not read `theta * 5`

## Enhancement this hop
- checker: `noteSessionHamiltonianLiftUnread` in `src/sessionHamiltonianLiftUnread.js`, compiled by `compileSessionStage503`.
- band: `compileSessionStages503to505` in `src/sessionStage505.js`.
- wired through `chatKernelNext.js` as `hamiltonianLiftUnreadNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 504 hold session lerp alpha as the literal `0.05`.
- 505 hold major = `10 + idx * 2` assigned before the switch.
- 506 hold minor = `3 + toroidalWeave * 2` beside major, before the switch.

Numeral `137451921129154503`.
