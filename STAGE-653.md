# Stage 653 — hold triangular floor snap and y sector free of theta*5 on y (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- triangular (modulo floor lattice):
    const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
    x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
    y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap tAngle to 2π/3 sectors. X/Z take major * cos/sin(tAngle) + minor * cos/sin(theta*5). Y is sector (idx % 3 - 1) * major * 0.5 + sin(t) * minor; free of theta*5.
- Paste not rewritten. No secrets.
- Prior holds remain: hamiltonian parametric (652), infinity lemniscate (651).

## Compiled next stages
1. 654 — hold torus/default tube on x/z and shared y with infinity.
2. 655 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.
3. 656 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
