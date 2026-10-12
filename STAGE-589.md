# Stage 589 — hold major = 10 + (idx * 2) before switch (2026-10-11 21:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity` written first
- `theta += (0.01 + this.idx * 0.002) * state.gravityPull`
- `let major = 10 + (this.idx * 2);` assigned before switch
- `let minor = 3 + (state.toroidalWeave * 2);` also before switch
- switch(targetState.geometry): infinity | hamiltonian | triangular | torus (default shares torus tube)
- infinity: scale = major * 1.5, denom shared by x and z
- hamiltonian: hScale = major, y lift independent
- triangular: tAngle floor, y sector by idx % 3
- torus: (major + minor * cos(phi))
- final lerp alpha 0.05 (session allocates Vector3)
- session hash `beec41f1`. Living hash `7cd81012`.
- Living path reuses `_kernelTarget`. Session paste still allocates.

## Enhancement this hop
Pins the session major radius assignment `major = 10 + (this.idx * 2)` before the geometry switch. Used by infinity scale, hamiltonian hScale, triangular lattice, and torus tube. Does not rewrite the paste and does not add a session case.

- major assigned once before switch(targetState.geometry)
- form held as 10 + (idx * 2)
- no extra cases invented
- paste not rewritten

## Next
- 590 hold minor = 3 + (toroidalWeave * 2) before switch
- 591 hold infinity scale = major * 1.5

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
