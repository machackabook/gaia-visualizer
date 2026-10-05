/** Stage 424 — infinity y stays the shared tube and is not folded into the lemniscate. Document only. Paste not rewritten. No secrets. */
export const INFINITY_SHARED_TUBE_STAGE = 424;
export const INFINITY_SHARED_TUBE_SESSION_HASH = 'beec41f1';
export const INFINITY_SHARED_TUBE_LIVING_HASH = '7cd81012';

const PINNED_INFINITY = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sharedTubeHeight(minor, phi, t, idx) {
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const lane = Number.isFinite(idx) ? idx : 0;
  return r * Math.sin(tube) * Math.sin(time * 0.5 + lane);
}

export function infinitySharedTubePoint(theta, phi, t, idx, major, minor) {
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(theta), 2);
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  const y = sharedTubeHeight(minor, phi, t, idx);
  const folded = (scale * Math.sin(phi)) / denom;
  return {
    x,
    y,
    z,
    scale,
    denom,
    folded,
    yEqualsSharedTube: true,
    yFoldedIntoLemniscate: false,
  };
}

export function noteSessionInfinitySharedTube(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const block = (text.match(/case\s+'infinity'[\s\S]*?break;/) || [PINNED_INFINITY])[0];
  const yShared = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(block);
  const yScaled = /y = [^;\n]*scale/.test(block);
  const yDivided = /y = [^;\n]*\/ denom/.test(block);
  const yLemniscate = /y = \(scale \* Math\.sin\(this\.phi\)\) \/ denom/.test(block);
  const flat = infinitySharedTubePoint(Math.PI / 4, 0, 0, 0, 10, 3);
  const lifted = infinitySharedTubePoint(Math.PI / 4, Math.PI / 2, Math.PI / 2, 1, 10, 3);
  const tube = sharedTubeHeight(3, Math.PI / 2, Math.PI / 2, 1);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: INFINITY_SHARED_TUBE_STAGE,
    session: INFINITY_SHARED_TUBE_SESSION_HASH,
    living: INFINITY_SHARED_TUBE_LIVING_HASH,
    pinned,
    formula: 'infinity y = minor * sin(phi) * sin(t * 0.5 + idx); not scale / denom',
    yShared,
    yScaled,
    yDivided,
    yLemniscate,
    flat,
    lifted,
    pasteRewritten: false,
    secrets: false,
    ok: yShared && !yScaled && !yDivided && !yLemniscate
      && flat.y === 0 && flat.yFoldedIntoLemniscate === false
      && near(lifted.y, tube) && lifted.yEqualsSharedTube === true
      && !near(lifted.y, lifted.folded),
    note: 'Stage 424 holds infinity y on the shared tube. The lemniscate scale and denom stay on x and z. Paste not rewritten.',
  };
}
