/** Stage 645 — hold torus/default tube on x/z only; y shared with infinity. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_HOLD_645_STAGE = 645;
export const TORUS_HOLD_645_SESSION = 'beec41f1';
export const TORUS_HOLD_645_LIVING = '7cd81012';

const PINNED_TORUS = `case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;`;

export function noteSessionTorusHold645(source) {
  const text = source == null ? PINNED_TORUS : String(source);
  const hasTube = /\(major \+ minor \* Math\.cos\(this\.phi\)\)/.test(text);
  const hasSharedY = /minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\)/.test(text);
  const hasDefault = /default:/.test(text);
  return {
    stage: TORUS_HOLD_645_STAGE,
    session: TORUS_HOLD_645_SESSION,
    living: TORUS_HOLD_645_LIVING,
    hasTubeXZ: hasTube,
    ySharedWithInfinity: hasSharedY,
    defaultFallsThrough: hasDefault,
    pasteRewritten: false,
    secrets: false,
    ok: hasTube && hasSharedY && hasDefault,
    note: 'Torus/default tube held on x/z. y shared with infinity. From stage 645 chat paste. Paste not rewritten.',
  };
}
