# Stage 499 — hold default as sharing the torus tube, not a fifth session case (2026-10-08 16:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- arm: `case 'torus':` then `default:` with no statements between them.
- shared body: `x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta)`
- shared body: `z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta)`
- shared body: `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`
- `default` is not a case label and is not a fifth geometry.
- sample: major 10, minor 3, phi 0, theta 0 keeps x `13`, y `0`, z `0`, `fifthCase` false.
- prior hold remains: infinity scale is `major * 1.5`, unread by minor.

## Enhancement this hop
- checker: `noteSessionDefaultSharesTorus` in `src/sessionDefaultSharesTorus.js`, compiled by `compileSessionStage499`.
- band: `compileSessionStages498to499` in `src/sessionStage499.js`.
- stage 372 still holds torus fallthrough. This hop pins the re-pasted shared tube and the four-label switch.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 500 hold phi still: the session paste does not increment phi.
- 501 hold infinity y as the shared tube, unread by scale.
- 502 hold triangular tAngle unread by the theta * 5 weave.

Numeral `137451921129154499`.
