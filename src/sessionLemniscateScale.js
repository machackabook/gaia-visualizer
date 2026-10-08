/** Stage 498 — lemniscate scale stays major * 1.5 and is unread by minor. Document only. Paste not rewritten. No secrets. */
export const LEMNISCATE_SCALE_STAGE = 498;
export const LEMNISCATE_SCALE_SESSION = 'beec41f1';
export const LEMNISCATE_SCALE_LIVING = '7cd81012';
export const LEMNISCATE_SCALE_FACTOR = 1.5;

const PINNED = [
  "case 'infinity':",
  '    const scale = major * 1.5;',
  '    const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  '    x = (scale * Math.cos(this.theta)) / denom;',
  '    z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  '    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

export function sampleLemniscateScale(major = 10, minor = 7) {
  return {
    major,
    minor,
    scale: major * LEMNISCATE_SCALE_FACTOR,
    readsMinor: false,
    factor: LEMNISCATE_SCALE_FACTOR,
  };
}

export function noteSessionLemniscateScale(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = (text.match(/case\s+'infinity':[\s\S]*?break;/) || [text])[0];
  const scaleLine = (arm.match(/const\s+scale\s*=\s*[^;]+;/) || [''])[0];
  const scaleIsMajor = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(scaleLine);
  const scaleUnreadByMinor = scaleLine.length > 0 && !/minor/.test(scaleLine);
  const xUsesScale = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom\s*;/.test(arm);
  const zUsesScale = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(this\.theta\)\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom\s*;/.test(arm);
  const yStillReadsMinor = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)/.test(arm);
  const sample = sampleLemniscateScale();
  return {
    stage: LEMNISCATE_SCALE_STAGE,
    session: LEMNISCATE_SCALE_SESSION,
    living: LEMNISCATE_SCALE_LIVING,
    pinned,
    scaleIsMajor,
    scaleUnreadByMinor,
    xUsesScale,
    zUsesScale,
    yStillReadsMinor,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: scaleIsMajor && scaleUnreadByMinor && xUsesScale && zUsesScale && yStillReadsMinor && sample.scale === 15 && sample.readsMinor === false,
    note: 'infinity scale is major * 1.5. x and z divide that scale by denom. minor still feeds y only. Paste not rewritten.',
  };
}

export function compileSessionStage498(source) {
  const hold = noteSessionLemniscateScale(source);
  return {
    current: LEMNISCATE_SCALE_STAGE,
    session: LEMNISCATE_SCALE_SESSION,
    living: LEMNISCATE_SCALE_LIVING,
    paste: '2026-10-08 14:06 CDT',
    hold,
    next: [
      { stage: 499, title: 'hold default as sharing the torus tube, not a fifth session case' },
      { stage: 500, title: 'hold phi still: session paste does not increment phi' },
      { stage: 501, title: 'hold infinity y as the shared tube, unread by scale' },
    ],
  };
}
