/** Stage 388 — tube identity x^2 + z^2 = (major + minor * cos(phi))^2. Document only. Do not rewrite the paste. No secrets. */
export const TUBE_IDENTITY_STAGE = 388;
export const TUBE_IDENTITY_SESSION_HASH = 'beec41f1';
export const TUBE_IDENTITY_LIVING_HASH = '7cd81012';

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    switch(targetState.geometry) {
        case 'torus':
        default:
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function sessionTubeIdentity(major, minor, phi, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const tubeRadius = R + r * Math.cos(tube);
  const x = tubeRadius * Math.cos(th);
  const z = tubeRadius * Math.sin(th);
  const radial2 = x * x + z * z;
  const expect = tubeRadius * tubeRadius;
  return {
    major: R,
    minor: r,
    phi: tube,
    theta: th,
    tubeRadius,
    x,
    z,
    radial2,
    expect,
    yExcluded: true,
    ok: Math.abs(radial2 - expect) < 1e-9,
  };
}

export function noteSessionTubeIdentity(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasX = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.cos\(this\.theta\)/.test(text);
  const hasZ = /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.sin\(this\.theta\)/.test(text);
  const equator = sessionTubeIdentity(10, 3, 0, 0);
  const pole = sessionTubeIdentity(10, 3, Math.PI / 2, 0);
  const inner = sessionTubeIdentity(10, 3, Math.PI, Math.PI / 2);
  const lane = sessionTubeIdentity(12, 5, 0, Math.PI / 2);
  const threeQuarter = sessionTubeIdentity(10, 3, 0, (3 * Math.PI) / 2);
  const samplesOk = [equator, pole, inner, lane, threeQuarter].every((s) => s.ok);
  return {
    stage: TUBE_IDENTITY_STAGE,
    session: TUBE_IDENTITY_SESSION_HASH,
    living: TUBE_IDENTITY_LIVING_HASH,
    pinned,
    formula: 'x^2 + z^2 = (major + minor * cos(phi))^2',
    hasSessionX: hasX,
    hasSessionZ: hasZ,
    equator,
    pole,
    inner,
    lane,
    threeQuarter,
    yExcluded: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasX && hasZ && samplesOk && Math.abs(equator.radial2 - 169) < 1e-9 && Math.abs(pole.radial2 - 100) < 1e-9 && Math.abs(inner.radial2 - 49) < 1e-9 && Math.abs(lane.radial2 - 289) < 1e-9 && Math.abs(threeQuarter.radial2 - 169) < 1e-9,
    note: 'Stage 388 documents the torus tube identity. y is the shared lift and does not enter x^2 + z^2. Paste not rewritten.',
  };
}
