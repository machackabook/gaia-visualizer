# Stage 495 — hold shared y tube identical on infinity and torus, unread by tube radius (2026-10-08 11:08 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- shared y: `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);`
- that line is identical on infinity and torus/default.
- it does not read tube radius `(major + minor * Math.cos(this.phi))`.
- torus still applies that tube radius to x and z only.
- infinity x/z still use lemniscate scale and denom, not the tube radius.
- prior hold remains: triangular tAngle snap is unread by the theta*5 weave.

## Enhancement this hop
- checker: `noteSessionSharedYUnread` in `src/sessionSharedYUnread.js`, compiled by `compileSessionStage495`.
- stage 478 still holds the shared tube against hamiltonian and triangular. This hop adds the unread-by-tube-radius check.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 496 hold theta step as `(0.01 + idx * 0.002) * gravityPull`.
- 497 hold lerp alpha as the literal 0.05.
- 498 hold lemniscate scale as `major * 1.5`, unread by minor.

Numeral `137451921129154495`.
