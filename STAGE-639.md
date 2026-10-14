# Stage 639 — hold uniforms order (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- uniforms held exactly as:
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
- Written first in update(t), before theta step, major/minor, and switch.
- No nullish coalescing in pure session paste (direct state.gravityPull).
- Paste not rewritten. No secrets.
- Prior holds remain: major/minor (638), lerp allocation (637), theta step (636), shared y tube (635), torus x/z tube (634), triangular sector (633), hamiltonian lift (632), infinity denom (631).

## Compiled next stages
1. 640 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.
2. 641 — hold y formula identical on infinity and torus (shared tube).
3. 642 — hold infinity scale = major * 1.5 and denom = 1 + Math.pow(Math.sin(this.theta), 2).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
