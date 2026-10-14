# Stage 629 — hold major/minor assignment before switch unread by pull (2026-10-14)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- major and minor assigned once before switch(targetState.geometry):
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
- unread by the pull step itself. Used inside cases. Hamiltonian ignores minor. Infinity scale uses major * 1.5. Hamiltonian hScale = major.
- Prior holds remain: lerp alpha 0.05 + Vector3 alloc (628), hamiltonian y lift (627), torus y shared (626).
- Paste not rewritten. No secrets.

## Compiled next stages (630+)
1. 630 — hold uniforms uTime then uGravity as sole material writes.
2. 631 — hold theta step (0.01 + idx * 0.002) * gravityPull.
3. 632 — hold switch as sole four-case dispatch with default torus fallthrough.

Numeral 137451921129154222.
