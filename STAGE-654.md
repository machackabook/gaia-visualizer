# Stage 654 — hold torus/default tube on x/z and shared y with infinity (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus / default:
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube on x/z only (major + minor * cos(phi)) * cos/sin(theta). Y shared identically with infinity: minor * sin(phi) * sin(t*0.5 + idx).
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor (653), hamiltonian (652), infinity (651).

## Compiled next stages
1. 655 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.
2. 656 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.
3. 657 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
