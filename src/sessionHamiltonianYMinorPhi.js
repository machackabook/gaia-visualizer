/** Stage 512 — hamiltonian y unread by minor and phi. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_Y_MINOR_PHI_STAGE = 512;
export const HAMILTONIAN_Y_MINOR_PHI_SESSION = 'beec41f1';
export const HAMILTONIAN_Y_MINOR_PHI_LIVING = '7cd81012';

const Y_LINE = 'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);';

const PINNED = [
  "case 'hamiltonian':",
  '            const hScale = major;',
  '            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  '            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  '            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  '            break;',
].join('\n');

export function sampleHamiltonianYMinorPhi(theta = 0.7, t = 1.2, major = 12, minor = 9, phi = 0.4) {
  const hScale = major;
  const y = hScale * Math.sin(theta * 3) + Math.sin(t) * 2;
  const injected = y + minor * Math.sin(phi);
  return {
    y,
    injected,
    differsIfMinorPhiInjected: y !== injected,
    readsMinor: false,
    readsPhi: false,
  };
}

export function noteSessionHamiltonianYMinorPhi(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'hamiltonian'");
  const end = start < 0 ? -1 : text.indexOf('break;', start);
  const arm = start >= 0 && end > start ? text.slice(start, end) : '';
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const matches = yLine.replace(/\s+/g, ' ').includes('hScale * Math.sin(this.theta * 3)') && yLine.includes('Math.sin(t) * 2');
  const unread = !/minor/.test(yLine) && !/phi/.test(yLine);
  const sample = sampleHamiltonianYMinorPhi();
  return {
    stage: HAMILTONIAN_Y_MINOR_PHI_STAGE,
    session: HAMILTONIAN_Y_MINOR_PHI_SESSION,
    living: HAMILTONIAN_Y_MINOR_PHI_LIVING,
    pinned,
    yLine,
    matches,
    unread,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: matches && unread && sample.readsMinor === false && sample.readsPhi === false && sample.differsIfMinorPhiInjected,
    note: 'Hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2. It does not read minor or phi. Paste not rewritten.',
  };
}

export function compileSessionStage512(source) {
  const hold = noteSessionHamiltonianYMinorPhi(source);
  return {
    current: HAMILTONIAN_Y_MINOR_PHI_STAGE,
    session: HAMILTONIAN_Y_MINOR_PHI_SESSION,
    living: HAMILTONIAN_Y_MINOR_PHI_LIVING,
    paste: '2026-10-08 23:06 CDT',
    hold,
    next: [
      { stage: 513, title: 'hold torus tube radius unread by y' },
      { stage: 514, title: 'hold torus case then default as one shared body' },
      { stage: 515, title: 'hold lemniscate scale as major * 1.5 unread by minor' },
    ],
  };
}
