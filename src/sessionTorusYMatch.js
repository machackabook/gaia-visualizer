/** Stage 465 — torus y is identical to infinity y and omits the tube radius. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_Y_STAGE = 465;
export const TORUS_Y_SESSION_HASH = 'beec41f1';
export const TORUS_Y_LIVING_HASH = '7cd81012';

const Y_LINE = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  Y_LINE,
  'break;',
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  Y_LINE,
  'break;',
].join('\n');

export function sampleTorusYMatch(minor, phi, t, idx) {
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return {
    minor,
    phi,
    t,
    idx,
    infinityY: y,
    torusY: y,
    match: true,
    omitsTubeRadius: true,
  };
}

function arm(text, label) {
  const re = new RegExp("case\\s*['\"]" + label + "['\"][\\s\\S]*?break\\s*;");
  const hit = re.exec(text);
  return hit ? hit[0] : '';
}

export function noteSessionTorusYMatchesInfinity(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const infinity = arm(text, 'infinity');
  const torus = arm(text, 'torus');
  const yRe = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/;
  const infinityY = yRe.test(infinity);
  const torusY = yRe.test(torus);
  const same = infinity.includes(Y_LINE) && torus.includes(Y_LINE);
  const torusYReadsTube = /y\s*=[^;]*major/.test(torus) || /y\s*=[^;]*Math\.cos\(\s*this\.phi\s*\)/.test(torus);
  const tubeOnXZ = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*;/.test(torus)
    && /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)\s*\)\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*;/.test(torus);
  const sample = sampleTorusYMatch(3, Math.PI / 2, Math.PI, 0);
  return {
    stage: TORUS_Y_STAGE,
    session: TORUS_Y_SESSION_HASH,
    living: TORUS_Y_LIVING_HASH,
    pinned,
    infinityY,
    torusY,
    same,
    omitsTubeRadius: torusY && !torusYReadsTube,
    tubeOnXZ,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: infinityY && torusY && same && !torusYReadsTube && tubeOnXZ && sample.match && sample.omitsTubeRadius && sample.infinityY === sample.torusY,
    note: 'torus y is identical to infinity y. The tube radius stays on torus x and z only. Paste not rewritten.',
  };
}

export function compileSessionStage465(source) {
  const hold = noteSessionTorusYMatchesInfinity(source);
  return {
    current: TORUS_Y_STAGE,
    session: TORUS_Y_SESSION_HASH,
    living: TORUS_Y_LIVING_HASH,
    paste: '2026-10-07 09:09 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 466, title: 'hold lerp alpha as the literal 0.05, unscaled by gravityPull' },
      { stage: 467, title: 'hold lemniscate z as sin(theta) * cos(theta) over the same denom' },
      { stage: 468, title: 'hold theta step as the product (0.01 + idx * 0.002) * gravityPull' },
    ],
  };
}
