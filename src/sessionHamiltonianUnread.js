/** Stage 485 — hamiltonian arm ignores phi and minor. Document only. No secrets. */
export const HAMILTONIAN_UNREAD_STAGE = 485;
export const HAMILTONIAN_UNREAD_SESSION = 'beec41f1';
export const HAMILTONIAN_UNREAD_LIVING = '7cd81012';

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function sampleHamiltonianUnread(theta, t) {
  const hScale = 10;
  const x = hScale * Math.cos(theta * 3) * Math.cos(theta);
  const z = hScale * Math.cos(theta * 3) * Math.sin(theta);
  const y = hScale * Math.sin(theta * 3) + Math.sin(t) * 2;
  return { theta, t, hScale, x, y, z, usesPhi: false, usesMinor: false, lift: 2 };
}

export function noteSessionHamiltonianUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const armStart = text.indexOf("case 'hamiltonian'");
  const armEnd = armStart >= 0 ? text.indexOf('break;', armStart) : -1;
  const arm = armStart >= 0 && armEnd > armStart ? text.slice(armStart, armEnd) : '';
  const hScaleIsMajor = /const\s+hScale\s*=\s*major\s*;/.test(arm);
  const lift = /Math\.sin\(t\)\s*\*\s*2/.test(arm);
  const usesPhi = /this\.phi/.test(arm);
  const usesMinor = /\bminor\b/.test(arm);
  const sample = sampleHamiltonianUnread(0.4, 1.2);
  return {
    stage: HAMILTONIAN_UNREAD_STAGE,
    session: HAMILTONIAN_UNREAD_SESSION,
    living: HAMILTONIAN_UNREAD_LIVING,
    pinned,
    hScaleIsMajor,
    lift,
    usesPhi,
    usesMinor,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hScaleIsMajor && lift && !usesPhi && !usesMinor && sample.lift === 2,
    note: 'hamiltonian arm uses hScale = major and sin(t) * 2. Phi and minor are unread. Paste not rewritten.',
  };
}

export function compileSessionStage485(source) {
  const hold = noteSessionHamiltonianUnread(source);
  return {
    current: HAMILTONIAN_UNREAD_STAGE,
    session: HAMILTONIAN_UNREAD_SESSION,
    living: HAMILTONIAN_UNREAD_LIVING,
    paste: '2026-10-07 20:06 CDT',
    hold,
    next: [
      { stage: 486, title: 'hold lemniscate z as scale * sin(theta) * cos(theta) / denom' },
      { stage: 487, title: 'hold triangular y unread by tAngle' },
      { stage: 488, title: 'hold session lerp allocating new THREE.Vector3 at alpha 0.05' },
    ],
  };
}
