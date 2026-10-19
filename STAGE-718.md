# STAGE-718 — Hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity formula (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus / default case:
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only. Y uses the infinity-style formula (minor * sin(phi) * sin(...)). Phi is external (unread/assigned outside paste).
- Prior holds remain: triangular sector floor 2π/3 and y lane (717), hamiltonian hScale = major (716), infinity denom shared x/z only (715), switch sole four-case (714), major/minor before switch (713), uniforms order uTime then uGravity (712), theta step (711).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 719 — hold lerp alpha 0.05 and session new Vector3 allocation (living reuses _kernelTarget).
2. 720 — hold phi unread (no assignment in session paste).
3. 721 — hold full update(t) kernel as pinned session source; living path may optimize allocations.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos / continuity-ledger-cycle / living-bibliography-continuity-engine stage pins advanced in parallel where applicable.
