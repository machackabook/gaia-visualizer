/** Stage 470 — minor stays 3 + toroidalWeave * 2 and is unread by hamiltonian. Document only. No secrets. */
export const MINOR_RADIUS_STAGE = 470;
export const MINOR_RADIUS_SESSION_HASH = 'beec41f1';
export const MINOR_RADIUS_LIVING_HASH = '7cd81012';

const PINNED = [
  'let minor = 3 + (state.toroidalWeave * 2);',
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function sampleMinorRadius(toroidalWeave) {
  const minor = 3 + toroidalWeave * 2;
  return { toroidalWeave, minor, base: 3, weaveScale: 2 };
}

export function noteSessionMinorRadius(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const formula = /let\s+minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)\s*;/.test(text);
  const hamStart = text.indexOf("case 'hamiltonian'");
  const hamEnd = hamStart >= 0 ? text.indexOf('break;', hamStart) : -1;
  const hamBody = hamStart >= 0 && hamEnd > hamStart ? text.slice(hamStart, hamEnd) : '';
  const unreadByHamiltonian = hamBody.length > 0 && !/\bminor\b/.test(hamBody);
  const sample = sampleMinorRadius(1.5);
  const expected = 3 + 1.5 * 2;
  return {
    stage: MINOR_RADIUS_STAGE,
    session: MINOR_RADIUS_SESSION_HASH,
    living: MINOR_RADIUS_LIVING_HASH,
    pinned,
    formula,
    unreadByHamiltonian,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: formula && unreadByHamiltonian && sample.minor === expected,
    note: 'minor is 3 + toroidalWeave * 2. Hamiltonian uses hScale only and does not read minor. Paste not rewritten.',
  };
}

export function compileSessionStage470(source) {
  const hold = noteSessionMinorRadius(source);
  return {
    current: MINOR_RADIUS_STAGE,
    session: MINOR_RADIUS_SESSION_HASH,
    living: MINOR_RADIUS_LIVING_HASH,
    paste: '2026-10-07 11:07 CDT',
    hold,
    next: [
      { stage: 471, title: 'hold major as 10 + idx * 2, shared before the switch' },
      { stage: 472, title: 'hold infinity denom as 1 + sin(theta)^2, shared by x and z' },
      { stage: 473, title: 'hold torus tube as (major + minor * cos(phi)) on x and z' },
    ],
  };
}
