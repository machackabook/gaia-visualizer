# Stage 518 — hold gravityPull as the theta-step multiplier only (2026-10-09 10:16 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- theta step stays `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull`.
- the same `state.gravityPull` is copied into `uGravity` and is not read by the geometry arms.
- prior holds remain: lemniscate scale unread by minor (515), lerp alpha literal 0.05 (516), theta as the only angle write (517).

## Enhancement this hop
- checker: `noteSessionGravityPullThetaMultiplier` in `src/sessionGravityPullThetaMultiplier.js`, compiled by `compileSessionStage518`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 519 hold phi read-only in the session paste.
- 520 hold idx term inside the theta step only.

Numeral `137451921129155518`.
