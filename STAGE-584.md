# Stage 584 — hold theta step (0.01 + idx * 0.002) * gravityPull (2026-10-11 19:12 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity` written first
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + (idx * 2)`, `minor = 3 + (toroidalWeave * 2)` assigned before switch
- four-case switch: infinity | hamiltonian | triangular | torus (default shares torus)
- session hash `beec41f1`. Living hash `7cd81012`.

## Enhancement this hop
Pins the session theta advancement `(0.01 + this.idx * 0.002) * state.gravityPull`. Does not rewrite the paste.

- theta step held as base 0.01 + idx*0.002 scaled by gravityPull
- applied after uniforms, before major/minor and switch
- no extra cases invented
- paste not rewritten

## Next
- 585 hold uniforms uTime then uGravity as sole material writes
- 586 hold final lerp session allocates Vector3 alpha 0.05

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
