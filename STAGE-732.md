# STAGE-732 — Hold switch(targetState.geometry) as sole four-case dispatch (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `switch(targetState.geometry)` is the sole dispatcher.
- Cases: 'infinity' (lemniscate of Bernoulli), 'hamiltonian' (parametric), 'triangular' (modulo floor), 'torus' / default.
- No additional cases. Default falls to torus math.
- Formulas held exactly as in the chat paste.
- Prior holds remain: major/minor before switch (731), uniforms (730).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 733 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull.
2. 734 — hold infinity lemniscate scale = major * 1.5 and denom shared by x/z.
3. 735 — hold hamiltonian hScale = major, y lift sin(t)*2 free of minor.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
