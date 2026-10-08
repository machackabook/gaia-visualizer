# Stage 483 — compiled next: shared radii before the switch (2026-10-07 19:07 CDT)

Queued from the connecting-chat paste. Not a new case label.

- `let major = 10 + (this.idx * 2)`
- `let minor = 3 + (state.toroidalWeave * 2)`
- both assigned before `switch(targetState.geometry)`
- hamiltonian reads major as `hScale` and does not read minor
- session hash `beec41f1`. Living hash `7cd81012`.
- paste not rewritten. No secrets.

Prior radius holds: stage 470 (minor), stage 471 (major). This hop binds them as the shared pair.
Numeral `137451921129154483`.
