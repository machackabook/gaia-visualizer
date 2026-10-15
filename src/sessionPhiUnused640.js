/** Stage 640 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste. Document only. Do not rewrite the paste. No secrets. */
export const PHI_UNUSED_640_STAGE = 640;
export const PHI_UNUSED_640_SESSION = 'beec41f1';
export const PHI_UNUSED_640_LIVING = '7cd81012';

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
        case 'hamiltonian':
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;
        case 'torus':
        default:
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function noteSessionPhiUnused640(source) {
  const text = source == null ? PINNED_PASTE : String(source);
  const phiInInfinityOrTorus = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)/.test(text);
  const phiNotInHamiltonian = !/case\s*['\"]hamiltonian['\"][\s\S]*?this\.phi/.test(text);
  const phiNotInTriangular = !/case\s*['\"]triangular['\"][\s\S]*?this\.phi/.test(text);
  const phiNotMutated = !/this\.phi\s*\+=/.test(text);
  return {
    stage: PHI_UNUSED_640_STAGE,
    session: PHI_UNUSED_640_SESSION,
    living: PHI_UNUSED_640_LIVING,
    phiInSharedTube: phiInInfinityOrTorus,
    phiAbsentHamiltonian: phiNotInHamiltonian,
    phiAbsentTriangular: phiNotInTriangular,
    phiNotMutatedInSession: phiNotMutated,
    pasteRewritten: false,
    secrets: false,
    ok: phiInInfinityOrTorus && phiNotInHamiltonian && phiNotInTriangular && phiNotMutated,
    note: 'Phi is used only in the shared y tube for infinity and torus. Hamiltonian and triangular do not reference phi. No mutation of this.phi in session paste. From stage 640. Paste not rewritten.',
  };
}

export function compileSessionStage640(source) {
  const hold = noteSessionPhiUnused640(source);
  return {
    current: PHI_UNUSED_640_STAGE,
    session: PHI_UNUSED_640_SESSION,
    living: PHI_UNUSED_640_LIVING,
    paste: '2026-10-14 19:10 CDT',
    hold,
    next: [
      { stage: 641, title: 'hold y formula identical on infinity and torus (shared tube)' },
      { stage: 642, title: 'hold infinity scale = major * 1.5 and denom = 1 + Math.pow(Math.sin(this.theta), 2)' },
      { stage: 643, title: 'hold triangular tAngle floor snap to 2π/3 sectors with raw theta*5 ripple' },
    ],
  };
}
