/** Stage 526 — triangular lattice y is unread by phi. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_Y_UNREAD_STAGE = 526;
export const TRIANGULAR_Y_UNREAD_SESSION = 'beec41f1';
export const TRIANGULAR_Y_UNREAD_LIVING = '7cd81012';

const PINNED_Y = 'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;';

export function sampleTriangularYUnreadByPhi() {
  const idx = 4;
  const major = 18;
  const minor = 5;
  const lane = (idx % 3 - 1) * major * 0.5;
  const ripple = Math.sin(Math.PI / 2) * minor;
  return { idx, major, minor, lane, y: lane + ripple, readsPhi: false };
}

export function noteSessionTriangularYUnreadByPhi(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_Y : String(source);
  const tri = text.split("case 'triangular':")[1] || '';
  const body = tri.split('break;')[0] || text;
  const yLine = (body.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const lane = /idx\s*%\s*3\s*-\s*1/.test(yLine) && /major\s*\*\s*0\.5/.test(yLine);
  const ripple = /Math\.sin\(t\)\s*\*\s*minor/.test(yLine);
  const readsPhi = /phi/.test(yLine);
  const sample = sampleTriangularYUnreadByPhi();
  return {
    stage: TRIANGULAR_Y_UNREAD_STAGE,
    session: TRIANGULAR_Y_UNREAD_SESSION,
    living: TRIANGULAR_Y_UNREAD_LIVING,
    pinned,
    lane,
    ripple,
    readsPhi,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: lane && ripple && !readsPhi && sample.readsPhi === false && sample.y === 14,
    note: 'triangular y stays the idx lane plus sin(t) * minor. It does not read phi. Paste not rewritten.',
  };
}

export function compileSessionStage526(source) {
  const hold = noteSessionTriangularYUnreadByPhi(source);
  return {
    current: TRIANGULAR_Y_UNREAD_STAGE,
    session: TRIANGULAR_Y_UNREAD_SESSION,
    living: TRIANGULAR_Y_UNREAD_LIVING,
    paste: '2026-10-09 14:06 CDT',
    hold,
    next: [
      { stage: 527, title: 'hold torus and default tube as major + minor * cos(phi)' },
      { stage: 528, title: 'hold lemniscate denom shared by x and z only' },
      { stage: 529, title: 'hold hamiltonian y lift sin(t) * 2 independent of hScale' },
    ],
  };
}
