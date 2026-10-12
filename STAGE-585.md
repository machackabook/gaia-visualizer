# Stage 585 — hold uniforms uTime then uGravity as sole material writes (2026-10-11 19:12 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity` written first: uTime = t then uGravity = state.gravityPull
- `theta += (0.01 + idx * 0.002) * gravityPull`
- major and minor before switch
- four-case switch only
- session hash `beec41f1`. Living hash `7cd81012`.

## Enhancement this hop
Pins the sole material uniform writes at the top of update(t): this.material.uniforms.uTime.value = t; then this.material.uniforms.uGravity.value = state.gravityPull. Does not rewrite the paste or add uniforms.

- order held: uTime then uGravity
- sole writes in session paste; living path may add optional uWeave/uBlend/uEnergy
- no extra cases invented
- paste not rewritten

## Next
- 586 hold final lerp session allocates Vector3 alpha 0.05
- 587 hold switch sole four-case dispatch

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
