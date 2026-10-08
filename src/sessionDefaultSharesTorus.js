/** Stage 499 — default shares the torus tube and is not a fifth session case. Document only. Paste not rewritten. No secrets. */
export const DEFAULT_SHARES_TORUS_STAGE = 499;
export const DEFAULT_SHARES_TORUS_SESSION = 'beec41f1';
export const DEFAULT_SHARES_TORUS_LIVING = '7cd81012';
export const SESSION_CASE_LABELS = ['infinity', 'hamiltonian', 'triangular', 'torus'];

const PINNED = [
  "        case 'torus':",
  '        default:',
  '            // Standard Toroidal Math',
  '            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  '            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  '            break;',
].join('\n');

export function sampleSharedTorusTube(major = 10, minor = 3, phi = 0, theta = 0, t = 0, idx = 0) {
  const tube = minor * Math.cos(phi);
  return {
    x: (major + tube) * Math.cos(theta),
    z: (major + tube) * Math.sin(theta),
    y: minor * Math.sin(phi) * Math.sin(t * 0.5 + idx),
    shared: true,
    fifthCase: false,
  };
}

export function noteSessionDefaultSharesTorus(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = (text.match(/case\s+'torus':[\s\S]*?break;/) || [text])[0];
  const fallthrough = /case\s+'torus':\s*default\s*:/.test(arm);
  const notACaseLabel = !/case\s+'default'/.test(text);
  const labels = SESSION_CASE_LABELS.filter((name) => new RegExp("case\\s+'" + name + "'").test(text));
  const fourOnly = labels.length === SESSION_CASE_LABELS.length && !/case\s+'[^']+'/.test(text.replace(/case\s+'(?:infinity|hamiltonian|triangular|torus)'/g, ''));
  const xTube = /x\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.cos\(this\.theta\)\s*;/.test(arm);
  const zTube = /z\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.sin\(this\.theta\)\s*;/.test(arm);
  const yTube = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)\s*;/.test(arm);
  const sample = sampleSharedTorusTube();
  return {
    stage: DEFAULT_SHARES_TORUS_STAGE,
    session: DEFAULT_SHARES_TORUS_SESSION,
    living: DEFAULT_SHARES_TORUS_LIVING,
    pinned,
    fallthrough,
    notACaseLabel,
    labels,
    fourOnly,
    xTube,
    zTube,
    yTube,
    sample,
    fifthCase: false,
    pasteRewritten: false,
    secrets: false,
    ok: fallthrough && notACaseLabel && fourOnly && xTube && zTube && yTube && sample.x === 13 && sample.z === 0 && sample.y === 0 && sample.fifthCase === false,
    note: 'case torus falls through to default and shares one tube body. default is not a fifth session case. Paste not rewritten.',
  };
}

export function compileSessionStage499(source) {
  const hold = noteSessionDefaultSharesTorus(source);
  return {
    current: DEFAULT_SHARES_TORUS_STAGE,
    session: DEFAULT_SHARES_TORUS_SESSION,
    living: DEFAULT_SHARES_TORUS_LIVING,
    paste: '2026-10-08 16:06 CDT',
    hold,
    next: [
      { stage: 500, title: 'hold phi still: session paste does not increment phi' },
      { stage: 501, title: 'hold infinity y as the shared tube, unread by scale' },
      { stage: 502, title: 'hold triangular tAngle unread by the theta * 5 weave' },
    ],
  };
}
