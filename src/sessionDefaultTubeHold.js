/** Stage 402 — hold default fallthrough sharing the torus tube radius. Document only. Paste not rewritten. No secrets. */
export const DEFAULT_TUBE_HOLD_STAGE = 402;
export const DEFAULT_TUBE_HOLD_SESSION_HASH = 'beec41f1';
export const DEFAULT_TUBE_HOLD_LIVING_HASH = '7cd81012';

const PINNED_BLOCK = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

export function sessionDefaultTube(major, minor, phi, theta, t, idx) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const lane = Number.isFinite(idx) ? idx : 0;
  const tubeRadius = R + r * Math.cos(tube);
  return {
    tubeRadius,
    x: tubeRadius * Math.cos(th),
    z: tubeRadius * Math.sin(th),
    y: r * Math.sin(tube) * Math.sin(time * 0.5 + lane),
    sharedWithTorus: true,
    usesLemniscateScale: false,
  };
}

export function noteSessionDefaultTubeHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_BLOCK : String(source);
  const fallthrough = /case\s*['\"]torus['\"]\s*:\s*default\s*:/.test(text);
  const hasTube = /\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)/.test(text);
  const sharedY = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/.test(text);
  const separateDefault = /default\s*:\s*\{/.test(text);
  const equator = sessionDefaultTube(10, 3, 0, 0, 0, 0);
  const inner = sessionDefaultTube(10, 3, Math.PI, 0, 0, 0);
  const quarter = sessionDefaultTube(10, 3, 0, Math.PI / 2, 0, 1);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: DEFAULT_TUBE_HOLD_STAGE,
    session: DEFAULT_TUBE_HOLD_SESSION_HASH,
    living: DEFAULT_TUBE_HOLD_LIVING_HASH,
    pinned,
    formula: "case 'torus': default: tubeRadius = major + minor * cos(phi)",
    fallthrough,
    hasTube,
    sharedY,
    separateDefault,
    equator,
    inner,
    quarter,
    pasteRewritten: false,
    secrets: false,
    ok: fallthrough && hasTube && sharedY && !separateDefault
      && equator.tubeRadius === 13 && equator.x === 13 && equator.z === 0 && equator.y === 0
      && equator.sharedWithTorus === true && equator.usesLemniscateScale === false
      && inner.tubeRadius === 7 && inner.x === 7
      && near(quarter.x, 0) && near(quarter.z, 13) && quarter.tubeRadius === 13,
    note: 'Stage 402 holds the default fallthrough on the same torus tube radius. An unrecognized label does not open a fifth session formula. Paste not rewritten.',
  };
}
