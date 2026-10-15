# Stage 650 — hold switch(targetState.geometry) as sole four-case dispatch (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- switch is sole four-case dispatch:
    switch(targetState.geometry) {
        case 'infinity':
        case 'hamiltonian':
        case 'triangular':
        case 'torus':
        default:
    }
- Exactly four session geometries. Default falls through to torus. No extra cases in the session paste. Runtime extras remain off-session.
- Paste not rewritten. No secrets.
- Prior holds remain: uniforms order uTime then uGravity (649), major/minor pre-switch (648), theta step (647).

## Compiled next stages
1. 651 — hold infinity lemniscate denom shared by x and z only.
2. 652 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2.
3. 653 — hold triangular floor snap and y sector free of theta*5 on y.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
