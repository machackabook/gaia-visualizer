# Stage 501 — hold infinity y as the shared tube, unread by scale (2026-10-08 18:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity arm still sets `const scale = major * 1.5` and divides x and z by the lemniscate denom.
- infinity y stays `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);`
- that line matches torus/default y. It does not read `scale`.
- sample: major `10` → scale `15`, minor `3`, phi `0.4`, t `0`, idx `0` → y `0`. `scaleInY` false.
- prior hold remains: phi is read and never assigned. Only angle write is the theta step.

## Enhancement this hop
- checker: `noteSessionInfinityYUnreadByScale` in `src/sessionInfinityYUnreadByScale.js`, compiled by `compileSessionStage501`.
- band: `compileSessionStages500to501` in `src/sessionStage501.js`.
- wired through `chatKernelNext.js` as `infinityYUnreadNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 502 hold triangular tAngle unread by the theta * 5 weave.
- 503 hold hamiltonian lift `(sin(t) * 2)` unread by hScale.
- 504 hold session lerp alpha as the literal `0.05`.

Numeral `137451921129154501`.
