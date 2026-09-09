# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`  
**Stage:** `12`

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold. `GaiaNode.update(t, state, targetState)` is the living chat kernel:

```
this.material.uniforms.uTime.value = t;
this.material.uniforms.uGravity.value = state.gravityPull;
this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
// evaluate targetState.geometry → {x,y,z}
this.mesh.position.lerp(target, 0.05);
```

The target vector is reused (no `new THREE.Vector3` inside `update`). Node scale follows `gravityPull`.

On `hamiltoniansingularity.ai` the default geometry is `blend`.

Stage-12 wires the GLSL chat kernel through WebGL2 **transform-feedback** (`src/transformFeedback.js`) so torus / infinity / hamiltonian / triangular can step on the GPU past 8k nodes (`?tf=1&nodes=16384`). CPU mapping remains the reference for every other manifold.

| `targetState.geometry` | Mapping | Keys |
|------------------------|---------|------|
| `torus` (default) | Standard toroidal weave | 1 |
| `infinity` | Lemniscate of Bernoulli | 2 |
| `hamiltonian` | Vertex-favoring spherical grid traversal | 3 |
| `triangular` | Modulo snap to tetrahedral / triangular lattice | 4 |
| `helix` | Gravity-wound helical climb | 5 |
| `mobius` | One-sided strip | 6 |
| `lissajous` | Coupled harmonic lattice | 7 |
| `klein` | Immersed Klein bottle | 8 |
| `hopf` | Hopf fibration fibers on S3 | 9 |
| `rose` | Polar rhodonea | 0 |
| `seifert` | (p,q) Seifert fibered torus knot | q |
| `blend` | Hamiltonian ↔ Klein singularity mix | w |
| `trefoil` | (2,3) torus knot | e |
| `stereo` | Stereographic chart of S2 | r |
| `clifford` | Clifford torus in S3 → R3 | t |
| `enneper` | Truncated Enneper minimal surface | y |
| `gyroid` | Gyroids sampled on a toroidal chart | u |
| `calabi` | 6-torus toy projection | i |
| `figure8` | 3D lemniscate tube | o |
| `villarceau` | Interlocking Villarceau circles on a torus | p |
| `boy` | Boy surface (RP2 immersion) | a |
| `catenoid` | Catenoid ↔ helicoid associate family | s |
| `dini` | Dini surface (twisted constant-curvature) | d |
| `roman` | Steiner Roman surface | f |
| `hyperbolic` | One-sheet hyperboloid | g |
| `scherk` | Scherk first minimal surface | h |
| `knot` | (3,5) torus knot | j |
| `pseudosphere` | Tractrix of revolution | k |
| `cassini` | Cassini oval (lemniscate sibling) | l |
| `lorenz` | Lorenz attractor sample | z |
| `superformula` | Gielis superformula polar chart | x |

Uniforms: `uTime`, `uGravity`, `uColor` (ShaderMaterial). State: `gravityPull`, `toroidalWeave`, `lerp`, `blend`.

## Drive from the LLM / ledger / The-Hive

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'cassini', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
```

Query seeds:
- `?state={"geometry":"lorenz","gravityPull":1.2,"blend":0.7}`
- `?pulse=ws://localhost:3000`
- `?token=...`
- `?relay=` / `?peers=` — band-192 fan-out
- `?gpu=1` or `?nodes=4096` — packed Float32 + theta/phi buffers
- `?tf=1&nodes=16384` — stage-12 transform-feedback path

## Stages

**Done**
1–9. Kernel extract through scherk / knot / pseudosphere.
10. Peer fan-out + packed GPU attribute buffer; node cap 8192.
11. GLSL chat-kernel evaluate (`evaluateKernel.glsl.js`); theta/phi packed; cassini / lorenz / superformula. CPU mapping remains reference.
12. WebGL2 transform-feedback for the four chat geometries; node cap 16384 (`?tf=1`).

**Next**
13. Authenticated live `ledger_pulse.py` → Hive WS against live sheet counts.
14. Memory engrams into Drive `CRYPTIC-HEARTBEAT-NEXUS-ROOT`.
15. Expand the TF kernel beyond the four chat geometries (helix → superformula).

See `src/geometry.js`, `src/Node.js`, `src/evaluateKernel.glsl.js`, `src/gpuBuffer.js`, `src/transformFeedback.js`.
