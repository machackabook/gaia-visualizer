# STAGE-751 — Hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) assigned before switch (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Radii assignment (before switch):
  let major = 10 + (this.idx * 2);
  let minor = 3 + (state.toroidalWeave * 2);
- Assigned before switch(targetState.geometry). Major unread by gravityPull. Minor takes toroidalWeave.
- Hamiltonian ignores minor. Infinity scale = major * 1.5. Torus tube uses both. Triangular uses both.
- Paste not rewritten. No secrets.
- Prior holds remain: phi external (750), full kernel pin (749), lerp alpha (748), torus tube (747).

## Compiled next stages
1. 752 — hold theta step (0.01 + idx * 0.002) * gravityPull.
2. 753 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
