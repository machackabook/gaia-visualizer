/** Stage 399 — hold torus tube radius major + minor * cos(phi) against the shared y. Document only. Paste not rewritten. No secrets. */
export const TORUS_TUBE_RADIUS_HOLD_STAGE = 399;
export const TORUS_TUBE_RADIUS_HOLD_SESSION_HASH = 'beec41f1';
export const TORUS_TUBE_RADIUS_HOLD_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);';
const SHARED_Y = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

export function sessionTorusTubeRadius(major, minor, phi) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  return R + r * Math.cos(tube);
}

export function sessionTorusTubeAgainstY(major, minor, phi, theta, t, idx) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const lane = Number.isFinite(idx) ? idx : 0;
  const tubeRadius = sessionTorusTubeRadius(R, r, tube);
  const y = r * Math.sin(tube) * Math.sin(time * 0.5 + lane);
  return {
    major: R,
    minor: r,
    phi: tube,
    theta: th,
    tubeRadius,
    x: tubeRadius * Math.cos(th),
    z: tubeRadius * Math.sin(th),
    y,
    yUsesTubeRadius: false,
  };
}

export function noteSessionTorusTubeRadiusHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE + '\n' + SHARED_Y : String(source);
  const hasTube = /\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)/.test(text);
  const yShared = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/.test(text);
  const yNotTube = !/y\s*=[^;]*major\s*\+\s*minor/.test(text);
  const equator = sessionTorusTubeAgainstY(10, 3, 0, 0, 0, 0);
  const pole = sessionTorusTubeAgainstY(10, 3, Math.PI / 2, 0, 0, 0);
  const inner = sessionTorusTubeAgainstY(10, 3, Math.PI, 0, 1, 2);
  const lane = sessionTorusTubeAgainstY(12, 5, 0, Math.PI / 2, 0, 4);
  const ignoresPull = sessionTorusTubeRadius(10, 3, 0) === 13;
  return {
    stage: TORUS_TUBE_RADIUS_HOLD_STAGE,
    session: TORUS_TUBE_RADIUS_HOLD_SESSION_HASH,
    living: TORUS_TUBE_RADIUS_HOLD_LIVING_HASH,
    pinned,
    formula: 'tubeRadius = major + minor * cos(phi)',
    hasSessionTube: hasTube,
    yShared,
    yNotTube,
    equator,
    pole,
    inner,
    lane,
    ignoresPull,
    pasteRewritten: false,
    secrets: false,
    ok: hasTube
      && yShared
      && yNotTube
      && equator.tubeRadius === 13
      && equator.x === 13
      && equator.z === 0
      && equator.y === 0
      && pole.tubeRadius === 10
      && inner.tubeRadius === 7
      && lane.tubeRadius === 17
      && Math.abs(lane.x) < 1e-12
      && ignoresPull,
    note: 'Stage 399 holds the torus tube radius major + minor * cos(phi) on x and z. Shared y stays minor * sin(phi) * sin(t * 0.5 + idx) and does not use the tube radius. Paste not rewritten.',
  };
}
