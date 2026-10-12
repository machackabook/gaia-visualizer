# Stage 593 — hold hamiltonian hScale = major (2026-10-11 22:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- hamiltonian case: const hScale = major;
- x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
- z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
- y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- hScale does not multiply the time lift
- session hash `beec41f1`. Living hash `7cd81012`.

## Enhancement this hop
Pins the Hamiltonian parametric scale as hScale = major (no 1.5 multiplier). Vertex traversal mapping held. Independent y lift sin(t)*2 held. Does not rewrite the paste.

- hScale = major
- parametric cos(theta*3) * cos/sin(theta) for x/z
- y = hScale * sin(theta*3) + sin(t)*2
- no extra cases invented
- paste not rewritten

## Next
- 594 hold triangular tAngle floor snap and *5 weave
- 595 hold torus tube (major + minor * cos(phi))

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
