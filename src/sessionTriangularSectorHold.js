/** Stage 394 — hold triangular sector angle. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_SECTOR_HOLD_STAGE = 394;
export const TRIANGULAR_SECTOR_HOLD_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_SECTOR_HOLD_LIVING_HASH = '7cd81012';
export const TRIANGULAR_SECTOR_COUNT = 3;

const PINNED_LINE = 'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));';

export function triangularSector() {
  return (Math.PI * 2) / TRIANGULAR_SECTOR_COUNT;
}

export function sessionTriangularSector(theta, major, minor, idx, t) {
  const th = Number.isFinite(theta) ? theta : 0;
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const i = Number.isFinite(idx) ? idx : 0;
  const time = Number.isFinite(t) ? t : 0;
  const sector = triangularSector();
  const bin = Math.floor(th / sector);
  const tAngle = bin * sector;
  const lane = (i % 3 - 1) * R * 0.5;
  const lift = Math.sin(time) * r;
  return {
    sector,
    bin,
    tAngle,
    vertexX: R * Math.cos(tAngle),
    vertexZ: R * Math.sin(tAngle),
    rippleX: r * Math.cos(th * 5),
    rippleZ: r * Math.sin(th * 5),
    x: R * Math.cos(tAngle) + r * Math.cos(th * 5),
    z: R * Math.sin(tAngle) + r * Math.sin(th * 5),
    lane,
    lift,
    y: lane + lift,
  };
}

export function noteSessionTriangularSectorHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasFloor = /Math\.floor\(\s*this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)/.test(text);
  const rippleOnRaw = /Math\.cos\(\s*this\.theta\s*\*\s*5\s*\)/.test(text)
    && /Math\.sin\(\s*this\.theta\s*\*\s*5\s*\)/.test(text);
  const sector = triangularSector();
  const origin = sessionTriangularSector(0, 10, 3, 1, 0);
  const before = sessionTriangularSector(sector - 1e-12, 10, 3, 1, 0);
  const first = sessionTriangularSector(sector, 10, 3, 1, 0);
  const second = sessionTriangularSector(sector * 2, 10, 3, 1, 0);
  const lane0 = sessionTriangularSector(0, 10, 3, 0, 0);
  const lane2 = sessionTriangularSector(0, 10, 3, 2, 0);
  const lifted = sessionTriangularSector(0, 10, 3, 1, Math.PI / 2);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  const threeVertices = near(origin.vertexX, 10)
    && near(origin.vertexZ, 0)
    && near(first.vertexX, -5)
    && near(first.vertexZ, (Math.sqrt(3) / 2) * 10)
    && near(second.vertexX, -5)
    && near(second.vertexZ, -(Math.sqrt(3) / 2) * 10);
  return {
    stage: TRIANGULAR_SECTOR_HOLD_STAGE,
    session: TRIANGULAR_SECTOR_HOLD_SESSION_HASH,
    living: TRIANGULAR_SECTOR_HOLD_LIVING_HASH,
    pinned,
    formula: 'tAngle = floor(theta / (2π/3)) * (2π/3)',
    hasSessionFloor: hasFloor,
    rippleOnRawTheta: rippleOnRaw,
    sector,
    origin,
    before,
    first,
    second,
    lane0,
    lane2,
    lifted,
    threeVertices,
    pasteRewritten: false,
    secrets: false,
    ok: hasFloor
      && rippleOnRaw
      && origin.bin === 0
      && origin.tAngle === 0
      && before.bin === 0
      && first.bin === 1
      && near(first.tAngle, sector)
      && second.bin === 2
      && near(second.tAngle, sector * 2)
      && threeVertices
      && lane0.lane === -5
      && lane2.lane === 5
      && lifted.lift === 3
      && lifted.y === 3,
    note: 'Stage 394 holds the triangular 2π/3 sector snap. Ripple stays on raw theta*5. Lane is (idx % 3 - 1) * major * 0.5. Paste not rewritten.',
  };
}
