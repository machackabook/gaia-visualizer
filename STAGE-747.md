# STAGE-747 — Hold torus tube radius shared by x/z (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'torus':
default:
    // Standard Toroidal Math
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
    break;
- Tube radius (major + minor * cos(phi)) shared by x and z only. Y is minor * sin(phi) * sin(t * 0.5 + idx).
- Formulas held exactly as in the chat paste.
- Prior holds remain: triangular floor snap (746), hamiltonian hScale (745), infinity scale/denom (744).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 748 — hold lerp new THREE.Vector3(x, y, z) alpha 0.05.
2. 749 — hold full update(t) kernel as pinned session source of truth.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
