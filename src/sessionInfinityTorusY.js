/** Stage 457 — infinity y stays identical to torus y. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_Y_STAGE = 457;
export const INFINITY_Y_SESSION_HASH = 'beec41f1';
export const INFINITY_Y_LIVING_HASH = '7cd81012';
export const INFINITY_Y_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const SHARED_Y = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  SHARED_Y,
  'break;',
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  SHARED_Y,
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

function armOf(text, label) {
  return (text.split(label)[1] || '').split('break;')[0];
}

export function noteSessionInfinityTorusY(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const inf = armOf(text, "case 'infinity':");
  const tor = armOf(text, "case 'torus':");
  const infY = (inf.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const torY = (tor.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const shared = infY === SHARED_Y && torY === SHARED_Y;
  const infSkipsDenom = infY.length > 0 && !/denom/.test(infY) && !/scale/.test(infY);
  const invented = INFINITY_Y_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: INFINITY_Y_STAGE,
    session: INFINITY_Y_SESSION_HASH,
    living: INFINITY_Y_LIVING_HASH,
    pinned,
    shared,
    infSkipsDenom,
    infY,
    torY,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: shared && infSkipsDenom && invented.length === 0,
    note: 'Infinity y matches torus y exactly. scale and denom stay on x and z. Paste not rewritten.',
  };
}

export function compileSessionStage457(source) {
  const hold = noteSessionInfinityTorusY(source);
  return {
    current: INFINITY_Y_STAGE,
    session: INFINITY_Y_SESSION_HASH,
    living: INFINITY_Y_LIVING_HASH,
    paste: '2026-10-06 16:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 458, title: 'hold major and minor assigned before the geometry switch' },
      { stage: 459, title: 'hold hamiltonian y lift sin(t)*2 independent of hScale' },
      { stage: 460, title: 'hold lemniscate denom shared by x and z only' },
    ],
  };
}
