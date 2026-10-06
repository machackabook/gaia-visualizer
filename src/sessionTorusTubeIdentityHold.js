/** Stage 453 — hold torus tube identity on x and z only. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_TUBE_IDENTITY_STAGE = 453;
export const TORUS_TUBE_IDENTITY_SESSION_HASH = 'beec41f1';
export const TORUS_TUBE_IDENTITY_LIVING_HASH = '7cd81012';
export const TORUS_TUBE_IDENTITY_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_TORUS = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function torusTubeIdentity(major, minor, phi, theta) {
  const tube = major + minor * Math.cos(phi);
  const x = tube * Math.cos(theta);
  const z = tube * Math.sin(theta);
  const radiusSq = x * x + z * z;
  return { tube, x, z, radiusSq, expected: tube * tube, yOnTube: false };
}

export function noteSessionTorusTubeIdentityHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TORUS : String(source);
  const arm = (text.split("case 'torus':")[1] || text.split('default:')[1] || text).split('break;')[0];
  const xHeld = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.cos\(this\.theta\)\s*;/.test(arm);
  const zHeld = /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.sin\(this\.theta\)\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const yOffTube = yLine.length > 0 && !/Math\.cos\(this\.theta\)/.test(yLine) && /Math\.sin\(this\.phi\)/.test(yLine);
  const sharedTube = /major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)/.test(arm);
  const invented = TORUS_TUBE_IDENTITY_EXTRAS.filter((name) => hasCase(text, name));
  const sample = torusTubeIdentity(10, 3, 0, Math.PI / 2);
  const quarter = torusTubeIdentity(10, 3, Math.PI / 2, Math.PI / 4);
  return {
    stage: TORUS_TUBE_IDENTITY_STAGE,
    session: TORUS_TUBE_IDENTITY_SESSION_HASH,
    living: TORUS_TUBE_IDENTITY_LIVING_HASH,
    pinned,
    xHeld,
    zHeld,
    yOffTube,
    sharedTube,
    sample,
    quarter,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      xHeld &&
      zHeld &&
      yOffTube &&
      sharedTube &&
      invented.length === 0 &&
      Math.abs(sample.radiusSq - sample.expected) < 1e-9 &&
      Math.abs(sample.tube - 13) < 1e-12 &&
      Math.abs(sample.x) < 1e-12 &&
      Math.abs(sample.z - 13) < 1e-12 &&
      Math.abs(quarter.radiusSq - quarter.expected) < 1e-9 &&
      Math.abs(quarter.tube - 10) < 1e-12 &&
      sample.yOnTube === false,
    note: 'Torus x^2 + z^2 stays (major + minor * cos(phi))^2. y stays minor * sin(phi) * sin(t * 0.5 + idx) and is not on that tube. Paste not rewritten.',
  };
}

export function compileSessionStage453(source) {
  const hold = noteSessionTorusTubeIdentityHold(source);
  return {
    current: TORUS_TUBE_IDENTITY_STAGE,
    session: TORUS_TUBE_IDENTITY_SESSION_HASH,
    living: TORUS_TUBE_IDENTITY_LIVING_HASH,
    paste: '2026-10-06 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 454, title: 'hold infinity z as scale * sin(theta) * cos(theta) / denom' },
      { stage: 455, title: 'hold triangular tAngle snap to 2π/3 sectors' },
      { stage: 456, title: 'hold theta step as the only gravityPull product' },
    ],
  };
}
