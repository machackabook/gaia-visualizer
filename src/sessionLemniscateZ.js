/** Stage 486 — lemniscate z uses the same denom as x. Document only. No secrets. */
export const LEMNISCATE_Z_STAGE = 486;
export const LEMNISCATE_Z_SESSION = 'beec41f1';
export const LEMNISCATE_Z_LIVING = '7cd81012';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleLemniscateZ(theta, major) {
  const scale = major * 1.5;
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  const denom = 1 + s * s;
  const factor = s * c;
  const x = (scale * c) / denom;
  const z = (scale * factor) / denom;
  return { theta, major, scale, denom, factor, x, z, yUsesDenom: false };
}

export function noteSessionLemniscateZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const armStart = text.indexOf("case 'infinity'");
  const armEnd = armStart >= 0 ? text.indexOf('break;', armStart) : -1;
  const arm = armStart >= 0 && armEnd > armStart ? text.slice(armStart, armEnd) : '';
  const scale = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(arm);
  const denom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(Math\.sin\(this\.theta\),\s*2\)\s*;/.test(arm);
  const zFactor = /z\s*=\s*\(scale\s*\*\s*Math\.sin\(this\.theta\)\s*\*\s*Math\.cos\(this\.theta\)\)\s*\/\s*denom\s*;/.test(arm);
  const xSame = /x\s*=\s*\(scale\s*\*\s*Math\.cos\(this\.theta\)\)\s*\/\s*denom\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const yUsesDenom = /denom/.test(yLine);
  const sample = sampleLemniscateZ(Math.PI / 4, 10);
  const sampleOk = Math.abs(sample.factor - 0.5) < 1e-12 && Math.abs(sample.denom - 1.5) < 1e-12 && Math.abs(sample.z - 5) < 1e-9;
  return {
    stage: LEMNISCATE_Z_STAGE,
    session: LEMNISCATE_Z_SESSION,
    living: LEMNISCATE_Z_LIVING,
    pinned,
    scale,
    denom,
    zFactor,
    xSame,
    yUsesDenom,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: scale && denom && zFactor && xSame && !yUsesDenom && sampleOk,
    note: 'infinity z is scale * sin(theta) * cos(theta) / denom. Same denom as x. y is not divided by denom. Paste not rewritten.',
  };
}

export function compileSessionStage486(source) {
  const hold = noteSessionLemniscateZ(source);
  return {
    current: LEMNISCATE_Z_STAGE,
    session: LEMNISCATE_Z_SESSION,
    living: LEMNISCATE_Z_LIVING,
    paste: '2026-10-07 21:06 CDT',
    hold,
    next: [
      { stage: 487, title: 'hold triangular y unread by tAngle' },
      { stage: 488, title: 'hold session lerp allocating new THREE.Vector3 at alpha 0.05' },
      { stage: 489, title: 'hold torus tube (major + minor * cos(phi)) on x and z only' },
    ],
  };
}
