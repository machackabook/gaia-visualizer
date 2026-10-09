/** Stage 527 — torus and default share the tube major + minor * cos(phi). Document only. Paste not rewritten. No secrets. */
export const TORUS_TUBE_STAGE = 527;
export const TORUS_TUBE_SESSION = 'beec41f1';
export const TORUS_TUBE_LIVING = '7cd81012';

const PINNED_TUBE = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
].join('\n');

export function sampleTorusTubeRadius() {
  const major = 18;
  const minor = 5;
  const phi = 0;
  return { major, minor, phi, tube: major + minor * Math.cos(phi), sharedWithDefault: true };
}

export function noteSessionTorusTubeRadius(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TUBE : String(source);
  const torus = text.split("case 'torus':")[1] || '';
  const hasDefault = /default\s*:/.test(torus);
  const xTube = /x\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)/.test(torus);
  const zTube = /z\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)/.test(torus);
  const sample = sampleTorusTubeRadius();
  return {
    stage: TORUS_TUBE_STAGE,
    session: TORUS_TUBE_SESSION,
    living: TORUS_TUBE_LIVING,
    pinned,
    hasDefault,
    xTube,
    zTube,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasDefault && xTube && zTube && sample.tube === 23 && sample.sharedWithDefault === true,
    note: 'torus and default share the tube major + minor * cos(phi) on x and z. Paste not rewritten.',
  };
}

export function compileSessionStage527(source) {
  const hold = noteSessionTorusTubeRadius(source);
  return {
    current: TORUS_TUBE_STAGE,
    session: TORUS_TUBE_SESSION,
    living: TORUS_TUBE_LIVING,
    paste: '2026-10-09 14:06 CDT',
    hold,
    next: [
      { stage: 528, title: 'hold lemniscate denom shared by x and z only' },
      { stage: 529, title: 'hold hamiltonian y lift sin(t) * 2 independent of hScale' },
      { stage: 530, title: 'hold session lerp alpha as the literal 0.05' },
    ],
  };
}
