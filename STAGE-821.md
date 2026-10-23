# Stage 821 — hold triangular floor snap and y sector free of theta*5 (2026-10-23 16:10 CDT)

Connecting chat re-pasted the complete `update(t)` function. Prior hop 820 held hamiltonian hScale = major and y lift sin(t)*2.

## Session pin
- Full kernel held exactly as pasted: uniforms uTime then uGravity; theta step (0.01 + idx*0.002)*gravityPull; major=10+(idx*2); minor=3+(toroidalWeave*2); switch on targetState.geometry with infinity / hamiltonian / triangular / torus|default; lerp alpha 0.05 with new Vector3.
- Triangular: tAngle = floor(theta / (2π/3)) * (2π/3); x/z = major*cos/sin(tAngle) + minor*cos/sin(theta*5); y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor.
- Floor snap is modulo-based to 2π/3. Y sector free of theta*5. Ripple uses minor and sin(t). Major scales the sector.
- Phi referenced but never assigned inside paste. No secrets. Paste not rewritten.
- Prior holds remain: hamiltonian (820), infinity (819), uniforms/theta/major-minor/switch (earlier).

## Compiled next stages
1. 822 — hold torus/default tube on x/z only; y shared with infinity.
2. 823 — hold full kernel pin and major/minor pre-switch assignment.
3. 824 — hold lerp alpha 0.05 and Vector3 allocation as session source.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine.
