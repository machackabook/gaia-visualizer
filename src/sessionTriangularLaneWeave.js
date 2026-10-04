/** Stage 413 — hold triangular y sector independent of the high-frequency weave. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_LANE_WEAVE_STAGE = 413;
export const TRIANGULAR_LANE_WEAVE_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_LANE_WEAVE_LIVING_HASH = '7cd81012';

const PINNED_Y = 'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;';

export function triangularLane(idx, major, t, minor) {
  const i = Number.isFinite(idx) ? idx : 0;
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const time = Number.isFinite(t) ? t : 0;
  const sector = (i % 3 - 1) * R * 0.5;
  const lift = Math.sin(time) * r;
  return { sector, lift, y: sector + lift, yUsesHighFreq: false };
}

export function noteSessionTriangularLaneWeave(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_Y : String(source);
  const held = /y\s*=\s*\(this\.idx\s*%\s*3\s*-\s*1\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(t\)\s*\*\s*minor/.test(text);
  const yUsesFreq = /y\s*=[^;\n]*this\.theta\s*\*\s*5/.test(text);
  const lane0 = triangularLane(0, 10, 0, 3);
  const lane2 = triangularLane(2, 14, 0, 8);
  const lifted = triangularLane(1, 10, Math.PI / 2, 3);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: TRIANGULAR_LANE_WEAVE_STAGE,
    session: TRIANGULAR_LANE_WEAVE_SESSION_HASH,
    living: TRIANGULAR_LANE_WEAVE_LIVING_HASH,
    pinned,
    formula: 'y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor',
    held,
    yUsesFreq,
    lane0,
    lane2,
    lifted,
    pasteRewritten: false,
    secrets: false,
    ok: held && !yUsesFreq && near(lane0.sector, -5) && near(lane0.y, -5) && near(lane2.sector, 7) && near(lane2.y, 7) && near(lifted.y, 3) && lane0.yUsesHighFreq === false,
    note: 'Stage 413 holds the triangular y sector (idx % 3 - 1) * major * 0.5 independent of the theta*5 weave. Weave stays on x and z. Paste not rewritten.',
  };
}
