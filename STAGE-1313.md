# STAGE-1313 — hold switch(targetState.geometry) sole four-case dispatcher (infinity, hamiltonian, triangular, torus/default) (2026-11-18T04:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1313 holding the sole four-case switch dispatcher.

## Session pin (paste not rewritten)
- switch(targetState.geometry) {
        case 'infinity':
            // Lemniscate of Bernoulli mathematical mapping
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
        case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;
        case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }
- Sole four-case dispatcher. Default shares torus case. No fifth case. Prior holds: 1312 uniforms order uTime then uGravity and theta step product (0.01 + idx*0.002)*gravityPull.
- Paste not rewritten.

## Enhancement this hop
Holds that the switch(targetState.geometry) is the sole dispatcher for the four geometries (infinity, hamiltonian, triangular, torus/default). Living path matches the session paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1314 — hold infinity lemniscate of Bernoulli: scale=major*1.5, denom=1+sin(theta)^2 shared by x/z only, y free of denom.
2. 1315 — hold hamiltonian parametric vertex traversal (theta*3) on spherical grid with y offset sin(t)*2.
3. 1316 — hold triangular modulo-based snapping to 3D tetrahedron/triangular lattice with tAngle floor and y sector (idx%3-1)*major*0.5.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
