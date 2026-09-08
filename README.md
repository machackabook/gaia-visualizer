# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`  
**Stage:** `9`

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold. `GaiaNode.update(t, state, targetState)` advances theta/phi with gravity and lerps onto `evaluateGeometry(...)`. The per-frame target vector is reused (no `new THREE.Vector3` inside `update`). Node scale follows `gravityPull`.

The original chat `update(t)` switch (`infinity` lemniscate, `hamiltonian`, `triangular`, `torus` default + lerp 0.05) remains the reference kernel.

On `hamiltoniansingularity.ai` the default geometry is `blend`.

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

Uniforms: `uTime`, `uGravity`, `uColor` (ShaderMaterial). State: `gravityPull`, `toroidalWeave`, `lerp`, `blend`.

## Drive from the LLM / ledger / The-Hive

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'scherk', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
window.dispatchEvent(new CustomEvent('gaia:pulse', { detail: { pulse: 1.8 } }));

const bc = new BroadcastChannel('gaia-weave');
bc.postMessage({ type: 'gaia:targetState', geometry: 'knot', gravityPull: 1.6 });
```

Query seeds:
- `?state={"geometry":"pseudosphere","gravityPull":1.2,"blend":0.7}`
- `?pulse=ws://localhost:3000` — Hive WS frames `{type:"gaia:pulse",pulse}` or a full contract.
- `?token=...` — when set, incoming pulse/contract frames must carry the same token.
- `?relay=http://localhost:3000/api/gaia/positions` — POST `gaia:positions` for 192-network fan-out.
- `?nodes=256` or `?instanced=1` — InstancedMesh path (auto above 48 nodes).

## Stages

**Done**
1–8. Kernel extract through dini / roman / hyperbolic.
9. Stage-9: `scherk` / `knot` / `pseudosphere`; Hamiltoniansingularity.ai defaults to `blend`; positions relay remains the 192-network path.

**Next**
10. Tailscale peer fan-out of `gaia:positions` (192-network) via Hive `/api/gaia/positions`.
11. GPU attribute buffer / compute path for >8k nodes.
12. Authenticated live `ledger_pulse.py` → Hive WS (token already on the wire).

See `src/geometry.js`, `src/Node.js`, `src/shaders.js`, `src/pulse.js`.
