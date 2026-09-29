# STAGE-334

- When: 2026-09-29T16:06Z / 2026-09-29 11:06 CDT
- Repos: machackabook/The-Hive + machackabook/gaia-visualizer
- Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus, lerp 0.05).
- Session hash `beec41f1` held. Living hash `7cd81012` held.
- Shipped:
  - `selectChatKernelGeometry` gates unknown labels onto `torus` without touching the session switch.
  - `stepChatKernelNode` is the single living call site (advance + evaluate + write angles back onto the node).
  - GaiaNode four-case path consumes `stepChatKernelNode`.
- Session paste still allocates `new THREE.Vector3` by contract.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only.

## Next stages (335+)
1. Authenticated ledger pulse (13) against live sheet counts.
2. 19-panels NexusStudio / Stream sliders.
3. TF/shader parity for runtime extras (316-gpu).
4. Do not add new case labels to the session switch unless the connecting chat pastes them.
