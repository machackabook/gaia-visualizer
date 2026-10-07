/** Stage 476 — hamiltonian x/z are hScale * cos(theta * 3) * cos/sin(theta), unread by phi. Document only. Do not rewrite the paste. No secrets. */
export const HAM_ARM_STAGE = 476;
export const HAM_ARM_SESSION_HASH = 'beec41f1';
export const HAM_ARM_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function sampleHamiltonianArm(theta, hScale) {
  const arm = Math.cos(theta * 3);
  return {
    theta,
    hScale,
    arm,
    x: hScale * arm * Math.cos(theta),
    z: hScale * arm * Math.sin(theta),
    phiUnread: true,
  };
}

export function noteSessionHamiltonianArmUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'hamiltonian':");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  const body = start >= 0 && end > start ? text.slice(start, end) : (pinned ? text : '');
  const hScale = /const\s+hScale\s*=\s*major\s*;/.test(body);
  const xArm = /x\s*=\s*hScale\s*\*\s*Math\.cos\(\s*this\.theta\s*\*\s*3\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*;/.test(body);
  const zArm = /z\s*=\s*hScale\s*\*\s*Math\.cos\(\s*this\.theta\s*\*\s*3\s*\)\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*;/.test(body);
  const phiUnread = body.length > 0 && !/\bphi\b/.test(body);
  const sample = sampleHamiltonianArm(Math.PI / 2, 10);
  return {
    stage: HAM_ARM_STAGE,
    session: HAM_ARM_SESSION_HASH,
    living: HAM_ARM_LIVING_HASH,
    pinned,
    hScale,
    xArm,
    zArm,
    phiUnread,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hScale && xArm && zArm && phiUnread && sample.x === 0 && sample.z === 0,
    note: 'hamiltonian x and z share hScale * cos(theta * 3), then split by cos(theta) and sin(theta). Phi is unread. Paste not rewritten.',
  };
}

export function compileSessionStage476(source) {
  const hold = noteSessionHamiltonianArmUnread(source);
  return {
    current: HAM_ARM_STAGE,
    session: HAM_ARM_SESSION_HASH,
    living: HAM_ARM_LIVING_HASH,
    paste: '2026-10-07 17:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 477, title: 'hold triangular y sector as (idx % 3 - 1) * major * 0.5, unread by tAngle' },
      { stage: 478, title: 'hold shared y tube on infinity and torus only' },
      { stage: 479, title: 'hold hamiltonian y as hScale * sin(theta * 3) + sin(t) * 2, unread by minor' },
    ],
  };
}
