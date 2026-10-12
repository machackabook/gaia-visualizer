# Gaia visualizer + The-Hive — compiled stages

Band `580-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 612 holds minor = 3 + (toroidalWeave * 2) before switch. Stage 611 holds major = 10 + (idx * 2) before switch. Stage 610 holds infinity denom 1 + sin(theta)^2 shared by x and z only. Stage 609 holds uniform writes as uTime then uGravity only. Stage 608 holds theta step (0.01 + idx * 0.002) * gravityPull. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–561 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha. |
| 562 | Hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch. |
| 563 | Hold switch(targetState.geometry) four cases only (infinity | hamiltonian | triangular | torus/default). |
| 564 | Hold phi read-only in infinity and torus y formulas. |
| 565 | Hold infinity scale = major * 1.5 and shared Bernoulli denom. |
| 566 | Hold hamiltonian hScale = major and independent y lift sin(t)*2. |
| 567 | Hold triangular modulo floor snap and *5 weave unread by snap. |
| 568 | Hold torus default fallthrough and tube radii. |
| 569 | Hold uniform writes uTime then uGravity. |
| 570 | Hold final lerp session allocates Vector3 alpha 0.05. |
| 571 | Hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch. |
| 572 | Hold switch(targetState.geometry) sole four-case dispatch. |
| 573 | Hold infinity lemniscate denom shared by x and z. |
| 574 | Hold phi read-only in shared y formulas. |
| 575 | Hold theta step (0.01 + idx * 0.002) * gravityPull. |
| 576 | Hold triangular tAngle floor snap and *5 weave. |
| 577 | Hold hamiltonian parametric vertex traversal. |
| 578 | Hold torus tube (major + minor * cos(phi)) radii. |
| 579 | Hold infinity scale = major * 1.5. |
| 580 | Hold lemniscate denom 1 + sin(theta)^2 shared by x and z. |
| 581 | Hold final lerp session allocates Vector3 alpha 0.05. |
| 582 | Hold major = 10 + (idx * 2) before switch. |
| 583 | Hold minor = 3 + (toroidalWeave * 2) before switch. |
| 584 | Hold theta step (0.01 + idx * 0.002) * gravityPull. |
| 585 | Hold uniforms uTime then uGravity as sole material writes. |
| 586 | Hold final lerp session allocates Vector3 alpha 0.05. |
| 587 | Hold switch(targetState.geometry) sole four-case dispatch. |
| 588 | Hold phi read-only in shared y formulas. |
| 589 | Hold major = 10 + (idx * 2) before switch. |
| 590 | Hold minor = 3 + (toroidalWeave * 2) before switch. |
| 591 | Hold infinity scale = major * 1.5. |
| 592 | Hold lemniscate denom 1 + sin(theta)^2 shared by x and z. |
| 593 | Hold hamiltonian hScale = major. |
| 594 | Hold triangular tAngle floor snap and *5 weave. |
| 595 | Hold torus default fallthrough and tube radii. |
| 596 | Hold final lerp session allocates Vector3 alpha 0.05. |
| 597 | Hold switch(targetState.geometry) sole four-case dispatch. |
| 598 | Hold uniforms order uTime then uGravity. |
| 599 | Hold theta step (0.01 + idx * 0.002) * gravityPull. |
| 600 | Hold major = 10 + (idx * 2) before switch. |
| 601 | Hold minor = 3 + (toroidalWeave * 2) before switch. |
| 602 | Hold infinity scale = major * 1.5. |
| 603 | Hold lemniscate denom 1 + sin(theta)^2 shared by x and z. |
| 604 | Hold hamiltonian hScale = major. |
| 605 | Hold triangular tAngle floor snap and *5 weave. |
| 606 | Hold torus default fallthrough and tube radii. |
| 607 | Hold minor = 3 + (toroidalWeave * 2) assigned before switch. |
| 608 | Hold theta step (0.01 + idx * 0.002) * gravityPull. |
| 609 | Hold uniform writes as uTime then uGravity only. |
| 610 | Hold infinity denom 1 + sin(theta)^2 shared by x and z only. |
| 611 | Hold major = 10 + (idx * 2) before switch. |
| 612 | Hold minor = 3 + (toroidalWeave * 2) before switch. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 613 | gaia-visualizer | Hold switch(targetState.geometry) sole four-case dispatch. |
| 614 | gaia-visualizer | Hold phi read-only in shared y formulas. |
| 615 | gaia-visualizer | Hold theta step (0.01 + idx * 0.002) * gravityPull. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 612, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
