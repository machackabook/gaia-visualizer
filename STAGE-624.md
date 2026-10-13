# STAGE-624

- repo: machackabook/gaia-visualizer
- hop: 624
- utc: 2026-10-13T20:09Z
- cdt: 2026-10-13 15:09 CDT
- numeral: 137451921129154222
- prior mesh: STAGE-623 closed. Compiled from current connecting chat paste of update(t).
- action: compile held invariants of the session kernel. New checker src/sessionCompile624.js. Paste not rewritten.
- session hash beec41f1. Living hash 7cd81012.
- cascade.yml: intact. Not rewritten.
- secrets: none.
- next: 625 hold triangular y formula, 626 hold torus y shared with infinity, 627 hold hamiltonian y lift.

## Compiled holds from paste
- uniforms: uTime = t then uGravity = state.gravityPull
- theta step: (0.01 + this.idx * 0.002) * state.gravityPull
- major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) before switch
- switch four-case: infinity | hamiltonian | triangular | torus/default
- infinity: lemniscate scale = major * 1.5, denom shared x/z, y = minor * sin(phi) * sin(t*0.5 + idx)
- hamiltonian: hScale = major, parametric x/z/y with *3 and sin(t)*2
- triangular: tAngle floor snap, x/z major + minor *5, y (idx%3-1)*major*0.5 + sin(t)*minor
- torus: standard parametric, y shared formula
- final: lerp(new THREE.Vector3(x,y,z), 0.05)

Numeral 137451921129154222.
Connecting: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
