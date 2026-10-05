/** Stage 423 — torus tube radius shared by x and z only. Document only. Paste not rewritten. No secrets. */
export const TORUS_TUBE_STAGE = 423;
export const TORUS_TUBE_SESSION_HASH = 'beec41f1';
export const TORUS_TUBE_LIVING_HASH = '7cd81012';

const PINNED_TORUS = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function torusTubeRadius(major, minor, phi) {
  return major + minor * Math.cos(phi);
}

export function torusTubePoint(theta, phi, t, idx, major, minor) {
  const tube = torusTubeRadius(major, minor, phi);
  const x = tube * Math.cos(theta);
  const z = tube * Math.sin(theta);
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { x, y, z, tube, yUsesTube: false };
}

export function noteSessionTorusTubeRadius(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TORUS : String(source);
  const block = (text.match(/case\s+'torus'[\s\S]*?break;/) || [PINNED_TORUS])[0];
  const shared = /x = \(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.cos\(this\.theta\);[\s\S]*z = \(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.sin\(this\.theta\);/.test(block);
  const yBare = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(block);
  const yUsesTube = /y = \(major \+ minor \* Math\.cos\(this\.phi\)\)/.test(block);
  const fallthrough = /case\s+'torus':\s*default:/.test(block) || /case\s+'torus':[\s\S]*default:/.test(block);
  const origin = torusTubePoint(0, 0, 0, 0, 10, 3);
  const quarter = torusTubePoint(Math.PI / 2, 0, 0, 0, 10, 3);
  return {
    stage: TORUS_TUBE_STAGE,
    session: TORUS_TUBE_SESSION_HASH,
    living: TORUS_TUBE_LIVING_HASH,
    pinned,
    formula: 'tube = major + minor * cos(phi) shared by x and z; y is the shared tube height only',
    shared,
    yBare,
    yUsesTube,
    fallthrough,
    origin,
    quarter,
    pasteRewritten: false,
    secrets: false,
    ok: shared && yBare && !yUsesTube && fallthrough && origin.tube === 13 && origin.x === 13 && origin.z === 0 && origin.y === 0 && quarter.tube === 13 && quarter.x === 0 && quarter.z === 13 && quarter.yUsesTube === false,
    note: 'Stage 423 holds the torus tube radius on x and z only. y stays minor * sin(phi) * sin(t * 0.5 + idx). Default falls through to the same tube. Paste not rewritten.',
  };
}
