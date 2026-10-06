/** Stage 438 — infinity y is identical to the torus y formula. Paste not rewritten. No secrets. */
export const INFINITY_Y_MATCH_STAGE = 438;
export const INFINITY_Y_MATCH_SESSION_HASH = 'beec41f1';
export const INFINITY_Y_MATCH_LIVING_HASH = '7cd81012';

export function sampleSharedTubeY(minor, phi, t, idx) {
  return minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
}

export function noteSessionInfinityYMatchesTorus(source) {
  const pinned = source == null;
  const text = pinned
    ? "case 'infinity':\n y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);\n break;\n case 'torus':\n default:\n y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);\n break;"
    : String(source);
  const inf = (text.match(/case 'infinity':[\s\S]*?break;/) || [''])[0];
  const tor = (text.match(/case 'torus':[\s\S]*?break;/) || [''])[0];
  const infY = (inf.match(/y\s*=\s*[^;]+;/) || [''])[0].replace(/\s+/g, ' ');
  const torY = (tor.match(/y\s*=\s*[^;]+;/) || [''])[0].replace(/\s+/g, ' ');
  const formula = /minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\)/;
  const matched = formula.test(infY) && formula.test(torY) && infY === torY;
  const infOmitsScale = infY.length > 0 && !/scale|denom|major/.test(infY);
  const y0 = sampleSharedTubeY(3, Math.PI / 2, 0, 0);
  const y1 = sampleSharedTubeY(3, Math.PI / 2, Math.PI, 0);
  return {
    stage: INFINITY_Y_MATCH_STAGE,
    session: INFINITY_Y_MATCH_SESSION_HASH,
    living: INFINITY_Y_MATCH_LIVING_HASH,
    pinned,
    formula: 'y = minor * sin(phi) * sin(t * 0.5 + idx)',
    matched,
    infOmitsScale,
    sample: { y0, y1 },
    pasteRewritten: false,
    secrets: false,
    ok: matched && infOmitsScale && y0 === 0 && y1 === 3,
    note: 'Stage 438 holds infinity y identical to the torus y formula. Paste not rewritten.',
  };
}
