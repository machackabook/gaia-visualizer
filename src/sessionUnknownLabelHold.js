/** Stage 405 — hold an unrecognized geometry label on the torus fallthrough only. Document only. Paste not rewritten. No secrets. */
export const UNKNOWN_LABEL_HOLD_STAGE = 405;
export const UNKNOWN_LABEL_HOLD_SESSION_HASH = 'beec41f1';
export const UNKNOWN_LABEL_HOLD_LIVING_HASH = '7cd81012';
export const SESSION_CASES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const RUNTIME_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_SWITCH = [
  "case 'infinity':",
  'break;',
  "case 'hamiltonian':",
  'break;',
  "case 'triangular':",
  'break;',
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

export function sessionLabelRoute(label) {
  const name = String(label || '').trim();
  if (name === 'infinity' || name === 'hamiltonian' || name === 'triangular') {
    return { label: name, arm: name, fallthrough: false, invented: false };
  }
  if (name === 'torus' || name === '') {
    return { label: name || 'torus', arm: 'torus', fallthrough: name !== 'torus', invented: false };
  }
  return { label: name, arm: 'torus', fallthrough: true, invented: false };
}

export function noteSessionUnknownLabelHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_SWITCH : String(source);
  const fallthrough = /case\s*['"]torus['"]\s*:\s*default\s*:/.test(text);
  const invented = RUNTIME_EXTRAS.filter((name) => new RegExp("case\\s*['\"]" + name + "['\"]").test(text));
  const present = SESSION_CASES.filter((name) => new RegExp("case\\s*['\"]" + name + "['\"]").test(text));
  const klein = sessionLabelRoute('klein');
  const hopf = sessionLabelRoute('hopf');
  const blank = sessionLabelRoute('');
  const torus = sessionLabelRoute('torus');
  const infinity = sessionLabelRoute('infinity');
  return {
    stage: UNKNOWN_LABEL_HOLD_STAGE,
    session: UNKNOWN_LABEL_HOLD_SESSION_HASH,
    living: UNKNOWN_LABEL_HOLD_LIVING_HASH,
    pinned,
    formula: "unrecognized label -> case 'torus': default: tube; no fifth session case",
    fallthrough,
    present,
    inventedCases: invented,
    klein,
    hopf,
    blank,
    torus,
    infinity,
    pasteRewritten: false,
    secrets: false,
    ok: fallthrough && invented.length === 0 && present.length === 4
      && klein.arm === 'torus' && klein.fallthrough && klein.invented === false
      && hopf.arm === 'torus' && hopf.fallthrough
      && torus.arm === 'torus' && torus.fallthrough === false
      && infinity.arm === 'infinity' && infinity.fallthrough === false,
    note: 'Stage 405 holds an unrecognized geometry label on the torus fallthrough only. Klein / hopf / figure8 / trefoil / mobius stay runtime-only. Paste not rewritten.',
  };
}
