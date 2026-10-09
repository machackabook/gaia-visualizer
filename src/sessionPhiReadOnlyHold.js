/** Stage 533 — phi is read, never written, in the session paste. Document only. Paste not rewritten. No secrets. */
export const PHI_READ_ONLY_STAGE = 533;
export const PHI_READ_ONLY_SESSION = 'beec41f1';
export const PHI_READ_ONLY_LIVING = '7cd81012';

const PINNED_PHI = [
  "case 'infinity':",
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
  "case 'hamiltonian':",
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
  "case 'triangular':",
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
  "case 'torus':",
  'default:',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function samplePhiReadOnly(phi = 0.4, minor = 5.4, t = 1, idx = 2) {
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { phi, minor, t, idx, y, phiWritten: false };
}

export function noteSessionPhiReadOnly(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PHI : String(source);
  const sinPhi = (text.match(/Math\.sin\(this\.phi\)/g) || []).length;
  const written = /this\.phi\s*(\+=|=)/.test(text);
  const infinityReads = /case\s+'infinity'[\s\S]*?Math\.sin\(this\.phi\)[\s\S]*?break;/.test(text);
  const torusReads = /case\s+'torus'[\s\S]*?Math\.sin\(this\.phi\)[\s\S]*?break;/.test(text);
  const hamiltonianBlock = (text.match(/case\s+'hamiltonian'[\s\S]*?break;/) || [''])[0];
  const triangularBlock = (text.match(/case\s+'triangular'[\s\S]*?break;/) || [''])[0];
  const hamiltonianReads = /this\.phi/.test(hamiltonianBlock);
  const triangularReads = /this\.phi/.test(triangularBlock);
  const sample = samplePhiReadOnly();
  return {
    stage: PHI_READ_ONLY_STAGE,
    session: PHI_READ_ONLY_SESSION,
    living: PHI_READ_ONLY_LIVING,
    pinned,
    sinPhi,
    written,
    infinityReads,
    torusReads,
    hamiltonianReads,
    triangularReads,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: sinPhi >= 2 && !written && infinityReads && torusReads && !hamiltonianReads && !triangularReads
      && sample.phiWritten === false
      && Number.isFinite(sample.y),
    note: 'phi is read by infinity and torus y via Math.sin(this.phi) and is never assigned. hamiltonian and triangular do not read phi. Paste not rewritten.',
  };
}

export function compileSessionStage533(source) {
  const hold = noteSessionPhiReadOnly(source);
  return {
    current: PHI_READ_ONLY_STAGE,
    session: PHI_READ_ONLY_SESSION,
    living: PHI_READ_ONLY_LIVING,
    paste: '2026-10-09 17:07 CDT',
    hold,
    next: [
      { stage: 534, title: 'hold major parentheses form 10 + (idx * 2) distinct from the 0.002 theta coefficient' },
      { stage: 535, title: 'hold uTime then uGravity as the only material writes' },
      { stage: 536, title: 'hold torus as the default case and the only fallthrough' },
    ],
  };
}
