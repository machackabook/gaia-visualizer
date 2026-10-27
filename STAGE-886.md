# STAGE-886 — Reaffirm full kernel pin from current connecting chat paste of update(t) (2026-10-26)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full update(t) held as pinned session source of truth.
- uniforms: this.material.uniforms.uTime.value = t; then this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2); before switch
- switch(targetState.geometry) {
  case 'infinity': lemniscate of Bernoulli, scale = major * 1.5, denom = 1 + Math.pow(Math.sin(this.theta), 2), x/z over denom, y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
  case 'hamiltonian': hScale = major, x/z = hScale * Math.cos(this.theta * 3) * cos/sin(this.theta), y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)
  case 'triangular': tAngle floor to 2π/3, x/z major * cos/sin(tAngle) + minor * cos/sin(theta*5), y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor
  case 'torus': default tube (major + minor * Math.cos(this.phi)) * cos/sin(theta), y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
}
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- phi referenced, never assigned inside update(t)
- prior holds: phi external (885), session Vector3 allocation (884), torus tube (883), triangular floor (882), hamiltonian y lift (881), infinity denom (880)

## Enhancement this hop
Reaffirms the complete update(t) kernel pin from the current connecting chat paste. All formulas held exactly. Paste not rewritten.

## Next stages compiled
1. 887 — hold uniforms write order uTime then uGravity.
2. 888 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
3. 889 — hold major/minor pre-switch assignment.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine named next in waterfall.
