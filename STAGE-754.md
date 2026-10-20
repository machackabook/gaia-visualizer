# STAGE-754 — Hold switch(targetState.geometry) as sole four-case dispatch (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Switch dispatch:
  switch(targetState.geometry) {
    case 'infinity':
    case 'hamiltonian':
    case 'triangular':
    case 'torus':
    default: // shares torus tube
  }
- Sole four-case. default is not a fifth case. Paste not rewritten. No secrets.
- Prior holds remain: uniforms order (753), theta step (752), major/minor before switch (751), phi external (750).

## Compiled next stages
1. 755 — hold infinity lemniscate denom shared by x/z only; y unread by denom.
2. 756 — hold hamiltonian hScale = major; y lift sin(t)*2 unread by hScale/minor/phi.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
