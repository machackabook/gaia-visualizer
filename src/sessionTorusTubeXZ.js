/** Stage 473 — torus/default tube is (major + minor * cos(phi)), shared by x and z. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_TUBE_XZ_STAGE = 473;
export const TORUS_TUBE_XZ_SESSION_HASH = 'beec41f1';
export const TORUS_TUBE_XZ_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleTorusTube(major, minor, phi) {
  const tube = major + minor * Math.cos(phi);
  return { major, minor, phi, tube, sharedByXandZ: true, unreadByY: true };
}

function torusBody(text) {
  const start = text.indexOf("case 'torus'");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  return start >= 0 && end > start ? text.slice(start, end) : '';
}

export function noteSessionTorusTubeXZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const body = torusBody(text) || text;
  const fusedDefault = /case\s*'torus'\s*:\s*default\s*:/.test(body) || /case\s*'torus'\s*:[\s\S]*default\s*:/.test(body);
  const xTube = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)/.test(body);
  const zTube = /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)\s*\)\s*\*\s*Math\.sin\(\s*this\.theta\s*\)/.test(body);
  const yIgnoresTube = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)/.test(body) && !/y\s*=[^;]*major\s*\+\s*minor/.test(body);
  const sample = sampleTorusTube(10, 3, 0);
  const expected = 10 + 3 * Math.cos(0);
  return {
    stage: TORUS_TUBE_XZ_STAGE,
    session: TORUS_TUBE_XZ_SESSION_HASH,
    living: TORUS_TUBE_XZ_LIVING_HASH,
    pinned,
    fusedDefault,
    xTube,
    zTube,
    yIgnoresTube,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: fusedDefault && xTube && zTube && yIgnoresTube && sample.tube === expected,
    note: 'torus/default tube is (major + minor * cos(phi)). x and z multiply that binding by cos(theta) and sin(theta). y uses sin(phi), not the tube. Paste not rewritten.',
  };
}

export function compileSessionStage473(source) {
  const hold = noteSessionTorusTubeXZ(source);
  return {
    current: TORUS_TUBE_XZ_STAGE,
    session: TORUS_TUBE_XZ_SESSION_HASH,
    living: TORUS_TUBE_XZ_LIVING_HASH,
    paste: '2026-10-07 14:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 474, title: 'hold triangular sector snap as floor(theta / (2π/3)) * (2π/3)' },
      { stage: 475, title: 'hold infinity scale as major * 1.5, unread by the other three cases' },
      { stage: 476, title: 'hold hamiltonian x/z as hScale * cos(theta * 3) * cos/sin(theta), unread by phi' },
    ],
  };
}
