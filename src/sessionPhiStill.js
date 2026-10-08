/** Stage 500 — session paste does not increment phi. Document only. Paste not rewritten. No secrets. */
export const PHI_STILL_STAGE = 500;
export const PHI_STILL_SESSION = 'beec41f1';
export const PHI_STILL_LIVING = '7cd81012';

const PINNED = [
  '    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  '            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  '            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
].join('\n');

export function samplePhiStill(phi = 0.4, theta = 0, idx = 0, gravityPull = 1) {
  const nextTheta = theta + (0.01 + idx * 0.002) * gravityPull;
  return {
    phiIn: phi,
    phiOut: phi,
    thetaOut: nextTheta,
    phiWritten: false,
  };
}

export function noteSessionPhiStill(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const thetaStep = /this\.theta\s*\+=\s*\(0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const phiWrite = /this\.phi\s*(\+=|=)/.test(text);
  const phiRead = /Math\.(sin|cos)\(this\.phi\)/.test(text);
  const sample = samplePhiStill();
  return {
    stage: PHI_STILL_STAGE,
    session: PHI_STILL_SESSION,
    living: PHI_STILL_LIVING,
    pinned,
    thetaStep,
    phiWrite,
    phiRead,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: thetaStep && !phiWrite && phiRead && sample.phiOut === sample.phiIn && sample.phiWritten === false,
    note: 'theta advances with (0.01 + idx * 0.002) * gravityPull. phi is only read. Paste not rewritten.',
  };
}

export function compileSessionStage500(source) {
  const hold = noteSessionPhiStill(source);
  return {
    current: PHI_STILL_STAGE,
    session: PHI_STILL_SESSION,
    living: PHI_STILL_LIVING,
    paste: '2026-10-08 17:06 CDT',
    hold,
    next: [
      { stage: 501, title: 'hold infinity y as the shared tube, unread by scale' },
      { stage: 502, title: 'hold triangular tAngle unread by the theta * 5 weave' },
      { stage: 503, title: 'hold hamiltonian lift unread by hScale' },
    ],
  };
}
