# Stage 556 — hold infinity lemniscate of Bernoulli (scale, denom, x/z) (2026-10-10 15:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- case 'infinity': const scale = major * 1.5; const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);  // y independent of scale/denom
- denom never zero; lemniscate closed form preserved

## Enhancement this hop
- infinity arm held exactly as session paste. Scale factor 1.5 and Bernoulli denom pinned.
- paste not rewritten. No fifth case. No secrets.

## Next
- 557 hold hamiltonian parametric vertex traversal
- 558 hold triangular tAngle floor snap and lattice
- 559 hold torus tube (major + minor * cos(phi))

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`.
