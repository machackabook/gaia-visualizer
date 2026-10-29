# Gaia visualizer + The-Hive — compiled stages

Band `580-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 937 holds theta step unread by switch. Stage 936 holds uniforms write order uTime then uGravity. Stage 935 reaffirms full kernel pin from current connecting chat. Prior holds preserved. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–712 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha, major/minor pre-switch, switch four-case. (prior entries preserved) |
| 713–882 | Hold series reaffirming full kernel, infinity denom, hamiltonian lift, triangular snap, torus tube, and related pins. (prior entries preserved) |
| 883 | Hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity. |
| 904 | Reaffirm full kernel pin from current connecting chat paste of update(t). |
| 913 | Hold lerp alpha literal 0.05 and session Vector3 allocation. |
| 914 | Hold phi external binding. |
| 915 | Hold uniforms write order uTime then uGravity. |
| 916 | Hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch. |
| 917 | Hold major/minor pre-switch assignment. |
| 918 | Reaffirm full kernel pin from connecting chat. |
| 919 | Hold infinity lemniscate denom shared by x/z only. |
| 920 | Hold hamiltonian y lift free of hScale/minor. |
| 921 | Hold triangular floor snap to 2π/3 and y sector free of theta*5. |
| 922 | Hold torus/default tube (major + minor * cos(phi)) shared by x/z. |
| 923 | Hold session Vector3 allocation inside lerp (alpha 0.05 literal). |
| 924 | Hold phi external binding. |
| 925 | Reaffirm full kernel pin from current connecting chat paste. |
| 926 | Hold uniforms write order uTime then uGravity. |
| 936 | Hold uniforms write order uTime then uGravity from current connecting chat. |
| 937 | Hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 938 | gaia-visualizer | Hold major/minor pre-switch assignment. |
| 939 | gaia-visualizer | Hold switch(targetState.geometry) sole four-case dispatch. |
| 940 | gaia-visualizer | Hold lerp alpha literal 0.05 and session Vector3 allocation. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'triangular', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 937, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
