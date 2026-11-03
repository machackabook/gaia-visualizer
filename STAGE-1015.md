# STAGE-1015 — hold theta step (0.01 + idx * 0.002) * gravityPull before major/minor (2026-11-02 20:08 CDT)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Theta step applied before major/minor declarations and before the geometry switch.
- Unread by any case in switch(targetState.geometry).
- prior holds: 1014 lerp new Vector3 allocation with literal alpha 0.05.

## Enhancement this hop
Holds theta step (0.01 + idx * 0.002) * gravityPull before major/minor. Living path matches. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1016 — hold uniforms write order uTime then uGravity.
2. 1017 — hold major/minor declarations before switch (major = 10 + idx*2, minor = 3 + toroidalWeave*2).
3. 1018 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive next in waterfall.
