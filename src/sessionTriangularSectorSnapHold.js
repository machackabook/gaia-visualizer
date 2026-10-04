/** Stage 403 — hold triangular sector snap independent of the y ripple. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_SECTOR_SNAP_HOLD_STAGE = 403;
export const TRIANGULAR_SECTOR_SNAP_HOLD_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_SECTOR_SNAP_HOLD_LIVING_HASH = '7cd81012';

const PINNED_BLOCK = [
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
].join('\n');

export function sessionTriangularSectorSnap(theta, major, minor, idx, t) {
  const th = Number.isFinite(theta) ? theta : 0;
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const i = Number.isFinite(idx) ? idx : 0;
  const time = Number.isFinite(t) ? t : 0;
  const sector = (Math.PI * 2) / 3;
  const tAngle = Math.floor(th / sector) * sector;
  const vertexX = R * Math.cos(tAngle);
  const vertexZ = R * Math.sin(tAngle);
  const rippleX = r * Math.cos(th * 5);
  const rippleZ = r * Math.sin(th * 5);
  const lane = (i % 3 - 1) * R * 0.5;
  const yRipple = Math.sin(time) * r;
  return {
    sector,
    tAngle,
    vertexX,
    vertexZ,
    rippleX,
    rippleZ,
    x: vertexX + rippleX,
    z: vertexZ + rippleZ,
    lane,
    yRipple,
    y: lane + yRipple,
    snapUsesY: false,
    snapUsesT: false,
    snapUsesMinor: false,
  };
}

export function noteSessionTriangularSectorSnapHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_BLOCK : String(source);
  const hasFloor = /Math\.floor\(\s*this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)/.test(text);
  const xzUsesTAngle = /Math\.cos\(tAngle\)/.test(text) && /Math\.sin\(tAngle\)/.test(text);
  const yIgnoresTAngle = /Math\.sin\(\s*t\s*\)\s*\*\s*minor/.test(text) && !/y\s*=[\s\S]*tAngle/.test(text);
  const still = sessionTriangularSectorSnap(0.4, 10, 3, 1, 0);
  const later = sessionTriangularSectorSnap(0.4, 10, 3, 1, Math.PI / 2);
  const wider = sessionTriangularSectorSnap(0.4, 10, 8, 1, 1.2);
  const nextBin = sessionTriangularSectorSnap((Math.PI * 2) / 3, 10, 3, 1, 0);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  return {
    stage: TRIANGULAR_SECTOR_SNAP_HOLD_STAGE,
    session: TRIANGULAR_SECTOR_SNAP_HOLD_SESSION_HASH,
    living: TRIANGULAR_SECTOR_SNAP_HOLD_LIVING_HASH,
    pinned,
    formula: 'tAngle snaps on theta only; y ripple sin(t) * minor does not move the sector',
    hasFloor,
    xzUsesTAngle,
    yIgnoresTAngle,
    still,
    later,
    wider,
    nextBin,
    pasteRewritten: false,
    secrets: false,
    ok: hasFloor && xzUsesTAngle && yIgnoresTAngle
      && still.tAngle === later.tAngle && still.tAngle === wider.tAngle
      && still.x === later.x && still.z === later.z
      && later.yRipple === 3 && still.yRipple === 0
      && still.snapUsesY === false && still.snapUsesT === false && still.snapUsesMinor === false
      && near(wider.rippleX, 8 * Math.cos(0.4 * 5))
      && nextBin.tAngle !== still.tAngle,
    note: 'Stage 403 holds the triangular sector snap off the y ripple. t and minor move y (and the theta*5 tube ripple) without retargeting tAngle. Paste not rewritten.',
  };
}
