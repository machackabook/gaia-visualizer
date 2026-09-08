# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`  
**Stage:** `5`

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold. `GaiaNode.update(t, state, targetState)` advances theta with gravity and lerps onto `evaluateGeometry(...)`. The per-frame target vector is reused (no `new THREE.Vector3` inside `update`).

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

Uniforms: `uTime`, `uGravity`, `uColor` (ShaderMaterial). State: `gravityPull`, `toroidalWeave`, `lerp`, `blend`.

## Drive from the LLM / ledger / The-Hive

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'clifford', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
window.dispatchEvent(new CustomEvent('gaia:pulse', { detail: { pulse: 1.8 } }));

const bc = new BroadcastChannel('gaia-weave');
bc.postMessage({ type: 'gaia:targetState', geometry: 'hopf', gravityPull: 1.6 });

const pos = new BroadcastChannel('gaia-positions');
pos.onmessage = (ev) => console.log(ev.data.band, ev.data.nodes.length);
```

Query seeds:
- `?state={"geometry":"blend","gravityPull":1.2,"blend":0.7}`
- `?pulse=ws://localhost:3000` — Hive WS frames `{type:"gaia:pulse",pulse}` or a full contract.
- `?token=...` — when set, incoming pulse/contract frames must carry the same token.
- `?relay=http://localhost:3000/api/gaia/positions` — POST `gaia:positions` for 192-network fan-out.
- `?nodes=256` or `?instanced=1` — InstancedMesh path (auto above 48 nodes).

## Stages

**Done**
1. Extract `update()` into `evaluateGeometry` + `GaiaNode` (torus / infinity / hamiltonian / triangular).
2. The-Hive `geometryContract.ts` + `POST /api/gaia/contract` + WS `gaia:targetState`.
3. Stage-2 surfaces: helix, mobius, lissajous, klein.
4. Stage-3: hopf, rose, seifert, hamiltonian↔klein `blend`; ShaderMaterial uniforms; `gaia-positions` stream on band-192-network.
5. Stage-4: InstancedMesh for >48 nodes; `trefoil` / `stereo`; optional pulse token; HTTP position relay.
6. Stage-5: `clifford` (S3 Clifford torus projected); reused lerp target; HUD stage-5.

**Next**
7. Cryptic-Heartbeat / TheLedgerIndex pulse → authenticated `gaia:pulse` frames (shared token already wired).
8. Tailscale peer fan-out of `gaia:positions` (192-network) via Hive `/api/gaia/positions`.
9. Hamiltonian singularity surface at Hamiltoniansingularity.ai (serve `blend` as default).
10. GPU attribute buffer / compute path for >8k nodes.

See `src/geometry.js`, `src/Node.js`, `src/shaders.js`, `src/pulse.js`.
