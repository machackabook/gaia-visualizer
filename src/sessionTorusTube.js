/** Stage 489 — torus tube radius is on x and z only. Document only. No secrets. */
export const TORUS_TUBE_STAGE = 489;
export const TORUS_TUBE_SESSION = 'beec41f1';
export const TORUS_TUBE_LIVING = '7cd81012';

const PINNED = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleTorusTube(major, minor, phi, theta) {
  const tube = major + minor * Math.cos(phi);
  return {
    major,
    minor,
    phi,
    theta,
    tube,
    x: tube * Math.cos(theta),
    z: tube * Math.sin(theta),
    yUsesTube: false,
  };
}

export function noteSessionTorusTube(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const armStart = text.indexOf("case 'torus'");
  const armEnd = armStart >= 0 ? text.indexOf('break;', armStart) : -1;
  const arm = armStart >= 0 && armEnd > armStart ? text.slice(armStart, armEnd) : '';
  const sharedDefault = /case\s+'torus'\s*:\s*default\s*:/.test(arm) || /case\s+'torus'\s*:\s*\n\s*default\s*:/.test(arm);
  const xTube = /x\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.cos\(this\.theta\)\s*;/.test(arm);
  const zTube = /z\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.sin\(this\.theta\)\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const yShared = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)\s*;/.test(yLine);
  const yUsesTube = /major\s*\+\s*minor/.test(yLine);
  const sample = sampleTorusTube(10, 3, 0, 0);
  const sampleOk = sample.tube === 13 && sample.x === 13 && sample.z === 0 && sample.yUsesTube === false;
  return {
    stage: TORUS_TUBE_STAGE,
    session: TORUS_TUBE_SESSION,
    living: TORUS_TUBE_LIVING,
    pinned,
    sharedDefault,
    xTube,
    zTube,
    yShared,
    yUsesTube,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: sharedDefault && xTube && zTube && yShared && !yUsesTube && sampleOk,
    note: 'torus/default tube (major + minor * cos(phi)) multiplies x and z only. y is the shared minor * sin(phi) * sin(t * 0.5 + idx) line. Paste not rewritten.',
  };
}

export function compileSessionStage489(source) {
  const hold = noteSessionTorusTube(source);
  return {
    current: TORUS_TUBE_STAGE,
    session: TORUS_TUBE_SESSION,
    living: TORUS_TUBE_LIVING,
    paste: '2026-10-07 22:06 CDT',
    hold,
    next: [
      { stage: 490, title: 'hold hamiltonian lift sin(t) * 2 unread by hScale' },
      { stage: 491, title: 'hold minor = 3 + toroidalWeave * 2 as the only weave consumer in the radii block' },
      { stage: 492, title: 'hold uTime then uGravity as the only material writes' },
    ],
  };
}
