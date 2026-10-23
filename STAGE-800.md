# STAGE-800 — Hold hamiltonian parametric mapping (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Hamiltonian case: parametric mapping favoring vertex traversal.
- hScale = major.
- x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
- z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
- y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- Phi and minor unread on this arm. Lift amplitude 2 independent of hScale.
- Session paste still allocates `new THREE.Vector3` inside lerp with alpha 0.05. Living path keeps no-alloc lerp.
- Paste not rewritten. No secrets.
- Prior holds remain: infinity lemniscate (799), switch sole four-case (798), major/minor before switch (797).

## Enhancement this hop
Pins the session hamiltonian parametric mapping. Holds the shared rose on xz and the lift unread by minor/phi/hScale.

- hScale = major
- rose factor cos(theta * 3) on xz only
- y lift sin(t) * 2 free of scale/minor/phi
- paste not rewritten

## Compiled next stages
1. 801 — hold triangular floor snap and y sector.
2. 802 — hold torus/default tube radius shared by xz and shared y.
3. 803 — hold theta step and gravityPull multiplier.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
