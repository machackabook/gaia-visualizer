/** Stage 429 — infinity y stays shared with torus y and does not take lemniscate scale. Document only. Paste not rewritten. No secrets. */
export const INFINITY_Y_STAGE = 429;
export const INFINITY_Y_SESSION_HASH = 'beec41f1';
export const INFINITY_Y_LIVING_HASH = '7cd81012';

const PINNED_INFINITY_Y = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';
const PINNED_TORUS_Y = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

export function sessionInfinityY(minor, phi, t, idx, scale) {
  const m = Number.isFinite(minor) ? minor : 3;
  const p = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  const s = Number.isFinite(scale) ? scale : 15;
  const y = m * Math.sin(p) * Math.sin(time * 0.5 + i);
  return {
    y,
    torusY: y,
    scale: s,
    yUsesScale: false,
    sharedWithTorus: true,
  };
}

export function noteSessionInfinityYShared(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY_Y : String(source);
  const infinityY = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(text);
  const usesScale = /case 'infinity':[\s\S]*?y =[^;\n]*scale/.test(text);
  const sample = sessionInfinityY(3, Math.PI / 2, 0, 1, 15);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: INFINITY_Y_STAGE,
    session: INFINITY_Y_SESSION_HASH,
    living: INFINITY_Y_LIVING_HASH,
    pinned,
    formula: 'infinity y = torus y = minor * sin(phi) * sin(t * 0.5 + idx); scale is unused on y',
    infinityY,
    torusY: PINNED_TORUS_Y === PINNED_INFINITY_Y,
    usesScale,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: infinityY && !usesScale && sample.sharedWithTorus && sample.yUsesScale === false
      && near(sample.y, sample.torusY) && near(sample.y, 3 * Math.sin(0.5 + 1)),
    note: 'Stage 429 holds infinity y on the torus tube formula. Lemniscate scale = major * 1.5 stays on x and z only. Paste not rewritten.',
  };
}
