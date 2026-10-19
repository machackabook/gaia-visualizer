# STAGE-742 — Hold switch sole four-case dispatch (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- switch(targetState.geometry) sole dispatcher. Cases: 'infinity' (lemniscate of Bernoulli), 'hamiltonian', 'triangular', 'torus' / default (standard toroidal).
- No additional cases. Default falls through to torus. targetState.geometry assigned externally by LLM.
- Formulas held exactly as in the chat paste.
- Prior holds remain: major/minor before switch (741), theta step (740).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 743 — hold uniforms uTime then uGravity.
2. 744 — hold infinity scale = major * 1.5, denom = 1 + sin(theta)^2 shared by x/z.
3. 745 — hold hamiltonian hScale = major, y = hScale * sin(theta*3) + sin(t)*2.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
