# STAGE-925 — reaffirm full kernel pin from current connecting chat (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held exactly as pasted:
  - uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
  - theta += (0.01 + this.idx * 0.002) * state.gravityPull;
  - major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2); assigned before switch
  - switch(targetState.geometry): infinity (lemniscate of Bernoulli, scale=major*1.5, denom=1+Math.pow(Math.sin(this.theta),2) shared by x/z only, y=minor*Math.sin(this.phi)*Math.sin(t*0.5+this.idx)), hamiltonian (hScale=major, y=hScale*Math.sin(this.theta*3) + (Math.sin(t)*2), x/z free of minor), triangular (tAngle = floor(this.theta / (Math.PI*2/3)) * (Math.PI*2/3), y=(this.idx%3-1)*major*0.5 + Math.sin(t)*minor free of theta*5, ripple on x/z), torus/default (tube (major + minor*Math.cos(this.phi)) shared by x/z, y shared with infinity).
- Phi referenced in infinity/torus y and tube, never assigned inside the session paste (external binding).
- Lerp: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05); session allocates new Vector3 with literal alpha 0.05.
- prior holds: 924 phi external binding

## Enhancement this hop
Reaffirms the complete update(t) kernel as the pinned session source from the current connecting chat paste. Living path may optimize (e.g. reuse Vector3, phi weave) but must preserve all mathematical mappings, order, and formulas exactly. Paste not rewritten. No secrets.

## Next stages compiled
1. 926 — hold uniforms write order uTime then uGravity.
2. 927 — hold theta step unread by switch.
3. 928 — hold major/minor pre-switch assignment.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
