# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`  
**Stage:** `18`

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold. `GaiaNode.update(t, state, targetState)` is the living chat kernel. The verbatim `update(t)` from the current chat lives in `src/chatKernel.js` (`CHAT_KERNEL_SOURCE`). Stage-18 adds `evaluateChatKernel` plus `src/fidelity.js` so CPU `evaluateGeometry` can be checked against that contract for torus / infinity / hamiltonian / triangular.

```
this.material.uniforms.uTime.value = t;
this.material.uniforms.uGravity.value = state.gravityPull;
this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
// evaluate targetState.geometry → {x,y,z}
this.mesh.position.lerp(target, 0.05);
```

The target vector is reused (no `new THREE.Vector3` inside `update`). Node scale follows `gravityPull`.

On `hamiltoniansingularity.ai` the default geometry is `blend`.

Stage-12 wires the GLSL chat kernel through WebGL2 **transform-feedback** (`src/transformFeedback.js`). Stage-16 finishes TF coverage for all 31 CPU manifolds (`?tf=1&nodes=16384`). CPU mapping remains the reference. Stage-17 pins the in-chat kernel source so later fidelity tests can replay it. Stage-18 runs that replay in `sampleFidelity()`.

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

GPU TF ids (`KERNEL_GEOMETRY_ID`): torus 0 … superformula 30 (full set).

## Drive from the LLM / ledger / The-Hive

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
```

Query seeds:
- `?state={"geometry":"lorenz","gravityPull":1.2,"blend":0.7}`
- `?pulse=ws://localhost:3000`
- `?token=...`
- `?relay=` / `?peers=` — band-192 fan-out
- `?gpu=1` or `?nodes=4096` — packed Float32 + theta/phi buffers
- `?tf=1&nodes=16384` — transform-feedback path (stage-16)
- `?fidelity=1` — log stage-18 CPU vs chat-kernel sample report

See `STAGES.md`, `src/chatKernel.js`, `src/fidelity.js`, `src/geometry.js`, `src/Node.js`, `src/evaluateKernel.glsl.js`, `src/gpuBuffer.js`, `src/transformFeedback.js`.
