# STAGE-737 — Hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'torus':
  default:
    // Standard Toroidal Math
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only.
- Y formula shared with infinity y. Phi external/unread in paste.
- Formulas held exactly as in the chat paste.
- Prior holds remain: triangular (736), hamiltonian (735), infinity (734).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 738 — hold lerp new THREE.Vector3(x, y, z) alpha 0.05.
2. 739 — hold phi unread (no assignment in paste).
3. 740 — hold theta step (0.01 + idx * 0.002) * gravityPull before switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
