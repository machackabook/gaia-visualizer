# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold:

| `targetState.geometry` | Mapping |
|------------------------|---------|
| `torus` (default) | Standard toroidal weave |
| `infinity` | Lemniscate of Bernoulli |
| `hamiltonian` | Vertex-favoring spherical grid traversal |
| `triangular` | Modulo snap to tetrahedral / triangular lattice |

Uniforms: `uTime`, `uGravity`. State: `gravityPull`, `toroidalWeave`.

## Next stages

1. Bind `targetState` from The-Hive / Gemini-Nexus-OS LLM output.
2. Drive `state.gravityPull` from Cryptic-Heartbeat ledger pulse.
3. Publish positions onto band-192-network for Tailscale peers.
4. Hamiltonian singularity surface at Hamiltoniansingularity.ai.

See `src/geometry.js` and `src/Node.js`.
