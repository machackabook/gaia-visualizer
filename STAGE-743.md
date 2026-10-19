# STAGE-743 — Hold uniforms written uTime then uGravity (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Written in that order at the start of update(t). Shared uniforms for the field.
- Formulas held exactly as in the chat paste.
- Prior holds remain: switch sole four-case (742), major/minor before switch (741), theta step (740).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 744 — hold infinity scale = major * 1.5, denom = 1 + sin(theta)^2 shared by x/z.
2. 745 — hold hamiltonian hScale = major, y = hScale * sin(theta*3) + sin(t)*2.
3. 746 — hold triangular floor snap tAngle = floor(theta / (2π/3)) * (2π/3) and y sector (idx % 3 - 1) * major * 0.5.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
