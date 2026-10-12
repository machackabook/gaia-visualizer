/** Stage 608 — theta advances by (0.01 + idx * 0.002) * gravityPull. Document only. Paste not rewritten. No secrets. */
export const THETA_STEP_608_STAGE = 608;
export const THETA_STEP_608_SESSION = 'beec41f1';
export const THETA_STEP_608_LIVING = '7cd81012';

const PINNED = [
  '    this.material.uniforms.uTime.value = t;',
  '    this.material.uniforms.uGravity.value = state.gravityPull;',
  '',
  '    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
  '    ',
  '    let x, y, z;',
  '    let major = 10 + (this.idx * 2);',
].join('\n');

export function sampleThetaStep608(idx = 4, gravity = 1.2) {
  const step = (0.01 + idx * 0.002) * gravity;
  return {
    idx,
    gravity,
    step,
    base: 0.01,
    perIdx: 0.002,
    multipliedByGravity: true,
  };
}

export function noteSessionThetaStep608(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const thetaAt = text.search(/this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/);
  const uniformsBefore = text.search(/uTime\.value\s*=\s*t/) >= 0 && text.search(/uGravity\.value\s*=\s*state\.gravityPull/) >= 0;
  const sample = sampleThetaStep608();
  const okStep = Math.abs(sample.step - 0.0216) < 1e-9;
  return {
    stage: THETA_STEP_608_STAGE,
    session: THETA_STEP_608_SESSION,
    living: THETA_STEP_608_LIVING,
    pinned,
    thetaAt,
    uniformsBefore,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: thetaAt >= 0 && uniformsBefore && okStep && sample.multipliedByGravity === true,
    note: 'theta += (0.01 + this.idx * 0.002) * state.gravityPull. Step held. From stage 608 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage608(source) {
  const hold = noteSessionThetaStep608(source);
  return {
    current: THETA_STEP_608_STAGE,
    session: THETA_STEP_608_SESSION,
    living: THETA_STEP_608_LIVING,
    paste: '2026-10-12 14:09 CDT',
    hold,
    next: [
      { stage: 609, title: 'hold uniform writes as uTime then uGravity only' },
      { stage: 610, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
      { stage: 611, title: 'hold major = 10 + (idx * 2) before switch' },
    ],
  };
}
