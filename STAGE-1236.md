# STAGE-1236 — hold phi external binding and minor radius usage across cases (2026-11-13 18:09Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1236 holding the phi external binding and minor radius usage across cases.

## Session pin (paste not rewritten)
- this.phi bound externally; not advanced inside update(t)
- let minor = 3 + (state.toroidalWeave * 2); used across cases:
  - infinity: y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
  - triangular: minor modulation on x/z and y
  - torus/default: tube = major + minor * Math.cos(this.phi); y = minor * Math.sin(this.phi) * ...
- Shared minor as secondary radius / lattice scale.
- prior holds: 1235 exclusive four-case switch.
- Paste not rewritten.

## Enhancement this hop
Holds the external phi binding and shared minor radius computation matching the connecting paste exactly. Living kernel uses the same. No additional geometry labels. No secrets. No device rooted.

## Next stages compiled
1. 1237 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry switch.
2. 1238 — hold env-check as pure tree-gate of README, stamp, and numeral only.
3. 1239 — hold lerp alpha 0.05 as sole final position commit after switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
