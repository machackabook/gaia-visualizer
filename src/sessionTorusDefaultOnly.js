/** Stage 536 — torus is the default case and the only fallthrough. Document only. Paste not rewritten. No secrets. */
export const TORUS_DEFAULT_ONLY_STAGE = 536;
export const TORUS_DEFAULT_ONLY_SESSION = 'beec41f1';
export const TORUS_DEFAULT_ONLY_LIVING = '7cd81012';

const PINNED_SWITCH = `case 'torus':\n        default:`;

export function noteSessionTorusDefaultOnly(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_SWITCH : String(source);
  const torusThenDefault = /case 'torus':\s*default:/.test(text);
  const noOwnBody = !/case 'torus':\s*\{/.test(text);
  const sharedBody = /x = \(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.cos\(this\.theta\)/.test(text);
  const onlyFour = (text.match(/case '/g) || []).length === 4;
  return {
    stage: TORUS_DEFAULT_ONLY_STAGE,
    session: TORUS_DEFAULT_ONLY_SESSION,
    living: TORUS_DEFAULT_ONLY_LIVING,
    pinned,
    torusThenDefault,
    noOwnBody,
    sharedBody,
    onlyFour,
    pasteRewritten: false,
    secrets: false,
    ok: torusThenDefault && noOwnBody && sharedBody && onlyFour,
    note: 'torus is the default case and the only fallthrough. case torus: immediately followed by default:. Shared body. Only four session cases. Paste not rewritten.',
  };
}
