/** Stage 425 — triangular y stays the idx sector and is not folded into theta * 5. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_IDX_SECTOR_STAGE = 425;
export const TRIANGULAR_IDX_SECTOR_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_IDX_SECTOR_LIVING_HASH = '7cd81012';

const PINNED_TRIANGULAR = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function triangularIdxSector(idx, major, minor, t) {
  const lane = Number.isFinite(idx) ? idx : 0;
  const ring = Number.isFinite(major) ? major : 10;
  const tube = Number.isFinite(minor) ? minor : 3;
  const time = Number.isFinite(t) ? t : 0;
  const sector = (lane % 3 - 1) * ring * 0.5;
  const lift = Math.sin(time) * tube;
  return { sector, lift, y: sector + lift, yUsesTheta5: false };
}

export function triangularIdxSectorPoint(theta, t, idx, major, minor) {
  const tAngle = Math.floor(theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
  const x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
  const z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
  const held = triangularIdxSector(idx, major, minor, t);
  const folded = minor * Math.sin(theta * 5);
  return {
    x,
    y: held.y,
    z,
    tAngle,
    sector: held.sector,
    lift: held.lift,
    folded,
    yUsesTheta5: false,
  };
}

export function noteSessionTriangularIdxSector(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TRIANGULAR : String(source);
  const block = (text.match(/case\s+'triangular'[\s\S]*?break;/) || [PINNED_TRIANGULAR])[0];
  const ySector = /y = \(this\.idx % 3 - 1\) \* major \* 0\.5 \+ Math\.sin\(t\) \* minor;/.test(block);
  const yTheta5 = /y = [^;\n]*theta \* 5/.test(block);
  const xzTheta5 = /x = major \* Math\.cos\(tAngle\) \+ minor \* Math\.cos\(this\.theta \* 5\);/.test(block)
    && /z = major \* Math\.sin\(tAngle\) \+ minor \* Math\.sin\(this\.theta \* 5\);/.test(block);
  const flat = triangularIdxSectorPoint(0, 0, 0, 10, 3);
  const lifted = triangularIdxSectorPoint(Math.PI / 5, Math.PI / 2, 2, 10, 3);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: TRIANGULAR_IDX_SECTOR_STAGE,
    session: TRIANGULAR_IDX_SECTOR_SESSION_HASH,
    living: TRIANGULAR_IDX_SECTOR_LIVING_HASH,
    pinned,
    formula: 'y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor; theta * 5 stays on x and z',
    ySector,
    yTheta5,
    xzTheta5,
    flat,
    lifted,
    pasteRewritten: false,
    secrets: false,
    ok: ySector && !yTheta5 && xzTheta5
      && near(flat.y, -5) && near(flat.sector, -5) && flat.lift === 0
      && !near(flat.y, flat.folded)
      && near(lifted.sector, 5) && near(lifted.lift, 3) && near(lifted.y, 8)
      && lifted.yUsesTheta5 === false && !near(lifted.y, lifted.folded),
    note: 'Stage 425 holds triangular y on the idx sector plus the sin(t) * minor lift. theta * 5 stays on the x and z ripple. Paste not rewritten.',
  };
}
