# STAGE-1025 — hold uniforms uTime and uGravity assignment at start of update(t) (2026-11-03 10:09 CST)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Order held: uTime then uGravity. Sole material writes at the start of the function, before theta step.
- prior holds: 1024 theta step product (0.01 + idx * 0.002) * gravityPull unread by geometry switch.

## Enhancement this hop
Holds the uniforms assignment order and placement at the beginning of update(t). Sources are the function parameter t and state.gravityPull respectively. Living path matches. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1026 — hold major/minor declarations before switch (major = 10 + idx*2, minor = 3 + toroidalWeave*2).
2. 1027 — hold full session kernel integrity across all four geometries and lerp.
3. 1028 — hold phi external binding unread inside paste assignment.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
