/** Stage 525 — uTime is a direct copy of t, not a scaled clock. Document only. Paste not rewritten. No secrets. */
export const UTIME_DIRECT_STAGE = 525;
export const UTIME_DIRECT_SESSION = 'beec41f1';
export const UTIME_DIRECT_LIVING = '7cd81012';

const PINNED_UTIME = 'this.material.uniforms.uTime.value = t;';

export function sampleUTimeDirectCopy() {
  return { t: 4.2, uTime: 4.2, scaled: false };
}

export function noteSessionUTimeDirectCopy(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_UTIME : String(source);
  const timeLine = (text.match(/uTime\.value\s*=\s*[^;]+;/) || [''])[0];
  const directCopy = /uTime\.value\s*=\s*t\s*;/.test(timeLine);
  const scaled = /uTime\.value\s*=\s*t\s*\*/.test(timeLine) || /\*\s*t\s*;/.test(timeLine);
  const sample = sampleUTimeDirectCopy();
  return {
    stage: UTIME_DIRECT_STAGE,
    session: UTIME_DIRECT_SESSION,
    living: UTIME_DIRECT_LIVING,
    pinned,
    directCopy,
    scaled,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: directCopy && !scaled && sample.scaled === false && sample.uTime === sample.t,
    note: 'uTime copies t. It is not a scaled clock. Paste not rewritten.',
  };
}

export function compileSessionStage525(source) {
  const hold = noteSessionUTimeDirectCopy(source);
  return {
    current: UTIME_DIRECT_STAGE,
    session: UTIME_DIRECT_SESSION,
    living: UTIME_DIRECT_LIVING,
    paste: '2026-10-09 14:06 CDT',
    hold,
    next: [
      { stage: 526, title: 'hold triangular lattice y unread by phi' },
      { stage: 527, title: 'hold torus and default tube as major + minor * cos(phi)' },
      { stage: 528, title: 'hold lemniscate denom shared by x and z only' },
    ],
  };
}
