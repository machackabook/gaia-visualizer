/** Stage 699 — hold hamiltonian parametric mapping and y lift Math.sin(t)*2 independent of hScale. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_699_STAGE = 699;
export const HAMILTONIAN_699_SESSION = 'beec41f1';
export const HAMILTONIAN_699_LIVING = '7cd81012';

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            break;
        case 'hamiltonian':
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            break;
        case 'torus':
        default:
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function noteSessionHamiltonian699(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasCase = /case\s*['"]hamiltonian['"]/.test(text);
  const hasHScale = /const\s+hScale\s*=\s*major/.test(text);
  const hasXZ = /x\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.cos\(this\.theta\)/.test(text) &&
                /z\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.sin\(this\.theta\)/.test(text);
  const hasYLift = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(Math\.sin\(t\)\s*\*\s*2\)/.test(text);
  const independent = hasYLift && !/y\s*=\s*hScale\s*\*\s*.*Math\.sin\(t\)/.test(text.replace(/hScale \* Math\.sin\(this\.theta \* 3\)/, ''));
  return {
    stage: HAMILTONIAN_699_STAGE,
    session: HAMILTONIAN_699_SESSION,
    living: HAMILTONIAN_699_LIVING,
    pinned,
    hasCase,
    hasHScale,
    hasXZ,
    hasYLift,
    yLiftIndependentOfHScale: independent,
    pasteRewritten: false,
    secrets: false,
    ok: hasCase && hasHScale && hasXZ && hasYLift,
    note: 'Hamiltonian case: parametric x/z = hScale * cos(theta*3) * cos/sin(theta). y = hScale * sin(theta*3) + (Math.sin(t) * 2). Lift independent of hScale. From stage 699 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage699(source) {
  const hold = noteSessionHamiltonian699(source);
  return {
    current: HAMILTONIAN_699_STAGE,
    session: HAMILTONIAN_699_SESSION,
    living: HAMILTONIAN_699_LIVING,
    paste: '2026-10-17',
    hold,
    next: [
      { stage: 700, title: 'hold triangular floor snap to 2π/3 and y sector free of theta*5 on y' },
      { stage: 701, title: 'hold torus/default tube on x/z only; y shared with infinity' },
      { stage: 702, title: 'hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05' },
    ],
  };
}
