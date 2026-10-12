# Stage 594 — hold triangular tAngle floor snap and *5 weave (2026-10-11 22:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- triangular case: const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
- x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
- z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- floor snap unread by the *5 weave
- session hash `beec41f1`. Living hash `7cd81012`.

## Enhancement this hop
Pins the triangular lattice modulo-based floor snap to 2π/3 sectors and the independent *5 weave on x/z. Y sector by idx%3 held separate. Does not rewrite the paste.

- tAngle floor snap to Math.PI * 2 / 3
- *5 weave on minor terms for x/z only
- y sector (idx % 3 - 1) * major * 0.5 + sin(t) * minor
- no extra cases invented
- paste not rewritten

## Next
- 595 hold torus default fallthrough and tube radii
- 596 hold final lerp session allocates Vector3 alpha 0.05

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
