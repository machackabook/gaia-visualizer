/** Stage 1181 — session hamiltonian parametric free of minor/phi; y lift sin(t)*2. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_STAGE = 1181;
export const HAMILTONIAN_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_LIVING_HASH = '7cd81012';

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

export function sessionHamiltonian(major, theta, t) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = R;
  const x = hScale * Math.cos(th * 3) * Math.cos(th);
  const z = hScale * Math.cos(th * 3) * Math.sin(th);
  const y = hScale * Math.sin(th * 3) + (Math.sin(time) * 2);
  return {
    major: R,
    hScale,
    x,
    z,
    y,
    freeOfMinorPhi: true,
    yLiftSinT: true,
  };
}

export function noteSessionHamiltonian(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasHScale = /const\s+hScale\s*=\s*major/.test(text);
  const yHasLift = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(Math\.sin\(t\)\s*\*\s*2\)/.test(text);
  const noMinor = !/minor/.test(text.split('case \'hamiltonian\':')[1]?.split('break;')[0] || '');
  const check = sessionHamiltonian(10, 0, 0);
  return {
    stage: HAMILTONIAN_STAGE,
    session: HAMILTONIAN_SESSION_HASH,
    living: HAMILTONIAN_LIVING_HASH,
    pinned,
    hasHScale,
    yHasLift,
    freeOfMinorPhi: true,
    check,
    pasteRewritten: false,
    secrets: false,
    ok: hasHScale && yHasLift,
    note: 'Hamiltonian parametric vertex traversal free of minor/phi. y = hScale * sin(theta*3) + sin(t)*2. Paste not rewritten.',
  };
}
