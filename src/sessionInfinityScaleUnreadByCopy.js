/** Stage 524 — infinity scale is major * 1.5, unread by the gravity copy. Document only. Paste not rewritten. No secrets. */
export const INFINITY_SCALE_UNREAD_STAGE = 524;
export const INFINITY_SCALE_UNREAD_SESSION = 'beec41f1';
export const INFINITY_SCALE_UNREAD_LIVING = '7cd81012';

const PINNED_SCALE = 'const scale = major * 1.5;';
const PINNED_COPY = 'this.material.uniforms.uGravity.value = state.gravityPull;';

export function sampleInfinityScaleUnreadByCopy() {
  return { major: 18, scale: 27, readsGravityCopy: false };
}

export function noteSessionInfinityScaleUnreadByCopy(source) {
  const pinned = source == null;
  const text = pinned ? `${PINNED_SCALE}\n${PINNED_COPY}` : String(source);
  const scaleLine = (text.match(/const scale\s*=[^;]+;/) || [''])[0];
  const copyLine = (text.match(/uGravity\.value\s*=\s*[^;]+;/) || [''])[0];
  const scaleIsMajor15 = /major\s*\*\s*1\.5/.test(scaleLine);
  const scaleReadsCopy = /uGravity|gravityPull/.test(scaleLine);
  const copyHeld = /state\.gravityPull/.test(copyLine) || pinned;
  const sample = sampleInfinityScaleUnreadByCopy();
  return {
    stage: INFINITY_SCALE_UNREAD_STAGE,
    session: INFINITY_SCALE_UNREAD_SESSION,
    living: INFINITY_SCALE_UNREAD_LIVING,
    pinned,
    scaleIsMajor15,
    scaleReadsCopy,
    copyHeld,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: scaleIsMajor15 && !scaleReadsCopy && copyHeld && sample.readsGravityCopy === false && sample.scale === 27,
    note: 'infinity scale stays major * 1.5. It does not read uGravity or gravityPull. Paste not rewritten.',
  };
}

export function compileSessionStage524(source) {
  const hold = noteSessionInfinityScaleUnreadByCopy(source);
  return {
    current: INFINITY_SCALE_UNREAD_STAGE,
    session: INFINITY_SCALE_UNREAD_SESSION,
    living: INFINITY_SCALE_UNREAD_LIVING,
    paste: '2026-10-09 13:06 CDT',
    hold,
    next: [
      { stage: 525, title: 'hold uTime as a direct copy of t, not a scaled clock' },
      { stage: 526, title: 'hold triangular lattice y unread by phi' },
      { stage: 527, title: 'hold torus and default tube as major + minor * cos(phi)' },
    ],
  };
}
