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
| `mobius` | One-sided strip (next-stage surface) |

Uniforms: `uTime`, `uGravity`. State: `gravityPull`, `toroidalWeave`, `lerp`.

## Drive from the LLM / ledger

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05 }
}));
window.dispatchEvent(new CustomEvent('gaia:pulse', { detail: { pulse: 1.8 } }));
```

Or seed via query: `?state={"geometry":"infinity","gravityPull":1.2}`

## Next stages

1. The-Hive / Gemini-Nexus-OS emit the contract above (in motion).
2. Cryptic-Heartbeat ledger pulse maps onto `gaia:pulse`.
3. Stream positions on band-192-network to Tailscale peers.
4. Hamiltonian singularity surface at Hamiltoniansingularity.ai.

See `src/geometry.js`, `src/Node.js`, `src/pulse.js`.
