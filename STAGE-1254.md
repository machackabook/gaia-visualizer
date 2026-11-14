# STAGE-1254 — hold major/minor assignment order before switch and uniforms order (2026-11-14 19:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1254 holding major/minor prior to switch and uniforms write order.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry) follows immediately after major/minor assignment.
- Order held: uniforms uTime then uGravity; major/minor before switch; theta step before major.
- prior holds: 1253 torus/default tube shared by x/z with y identity to infinity.
- Paste not rewritten.

## Enhancement this hop
Holds major and minor assigned prior to the geometry switch, and uniforms written uTime then uGravity. Living path matches the connecting paste. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1255 — hold final lerp alpha 0.05 session allocation after switch.
2. 1256 — hold full kernel closure with all prior pins parallel.
3. 1257 — hold phi external (referenced, never assigned inside update(t)).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
