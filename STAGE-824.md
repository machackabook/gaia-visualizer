# Stage 824 — living path may reuse Vector3 target while session paste keeps new allocation (2026-10-23 18:07 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Final lerp: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)
- Session paste allocates a new THREE.Vector3 on every update. Alpha is the literal 0.05.
- Living path may optimize with a reused scratch Vector3 (_kernelTarget or similar) without altering the mathematical mapping or control flow.
- Phi unread. No secrets. Paste not rewritten.

## Compiled next stages
1. 825 — hold infinity lemniscate scale = major * 1.5 and denom shared by x/z only; y shared with torus.
2. 826 — hold hamiltonian hScale = major; y lift sin(t)*2 unread by hScale/minor/phi.
3. 827 — hold triangular floor snap to 2π/3 and y sector free of theta*5.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine.
