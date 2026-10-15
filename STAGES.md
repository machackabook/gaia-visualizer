# Gaia visualizer + The-Hive — compiled stages

Band `580-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 643 holds the triangular floor snap from current chat. Prior holds preserved. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–616 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha. (prior entries preserved) |
| 617 | Hold major = 10 + (idx * 2) unread by pull. Assigned before switch. |
| 618 | Hold minor = 3 + (toroidalWeave * 2) before switch. |
| 619 | Hold switch(targetState.geometry) sole four-case dispatch. |
| 620 | Hold infinity scale = major * 1.5. |
| 621 | Hold hamiltonian hScale = major. |
| 622–630 | Additional holds on triangular floor, torus fallthrough, lemniscate denom, major/minor pre-switch, lerp, full paste, etc. (prior preserved) |
| 631 | Hold infinity lemniscate denom shared by x and z. |
| 632 | Hold hamiltonian parametric and y lift. |
| 633 | Hold triangular floor snap and y sector. |
| 634 | Hold torus/default tube on x/z only. |
| 635 | Hold shared y tube formula identical on infinity and torus. |
| 636 | Hold theta step `(0.01 + this.idx * 0.002) * state.gravityPull`. |
| 637 | Hold lerp `new THREE.Vector3(x, y, z)` with alpha 0.05 session allocation. |
| 638 | Hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch. |
| 639 | Hold uniforms write order uTime then uGravity. |
| 640 | Hold phi unused in hamiltonian/triangular; no this.phi += in session paste. |
| 641 | Hold y formula identical on infinity and torus (shared tube). |
| 642 | Hold infinity scale = major * 1.5 and denom = 1 + Math.pow(Math.sin(this.theta), 2). |
| 643 | Hold triangular tAngle floor snap to 2π/3 sectors with raw theta*5 ripple. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 644 | gaia-visualizer | Hold hamiltonian parametric x/z and y lift free of minor. |
| 645 | gaia-visualizer | Hold torus/default tube on x/z only; y shared. |
| 646 | gaia-visualizer | Hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'infinity', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 643, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
