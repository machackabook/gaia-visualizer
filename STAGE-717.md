# Stage 717 — hold triangular floor snap to 2π/3 and y sector free of theta*5 on y (2026-10-20)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default
- session paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1` held. Living hash `7cd81012` held.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only (not in the session switch).

## Enhancement this hop
Triangular case holds:

```js
const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
```

- Floor snap `tAngle = floor(theta / (2π/3)) * (2π/3)` used only for the major lattice vertex (cos/sin of tAngle).
- Minor ripple `theta * 5` stays on x and z only.
- Y sector is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor` — free of `theta * 5` and free of the floor snap.
- Checker `noteSessionTriangularFloor` (src/sessionTriangularFloor.js) now confirms `yFreeOfTheta5` and stage advanced to 717.
- Paste not rewritten. No session case added. Extras remain off the switch.

## Next
- 718 hold torus/default tube radius (major + minor * cos(phi)) on x/z only; y shared infinity formula.
- 719 hold lerp alpha 0.05 and new THREE.Vector3 allocation in session paste.
- Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` (14, ongoing).

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
