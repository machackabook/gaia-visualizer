/** Stage 410 — hold triangular high frequency theta*5 on x and z offsets, not on y. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_HIGH_FREQ_STAGE = 410;
export const TRIANGULAR_HIGH_FREQ_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_HIGH_FREQ_LIVING_HASH = '7cd81012';
export const TRIANGULAR_HIGH_FREQ = 5;

const PINNED_TRIANGULAR = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
].join('\n');

export function triangularHighFreq(theta, major, minor) {
  const a = Number.isFinite(theta) ? theta : 0;
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const sector = Math.PI * 2 / 3;
  const tAngle = Math.floor(a / sector) * sector;
  const hf = a * TRIANGULAR_HIGH_FREQ;
  const xOff = r * Math.cos(hf);
  const zOff = r * Math.sin(hf);
  const x = R * Math.cos(tAngle) + xOff;
  const z = R * Math.sin(tAngle) + zOff;
  return { tAngle, hf, xOff, zOff, x, z, freq: TRIANGULAR_HIGH_FREQ, yUsesHighFreq: false };
}

export function noteSessionTriangularHighFreq(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TRIANGULAR : String(source);
  const onX = /x = major \* Math\.cos\(tAngle\) \+ minor \* Math\.cos\(this\.theta \* 5\);/.test(text);
  const onZ = /z = major \* Math\.sin\(tAngle\) \+ minor \* Math\.sin\(this\.theta \* 5\);/.test(text);
  const yUses = /y = [^;\n]*this\.theta \* 5/.test(text);
  const rest = triangularHighFreq(0, 10, 3);
  const crest = triangularHighFreq(Math.PI / 10, 10, 3);
  const restOk = Math.abs(rest.x - 13) < 1e-9 && Math.abs(rest.z) < 1e-12 && Math.abs(rest.xOff - 3) < 1e-12 && rest.zOff === 0;
  const crestOk = Math.abs(crest.x - 10) < 1e-9 && Math.abs(crest.z - 3) < 1e-9 && Math.abs(crest.xOff) < 1e-12 && Math.abs(crest.zOff - 3) < 1e-12;
  return {
    stage: TRIANGULAR_HIGH_FREQ_STAGE,
    session: TRIANGULAR_HIGH_FREQ_SESSION_HASH,
    living: TRIANGULAR_HIGH_FREQ_LIVING_HASH,
    pinned,
    formula: 'x += minor * cos(theta*5); z += minor * sin(theta*5); y does not',
    onX,
    onZ,
    yUses,
    rest,
    crest,
    pasteRewritten: false,
    secrets: false,
    ok: onX && onZ && !yUses && restOk && crestOk,
    note: 'Stage 410 holds triangular high frequency theta*5 on both x and z offsets. Y stays the sector lift plus sin(t)*minor. Paste not rewritten.',
  };
}
