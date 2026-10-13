/** Stage 622 — hold triangular floor snap tAngle. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_FLOOR_HOLD_622_STAGE = 622;
export const TRIANGULAR_FLOOR_HOLD_622_SESSION = 'beec41f1';
export const TRIANGULAR_FLOOR_HOLD_622_LIVING = '7cd81012';

const PINNED_TANGLE = `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));`;

export function noteSessionTriangularFloorHold622(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TANGLE : String(source);
  const hasTAngle = /const\s+tAngle\s*=\s*\(Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)/.test(text);
  const inTriangular = /case\s*['"]triangular['"][\s\S]*?const\s+tAngle/.test(text || PINNED_TANGLE);
  return {
    stage: TRIANGULAR_FLOOR_HOLD_622_STAGE,
    session: TRIANGULAR_FLOOR_HOLD_622_SESSION,
    living: TRIANGULAR_FLOOR_HOLD_622_LIVING,
    pinned,
    hasTAngle,
    inTriangular,
    sectors: 3,
    pasteRewritten: false,
    secrets: false,
    ok: hasTAngle && inTriangular,
    note: 'Triangular tAngle floor snap to 2π/3. Raw theta*5 ripple held. From stage 622 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage622(source) {
  const hold = noteSessionTriangularFloorHold622(source);
  return {
    current: TRIANGULAR_FLOOR_HOLD_622_STAGE,
    session: TRIANGULAR_FLOOR_HOLD_622_SESSION,
    living: TRIANGULAR_FLOOR_HOLD_622_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 623, title: 'hold torus default fallthrough' },
      { stage: 624, title: 'hold lemniscate denom shared by x and z' },
      { stage: 625, title: 'hold lerp alpha 0.05 and Vector3 allocation' },
    ],
  };
}
