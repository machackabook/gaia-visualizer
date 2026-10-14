# Stage 638 — hold major/minor before switch (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- major/minor held exactly as:
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
- Assigned after theta step, before the geometry switch. No modulo on idx for major.
- Paste not rewritten. No secrets.
- Prior holds remain: lerp allocation (637), theta step (636), shared y tube (635), torus x/z tube (634), triangular sector (633), hamiltonian lift (632), infinity denom (631).

## Compiled next stages
1. 639 — hold uniforms write order uTime then uGravity.
2. 640 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.
3. 641 — hold y formula identical on infinity and torus (shared tube).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
