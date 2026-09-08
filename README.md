# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold.

| `targetState.geometry` | Mapping |
|------------------------|---------|
| `torus` (default) | Standard toroidal weave |
| `infinity` | Lemniscate of Bernoulli |
| `hamiltonian` | Vertex-favoring spherical grid traversal |
| `triangular` | Modulo snap to tetrahedral / triangular lattice |
| `helix` | Gravity-wound helical climb |
| `mobius` | One-sided strip |
| `lissajous` | Coupled harmonic lattice (stage-2) |
| `klein` | Immersed Klein bottle (stage-2 surface) |

Uniforms: `uTime`, `uGravity`. State: `gravityPull`, `toroidalWeave`, `lerp`.

`GaiaNode.update(t, state, targetState)` is the live evaluator: theta advances with gravity, position lerps onto `evaluateGeometry(...)`.

## Drive from the LLM / ledger / The-Hive

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05 }
}));
window.dispatchEvent(new CustomEvent('gaia:pulse', { detail: { pulse: 1.8 } }));

const bc = new BroadcastChannel('gaia-weave');
bc.postMessage({ type: 'gaia:targetState', geometry: 'klein', gravityPull: 1.6 });
```

Query seeds:
- `?state={"geometry":"infinity","gravityPull":1.2}`
- `?pulse=ws://localhost:3000` — Hive WS frames `{type:"gaia:pulse",pulse}` or a full contract.

## Next stages (compiled)

1. The-Hive `geometryContract.ts` + `POST /api/gaia/contract` + WS `gaia:targetState` (wired).
2. Cryptic-Heartbeat ledger pulse → `gaia:pulse` / BroadcastChannel `gaia-weave`.
3. Stream node positions on band-192-network to Tailscale peers.
4. Hamiltonian singularity surface at Hamiltoniansingularity.ai (klein + hamiltonian blend).
5. Shared shader uniforms (`uTime`, `uGravity`) for a custom ShaderMaterial pass.

See `src/geometry.js`, `src/Node.js`, `src/pulse.js`.
