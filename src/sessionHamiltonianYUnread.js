/** Stage 479 — hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2. Unread by minor. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_Y_STAGE = 479;
export const HAMILTONIAN_Y_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_Y_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function sampleHamiltonianY(hScale, theta, t) {
  const y = hScale * Math.sin(theta * 3) + Math.sin(t) * 2;
  return { hScale, theta, t, y, minorUnread: true };
}

export function noteSessionHamiltonianYUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'hamiltonian'");
  const end = start < 0 ? -1 : text.indexOf('break;', start);
  const body = end > start ? text.slice(start, end) : '';
  const y = /y\s*=\s*hScale\s*\*\s*Math\.sin\(\s*this\.theta\s*\*\s*3\s*\)\s*\+\s*\(\s*Math\.sin\(\s*t\s*\)\s*\*\s*2\s*\)\s*;/.test(body);
  const minorUnread = body.length > 0 && !/minor/.test(body.split('y =')[1] || '');
  const rest = sampleHamiltonianY(10, 0, 0);
  const crest = sampleHamiltonianY(10, Math.PI / 6, Math.PI / 2);
  return {
    stage: HAMILTONIAN_Y_STAGE,
    session: HAMILTONIAN_Y_SESSION_HASH,
    living: HAMILTONIAN_Y_LIVING_HASH,
    pinned,
    y,
    minorUnread,
    rest,
    crest,
    pasteRewritten: false,
    secrets: false,
    ok: y && minorUnread && rest.y === 0 && Math.abs(crest.y - 12) < 1e-9,
    note: 'hamiltonian y stays hScale * sin(theta * 3) + sin(t) * 2 and does not read minor. Paste not rewritten.',
  };
}

export function compileSessionStage479(source) {
  const hold = noteSessionHamiltonianYUnread(source);
  return {
    current: HAMILTONIAN_Y_STAGE,
    session: HAMILTONIAN_Y_SESSION_HASH,
    living: HAMILTONIAN_Y_LIVING_HASH,
    paste: '2026-10-07 18:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 480, title: 'hold triangular weave as minor * cos/sin(theta * 5) beside the sector snap' },
      { stage: 481, title: 'hold the session theta step as the only angle advance; phi is not incremented' },
      { stage: 482, title: 'hold lerp alpha 0.05 as the only blend into the geometric target' },
    ],
  };
}
