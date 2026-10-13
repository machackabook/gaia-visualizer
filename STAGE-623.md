# Stage 623 — hold torus default fallthrough (2026-10-13)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- torus and default share the tube body. No separate torus body.
- Prior holds remain: triangular tAngle floor snap (622), hamiltonian hScale = major (621).
- Paste not rewritten. No secrets.

## Compiled next stages (624+)
1. 624 — hold lemniscate denom shared by x and z (1 + sin(theta)^2).
2. 625 — hold lerp alpha 0.05 and session Vector3 allocation.
3. 626 — hold major = 10 + (idx * 2) assigned before switch.

Numeral 137451921129154222.
