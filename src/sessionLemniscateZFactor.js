/** Stage 409 — hold lemniscate z factor sin(theta)*cos(theta) on the same denom, not a second denom. Document only. Paste not rewritten. No secrets. */
export const LEMNISCATE_Z_FACTOR_STAGE = 409;
export const LEMNISCATE_Z_FACTOR_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_Z_FACTOR_LIVING_HASH = '7cd81012';

const PINNED_INFINITY = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

export function lemniscateZFactor(theta, major) {
  const a = Number.isFinite(theta) ? theta : 0;
  const R = Number.isFinite(major) ? major : 10;
  const scale = R * 1.5;
  const s = Math.sin(a);
  const c = Math.cos(a);
  const denom = 1 + s * s;
  const factor = s * c;
  const z = (scale * factor) / denom;
  const x = (scale * c) / denom;
  return { scale, denom, factor, x, z, secondDenom: false };
}

export function noteSessionLemniscateZFactor(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const shared =
    /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);[\s\S]*x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;[\s\S]*z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const secondDenom = /const denom2|const zDenom|\/ \(1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\)\)/.test(text);
  const yUsesFactor = /y = [^;\n]*Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)/.test(text);
  const lobe = lemniscateZFactor(Math.PI / 4, 10);
  const rest = lemniscateZFactor(0, 10);
  const node = lemniscateZFactor(Math.PI / 2, 10);
  const lobeOk = Math.abs(lobe.z - 5) < 1e-9 && Math.abs(lobe.factor - 0.5) < 1e-12 && Math.abs(lobe.denom - 1.5) < 1e-12;
  const restOk = Math.abs(rest.z) < 1e-12 && rest.factor === 0 && rest.denom === 1;
  const nodeOk = Math.abs(node.z) < 1e-12 && Math.abs(node.factor) < 1e-12;
  return {
    stage: LEMNISCATE_Z_FACTOR_STAGE,
    session: LEMNISCATE_Z_FACTOR_SESSION_HASH,
    living: LEMNISCATE_Z_FACTOR_LIVING_HASH,
    pinned,
    formula: 'z = (scale * sin(theta) * cos(theta)) / denom; denom is the x denom',
    shared,
    secondDenom,
    yUsesFactor,
    lobe,
    rest,
    node,
    pasteRewritten: false,
    secrets: false,
    ok: shared && !secondDenom && !yUsesFactor && lobeOk && restOk && nodeOk,
    note: 'Stage 409 holds the lemniscate z factor sin(theta)*cos(theta) on the same denom as x. No second denom. Y does not take the crossing factor. Paste not rewritten.',
  };
}
