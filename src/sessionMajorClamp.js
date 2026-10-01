/** Stage 364 — session major-clamp gap at node cap. Document only. Do not rewrite the paste. No secrets. */
export const MAJOR_CLAMP_STAGE = 364;
export const MAJOR_CLAMP_SESSION_HASH = 'beec41f1';
export const MAJOR_CLAMP_LIVING_HASH = '7cd81012';
export const MAJOR_CLAMP_BASE = 10;
export const MAJOR_CLAMP_STEP = 2;
export const MAJOR_CLAMP_NODE_CAP = 16384;
export const MAJOR_CLAMP_LIVING_MIN = 2;
export const MAJOR_CLAMP_LIVING_MAX = 96;
export const MAJOR_CLAMP_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const MAJOR_CLAMP_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_PASTE = 'let major = 10 + (this.idx * 2);';

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function sessionMajorAt(idx) {
  const i = Number.isFinite(idx) ? idx : 0;
  return MAJOR_CLAMP_BASE + i * MAJOR_CLAMP_STEP;
}

export function livingMajorAt(idx) {
  return Math.min(MAJOR_CLAMP_LIVING_MAX, Math.max(MAJOR_CLAMP_LIVING_MIN, sessionMajorAt(idx)));
}

export function noteSessionMajorClamp(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const unbounded = /major\s*=\s*10\s*\+\s*\(?\s*(this\.)?idx\s*\*\s*2\s*\)?/.test(text);
  const clampInPaste = /clampChatKernelRadii|Math\.min\s*\(\s*96/.test(text);
  const invented = MAJOR_CLAMP_EXTRAS.filter((name) => hasCase(text, name));
  const sessionAtCap = sessionMajorAt(MAJOR_CLAMP_NODE_CAP);
  const livingAtCap = livingMajorAt(MAJOR_CLAMP_NODE_CAP);
  return {
    stage: MAJOR_CLAMP_STAGE,
    session: MAJOR_CLAMP_SESSION_HASH,
    living: MAJOR_CLAMP_LIVING_HASH,
    base: MAJOR_CLAMP_BASE,
    step: MAJOR_CLAMP_STEP,
    nodeCap: MAJOR_CLAMP_NODE_CAP,
    livingMin: MAJOR_CLAMP_LIVING_MIN,
    livingMax: MAJOR_CLAMP_LIVING_MAX,
    sessionMajorAtCap: sessionAtCap,
    livingMajorAtCap: livingAtCap,
    gap: sessionAtCap - livingAtCap,
    pinned,
    sessionUnbounded: unbounded,
    clampInPaste,
    livingClamps: true,
    geometries: MAJOR_CLAMP_GEOMETRIES.slice(),
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    secrets: false,
    ok: unbounded && !clampInPaste && invented.length === 0 && sessionAtCap === 32778 && livingAtCap === 96,
    note: 'Session paste uses major = 10 + idx * 2 with no cap. At node cap 16384 that is 32778. Living path clamps major to [2, 96]. Paste not rewritten. No new session case.',
  };
}
