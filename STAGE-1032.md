# STAGE-1032 — hold torus/default tube (major + minor*cos(phi)) on x/z only; y shared with infinity (2026-11-03 14:07 CST)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- torus/default case:
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); // shared with infinity y
- prior holds: 1031 triangular floor snap to 2π/3 and y sector free of theta*5.

## Enhancement this hop
Holds the standard toroidal math as the default geometric state. Tube radius (major + minor*cos(phi)) applies to the x/z plane only. Y uses the same minor*sin(phi)*sin(t*0.5+idx) form as the infinity case. Living path matches. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1033 — hold lerp alpha literal 0.05 with session Vector3 allocation.
2. 1034 — hold phi external binding (referenced, never assigned in paste).
3. 1035 — hold theta increment (0.01 + idx * 0.002) * gravityPull before switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive / Cryptic-Heartbeat / hamiltonian-incursion stage pins advanced in parallel where applicable.
