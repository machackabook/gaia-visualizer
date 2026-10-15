# Stage 640 — hold phi unused in hamiltonian/triangular (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- phi is referenced only in shared y tube formulas for infinity and torus cases: `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`.
- No `this.phi +=` or mutation of phi appears in the session paste.
- Hamiltonian and triangular cases do not reference phi.
- Paste not rewritten. No secrets.
- Prior holds remain: uniforms order (639), major/minor (638), lerp allocation (637), theta step (636), shared y tube (635).

## Compiled next stages
1. 641 — hold y formula identical on infinity and torus (shared tube).
2. 642 — hold infinity scale = major * 1.5 and denom = 1 + Math.pow(Math.sin(this.theta), 2).
3. 643 — hold triangular tAngle floor snap to 2π/3 sectors with raw theta*5 ripple.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
