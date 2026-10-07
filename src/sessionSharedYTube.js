/** Stage 478 — shared y tube lives on infinity and torus only. Document only. Do not rewrite the paste. No secrets. */
export const SHARED_Y_STAGE = 478;
export const SHARED_Y_SESSION_HASH = 'beec41f1';
export const SHARED_Y_LIVING_HASH = '7cd81012';

const Y_TUBE = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

const PINNED = [
  "case 'infinity':",
  Y_TUBE,
  'break;',
  "case 'hamiltonian':",
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
  "case 'triangular':",
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
  "case 'torus':",
  'default:',
  Y_TUBE,
  'break;',
].join('\n');

export function sampleSharedYTube(minor, phi, t, idx) {
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { minor, phi, t, idx, y, tubeRadiusOmitted: true };
}

function caseBody(text, label) {
  const start = text.indexOf("case '" + label + "'");
  if (start < 0) return '';
  const end = text.indexOf('break;', start);
  return end > start ? text.slice(start, end) : '';
}

export function noteSessionSharedYTube(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const tube = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/;
  const infinity = caseBody(text, 'infinity');
  const hamiltonian = caseBody(text, 'hamiltonian');
  const triangular = caseBody(text, 'triangular');
  const torus = caseBody(text, 'torus');
  const infinityY = tube.test(infinity);
  const torusY = tube.test(torus);
  const hamiltonianOther = hamiltonian.length > 0 && !tube.test(hamiltonian) && /hScale\s*\*\s*Math\.sin\(\s*this\.theta\s*\*\s*3\s*\)/.test(hamiltonian);
  const triangularOther = triangular.length > 0 && !tube.test(triangular) && /this\.idx\s*%\s*3\s*-\s*1/.test(triangular);
  const sample = sampleSharedYTube(3, Math.PI / 2, 0, 0);
  return {
    stage: SHARED_Y_STAGE,
    session: SHARED_Y_SESSION_HASH,
    living: SHARED_Y_LIVING_HASH,
    pinned,
    infinityY,
    torusY,
    hamiltonianOther,
    triangularOther,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: infinityY && torusY && hamiltonianOther && triangularOther && sample.y === 0,
    note: 'infinity y and torus/default y share minor * sin(phi) * sin(t * 0.5 + idx) and omit the tube radius. Hamiltonian and triangular use other y formulas. Paste not rewritten.',
  };
}

export function compileSessionStage478(source) {
  const hold = noteSessionSharedYTube(source);
  return {
    current: SHARED_Y_STAGE,
    session: SHARED_Y_SESSION_HASH,
    living: SHARED_Y_LIVING_HASH,
    paste: '2026-10-07 17:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 479, title: 'hold hamiltonian y as hScale * sin(theta * 3) + sin(t) * 2, unread by minor' },
      { stage: 480, title: 'hold triangular weave as minor * cos/sin(theta * 5) beside the sector snap' },
      { stage: 481, title: 'hold the session theta step as the only angle advance; phi is not incremented' },
    ],
  };
}
