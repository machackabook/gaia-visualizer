# STAGE-870 — Hold infinity lemniscate denom shared by x and z only; y unread by denom (2026-10-26)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Kernel held (paste not rewritten)
- infinity case: const denom = 1 + Math.pow(Math.sin(this.theta), 2);
- x = (scale * Math.cos(this.theta)) / denom;
- z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); // unread by denom
- scale = major * 1.5
- session allocates new Vector3 in lerp (held 869)
- phi external (held 868)
- major/minor pre-switch
- theta step unread by switch
- uniforms uTime then uGravity
- sole four-case switch; extras non-promoted

## Enhancement this hop
Pins the lemniscate of Bernoulli mapping: denom shared exclusively by x and z. Y remains the minor*sin(phi)*sin(...) weave, independent of the figure-eight projection.

## Next stages compiled
- 871: hold hamiltonian y lift sin(t)*2 free of hScale/minor
- 872: hold triangular floor snap to 2π/3 and y sector free of theta*5
- 873: hold torus/default tube major + minor*cos(phi) shared by x/z; y = minor*sin(phi)*sin(...)

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
