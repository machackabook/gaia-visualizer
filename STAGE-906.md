# STAGE-906 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch (2026-10-27)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- step factor: base 0.01 + (this.idx * 0.002) multiplied by gravityPull
- unread by the switch(targetState.geometry); advances before geometry evaluation
- prior holds: 905 uniforms order, 904 full pin, and earlier series

## Enhancement this hop
Holds the theta advancement formula exactly as in the pasted kernel. The geometry switch does not read or modify the step. Living path may optimize elsewhere. Paste not rewritten. No secrets.

## Next stages compiled
1. 907 — hold major/minor pre-switch assignment.
2. 908 — hold switch(targetState.geometry) sole four-case dispatcher.
3. 909 — hold infinity lemniscate scale = major * 1.5 and denom shared by x/z only.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
