/** Stage 1031 — triangular floor snap to 2π/3 and y sector free of theta*5. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_FLOOR_STAGE = 1031;
export const TRIANGULAR_FLOOR_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_FLOOR_LIVING_HASH = '7cd81012';

export function noteSessionTriangularFloor(source) {
  const text = source == null ? '' : String(source);
  const hasTAngle = /const tAngle = \(Math\.floor\(this\.theta \/ \(Math\.PI \* 2 \/ 3\)\) \* \(Math\.PI \* 2 \/ 3\)\);/.test(text);
  const xUses = /x = major \* Math\.cos\(tAngle\) \+ minor \* Math\.cos\(this\.theta \* 5\);/.test(text);
  const zUses = /z = major \* Math\.sin\(tAngle\) \+ minor \* Math\.sin\(this\.theta \* 5\);/.test(text);
  const yFree = /y = \(this\.idx % 3 - 1\) \* major \* 0\.5 \+ Math\.sin\(t\) \* minor;/.test(text);
  return {
    stage: TRIANGULAR_FLOOR_STAGE,
    session: TRIANGULAR_FLOOR_SESSION_HASH,
    living: TRIANGULAR_FLOOR_LIVING_HASH,
    hasTAngle,
    xUses,
    zUses,
    yFree,
    pasteRewritten: false,
    secrets: false,
    ok: hasTAngle && xUses && zUses && yFree,
    note: 'Stage 1031 holds triangular floor snap to 2π/3; y sector free of theta*5 ripple. Paste not rewritten.',
  };
}
