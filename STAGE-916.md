# STAGE-916 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- theta step is applied before major/minor and before the geometry switch
- unread by any case in switch(targetState.geometry)
- prior holds: 915 uniforms write order uTime then uGravity, 914 phi external binding, 913 lerp alpha literal 0.05 + session Vector3 alloc

## Enhancement this hop
Holds the theta step form exactly as pasted. Unread by the switch. Paste not rewritten. No secrets.

## Next stages compiled
1. 917 — hold major/minor assignment before switch.
2. 918 — reaffirm full kernel pin from current connecting chat.
3. 919 — hold infinity lemniscate denom shared by x/z only.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
