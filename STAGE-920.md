# STAGE-920 — hold hamiltonian y lift free of hScale/minor (2026-10-28)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full body held: uniforms uTime then uGravity, theta += (0.01 + idx * 0.002) * gravityPull, major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch, four-case switch.
- Hamiltonian: const hScale = major; x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta); z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta); y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
- Y lift is `Math.sin(t) * 2` and does not take hScale or minor. X/Z free of minor. Phi unread in this case.
- Infinity, triangular, torus/default unchanged in this hold.
- Lerp(new THREE.Vector3(x, y, z), 0.05).
- Phi referenced, never assigned inside paste (external binding).
- prior holds: 919 infinity lemniscate denom shared by x/z only, 918 full kernel reaffirm, 917 major/minor pre-switch

## Enhancement this hop
Holds the hamiltonian parametric mapping: y lift remains free of hScale and minor. X/Z use hScale * cos(theta*3) * cos/sin(theta). Paste not rewritten. Living path may optimize but must preserve the mapping. No secrets.

## Next stages compiled
1. 921 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
2. 922 — hold torus/default tube (major + minor * cos(phi)) shared by x/z.
3. 923 — reaffirm full kernel pin from next connecting chat paste.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive hop next in waterfall.
