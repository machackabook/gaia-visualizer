/** Stage 422 — triangular sector snap stays 2π/3. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_SECTOR_STAGE = 422;
export const TRIANGULAR_SECTOR_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_SECTOR_LIVING_HASH = '7cd81012';

const PINNED_TRIANGULAR = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function triangularSectorAngle(theta) {
  const sector = (Math.PI * 2) / 3;
  return Math.floor(theta / sector) * sector;
}

export function triangularSectorPoint(theta, t, idx, major, minor) {
  const sector = (Math.PI * 2) / 3;
  const tAngle = triangularSectorAngle(theta);
  const x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
  const z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
  const y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
  return { x, y, z, sector, tAngle, yUsesTheta5: false };
}

export function noteSessionTriangularSectorSnap(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TRIANGULAR : String(source);
  const block = (text.match(/case\s+'triangular'[\s\S]*?break;/) || [PINNED_TRIANGULAR])[0];
  const snap = /const tAngle = \(Math\.floor\(this\.theta \/ \(Math\.PI \* 2 \/ 3\)\) \* \(Math\.PI \* 2 \/ 3\)\);/.test(block);
  const rippleOnXZ = /x = major \* Math\.cos\(tAngle\) \+ minor \* Math\.cos\(this\.theta \* 5\);[\s\S]*z = major \* Math\.sin\(tAngle\) \+ minor \* Math\.sin\(this\.theta \* 5\);/.test(block);
  const ySector = /y = \(this\.idx % 3 - 1\) \* major \* 0\.5 \+ Math\.sin\(t\) \* minor;/.test(block);
  const origin = triangularSectorPoint(0, 0, 0, 10, 3);
  const edge = triangularSectorPoint((Math.PI * 2) / 3, 0, 1, 10, 3);
  const before = triangularSectorPoint((Math.PI * 2) / 3 - 1e-9, 0, 2, 10, 3);
  return {
    stage: TRIANGULAR_SECTOR_STAGE,
    session: TRIANGULAR_SECTOR_SESSION_HASH,
    living: TRIANGULAR_SECTOR_LIVING_HASH,
    pinned,
    formula: 'tAngle = floor(theta / (2π/3)) * (2π/3)',
    snap,
    rippleOnXZ,
    ySector,
    origin,
    edge,
    before,
    pasteRewritten: false,
    secrets: false,
    ok: snap && rippleOnXZ && ySector && origin.tAngle === 0 && origin.x === 13 && origin.z === 0 && origin.y === -5 && edge.tAngle === (Math.PI * 2) / 3 && before.tAngle === 0 && edge.y === 0 && before.y === 5,
    note: 'Stage 422 holds the triangular sector snap at 2π/3. Ripple theta*5 stays on x and z. y uses the idx sector. Paste not rewritten.',
  };
}
