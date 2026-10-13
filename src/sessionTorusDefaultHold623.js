/** Stage 623 — hold torus default fallthrough. case 'torus': immediately followed by default:. Shared tube body. Document only. Paste not rewritten. No secrets. */
export const TORUS_DEFAULT_HOLD_623_STAGE = 623;
export const TORUS_DEFAULT_HOLD_623_SESSION = 'beec41f1';
export const TORUS_DEFAULT_HOLD_623_LIVING = '7cd81012';

const PINNED = `case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;`;

export function noteSessionTorusDefaultHold623(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const torusThenDefault = /case\s*['"]torus['"]\s*:\s*default\s*:/.test(text);
  const hasTubeX = /x\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.cos\(this\.theta\)/.test(text);
  const hasTubeZ = /z\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.sin\(this\.theta\)/.test(text);
  const hasSharedY = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/.test(text);
  const onlyFour = (text.match(/case\s*['"]/g) || []).length === 4;
  return {
    stage: TORUS_DEFAULT_HOLD_623_STAGE,
    session: TORUS_DEFAULT_HOLD_623_SESSION,
    living: TORUS_DEFAULT_HOLD_623_LIVING,
    pinned,
    torusThenDefault,
    hasTubeX,
    hasTubeZ,
    hasSharedY,
    onlyFour,
    pasteRewritten: false,
    secrets: false,
    ok: torusThenDefault && hasTubeX && hasTubeZ && hasSharedY && onlyFour,
    note: 'Torus is default fallthrough. case torus: default: shares the standard toroidal tube. Four-case switch only. From stage 623 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage623(source) {
  const hold = noteSessionTorusDefaultHold623(source);
  return {
    current: TORUS_DEFAULT_HOLD_623_STAGE,
    session: TORUS_DEFAULT_HOLD_623_SESSION,
    living: TORUS_DEFAULT_HOLD_623_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 624, title: 'hold lemniscate denom shared by x and z (1 + sin(theta)^2)' },
      { stage: 625, title: 'hold lerp alpha 0.05 and session Vector3 allocation' },
      { stage: 626, title: 'hold major = 10 + (idx * 2) assigned before switch' },
    ],
  };
}
