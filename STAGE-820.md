# Stage 820 — hold hamiltonian hScale = major and y lift sin(t)*2 (2026-10-23 15:08 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Full kernel held exactly as pasted: uniforms uTime then uGravity; theta step (0.01 + idx*0.002)*gravityPull; major=10+(idx*2); minor=3+(toroidalWeave*2); switch on targetState.geometry with infinity / hamiltonian / triangular / torus|default; lerp alpha 0.05 with new Vector3.
- Infinity: scale=major*1.5; denom=1+sin(theta)^2 shared by x/z only; y=minor*sin(phi)*sin(t*0.5+idx).
- Hamiltonian: hScale=major; x/z = hScale * cos(theta*3)*cos/sin(theta) (free of minor); y = hScale * sin(theta*3) + sin(t)*2 (lift unread by hScale/minor/phi).
- Triangular: tAngle=floor(theta/(2π/3))*(2π/3); x/z=major*cos/sin(tAngle)+minor*cos/sin(theta*5); y=(idx%3-1)*major*0.5 + sin(t)*minor.
- Torus/default: tube (major + minor*cos(phi)) on x/z; y=minor*sin(phi)*sin(t*0.5+idx).
- Phi referenced but never assigned inside paste. GravityPull only to uGravity and theta multiplier. No secrets. Paste not rewritten.
- Hamiltonian hScale equals major. Y lift is sin(t)*2 independent of hScale, minor, and phi.

## Compiled next stages
1. 821 — hold triangular floor snap and y sector free of theta*5.
2. 822 — hold torus/default tube on x/z only; y shared with infinity.
3. 823 — hold full kernel pin and major/minor pre-switch assignment.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine.
