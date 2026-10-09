# Stage 506 — hold minor assigned beside major, before the switch (2026-10-08 21:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- radii block still sets `let minor = 3 + (state.toroidalWeave * 2);` after major and before `switch(targetState.geometry)`
- sample: idx `4`, weave `1.5`, major `18`, minor `6`. `assignedBeforeSwitch` true.

## Enhancement this hop
- checker: `noteSessionMinorBeforeSwitch` in `src/sessionMinorBeforeSwitch.js`, compiled by `compileSessionStage506`.
- paste not rewritten. No fifth session case. No secrets.

Numeral `137451921129154506`.
