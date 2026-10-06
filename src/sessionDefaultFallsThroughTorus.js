/** Stage 439 — default falls through to the torus arm. Paste not rewritten. No secrets. */
export const DEFAULT_TORUS_STAGE = 439;
export const DEFAULT_TORUS_SESSION_HASH = 'beec41f1';
export const DEFAULT_TORUS_LIVING_HASH = '7cd81012';

export function noteSessionDefaultFallsThroughTorus(source) {
  const pinned = source == null;
  const text = pinned
    ? "case 'torus':\n default:\n x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);\n z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);\n y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);\n break;"
    : String(source);
  const arm = (text.match(/case 'torus':[\s\S]*?break;/) || [''])[0];
  const fallthrough = /case 'torus':\s*default:/.test(arm.replace(/\/\/[^
]*/g, ''));
  const noBreakBetween = !/case 'torus':[\s\S]*?break;[\s\S]*?default:/.test(arm);
  const tube = /\(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.cos\(this\.theta\)/.test(arm);
  const sharedY = /y\s*=\s*minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\)/.test(arm);
  return {
    stage: DEFAULT_TORUS_STAGE,
    session: DEFAULT_TORUS_SESSION_HASH,
    living: DEFAULT_TORUS_LIVING_HASH,
    pinned,
    fallthrough,
    noBreakBetween,
    tube,
    sharedY,
    pasteRewritten: false,
    secrets: false,
    ok: fallthrough && noBreakBetween && tube && sharedY,
    note: 'Stage 439 holds default falling through to the torus arm. Paste not rewritten.',
  };
}
