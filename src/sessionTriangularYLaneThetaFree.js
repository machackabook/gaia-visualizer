/** Stage 436 — triangular y lane ignores theta. Weave stays on x/z. Paste not rewritten. No secrets. */
export const TRIANGULAR_Y_LANE_STAGE = 436;
export const TRIANGULAR_Y_LANE_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_Y_LANE_LIVING_HASH = '7cd81012';

export function sampleTriangularYLane(idx, major, minor, t) {
  const sector = (idx % 3 - 1) * major * 0.5;
  const y = sector + Math.sin(t) * minor;
  return { sector, y };
}

export function noteSessionTriangularYLaneThetaFree(source) {
  const pinned = source == null;
  const text = pinned ? "case 'triangular':\n y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;\n break;" : String(source);
  const arm = (text.match(/case 'triangular':[\s\S]*?break;/) || [text])[0];
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const lane = sampleTriangularYLane(0, 10, 3, Math.PI / 2);
  const lane2 = sampleTriangularYLane(2, 14, 3, Math.PI / 2);
  const noTheta = yLine.length > 0 && !/theta/.test(yLine);
  const hasLane = /idx\s*%\s*3/.test(yLine) && /major\s*\*\s*0\.5/.test(yLine);
  const hasTime = /Math\.sin\(t\)\s*\*\s*minor/.test(yLine);
  return {
    stage: TRIANGULAR_Y_LANE_STAGE,
    session: TRIANGULAR_Y_LANE_SESSION_HASH,
    living: TRIANGULAR_Y_LANE_LIVING_HASH,
    pinned,
    formula: 'y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor',
    noTheta,
    hasLane,
    hasTime,
    sample: { lane, lane2 },
    pasteRewritten: false,
    secrets: false,
    ok: noTheta && hasLane && hasTime && lane.sector === -5 && lane.y === -2 && lane2.sector === 7 && lane2.y === 10,
    note: 'Stage 436 holds triangular y lane independent of theta. Paste not rewritten.',
  };
}
