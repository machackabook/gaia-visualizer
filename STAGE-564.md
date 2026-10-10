# Stage 564 — hold phi read-only in infinity and torus y formulas (2026-10-10 18:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity y: `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);`
- torus y: identical shared tube formula. Phi is read, never written in the session paste.
- hamiltonian and triangular do not read phi in the four-case switch.
- prior holds: 563 four-case switch, 562 radii before switch.

## Enhancement this hop
- phi remains read-only in the shared y formulas for infinity and torus. No phi += in session kernel.
- paste not rewritten. No secrets. Extras stay runtime-only.

## Next
- 565 hold infinity scale = major * 1.5 and shared Bernoulli denom.
- 566 hold hamiltonian hScale = major and independent y lift `sin(t)*2`.
- 567 hold triangular modulo snap unread by the *5 weave.

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154564`.
