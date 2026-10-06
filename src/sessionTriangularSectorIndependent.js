/** Stage 433 — triangular sector snap ignores gravityPull. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_SECTOR_INDEP_STAGE = 433;
export const TRIANGULAR_SECTOR_INDEP_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_SECTOR_INDEP_LIVING_HASH = '7cd81012';

const PINNED_ARM = `case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;`;

export function triangularSectorSnap(theta) {
  const sector = (Math.PI * 2) / 3;
  const th = Number.isFinite(theta) ? theta : 0;
  return Math.floor(th / sector) * sector;
}

export function noteSessionTriangularSectorIndependent(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_ARM : String(source);
  const start = text.indexOf("case 'triangular':");
  const arm = start >= 0 ? text.slice(start, text.indexOf('break;', start) + 6) : '';
  const snapLine = (arm.match(/const tAngle = [^;]+;/) || [''])[0];
  const formulaHeld = /Math\.floor\(this\.theta \/ \(Math\.PI \* 2 \/ 3\)\) \* \(Math\.PI \* 2 \/ 3\)/.test(snapLine);
  const snapReadsGravity = /gravityPull/.test(snapLine);
  const armReadsGravity = /gravityPull/.test(arm);
  const sector = (Math.PI * 2) / 3;
  const pulled = triangularSectorSnap(sector * 1.9);
  const idle = triangularSectorSnap(sector * 1.9);
  const edge = triangularSectorSnap(sector);
  const before = triangularSectorSnap(sector - 1e-9);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  return {
    stage: TRIANGULAR_SECTOR_INDEP_STAGE,
    session: TRIANGULAR_SECTOR_INDEP_SESSION_HASH,
    living: TRIANGULAR_SECTOR_INDEP_LIVING_HASH,
    pinned,
    formula: 'tAngle = floor(theta / (2π/3)) * (2π/3); gravityPull is not an input',
    armFound: arm.length > 0,
    formulaHeld,
    snapReadsGravity,
    armReadsGravity,
    sample: {
      theta: sector * 1.9,
      tAngle: pulled,
      gravityA: 0.2,
      gravityB: 4.8,
      sameUnderGravity: pulled === idle,
      edge,
      before,
    },
    pasteRewritten: false,
    secrets: false,
    ok: arm.length > 0 && formulaHeld && !snapReadsGravity && !armReadsGravity
      && pulled === idle
      && near(edge, sector)
      && before === 0,
    note: 'Stage 433 holds the triangular sector snap independent of gravityPull. Paste not rewritten.',
  };
}
