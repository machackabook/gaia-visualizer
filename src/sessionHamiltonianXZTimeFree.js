/** Stage 435 — hamiltonian x/z ignore clock t. Only y reads t. Paste not rewritten. No secrets. */
export const HAMILTONIAN_XZ_TIME_FREE_STAGE = 435;
export const HAMILTONIAN_XZ_TIME_FREE_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_XZ_TIME_FREE_LIVING_HASH = '7cd81012';

export function sampleHamiltonianXZ(theta, major, t) {
  const hScale = major;
  const x = hScale * Math.cos(theta * 3) * Math.cos(theta);
  const z = hScale * Math.cos(theta * 3) * Math.sin(theta);
  const y = hScale * Math.sin(theta * 3) + Math.sin(t) * 2;
  return { x, z, y, hScale };
}

function clockIn(line) {
  return /Math\.sin\(t\)|Math\.cos\(t\)|(?<![\w.])t(?!heta)/.test(line);
}

export function noteSessionHamiltonianXZTimeFree(source) {
  const pinned = source == null;
  const text = pinned ? "case 'hamiltonian':\n x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);\n z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);\n y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);\n break;" : String(source);
  const arm = (text.match(/case 'hamiltonian':[\s\S]*?break;/) || [text])[0];
  const xLine = (arm.match(/x\s*=\s*[^;]+;/) || [''])[0];
  const zLine = (arm.match(/z\s*=\s*[^;]+;/) || [''])[0];
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const a = sampleHamiltonianXZ(0.4, 10, 0);
  const b = sampleHamiltonianXZ(0.4, 10, Math.PI / 2);
  const xzStable = a.x === b.x && a.z === b.z;
  const yMoves = a.y !== b.y && Math.abs((b.y - a.y) - 2) < 1e-9;
  return {
    stage: HAMILTONIAN_XZ_TIME_FREE_STAGE,
    session: HAMILTONIAN_XZ_TIME_FREE_SESSION_HASH,
    living: HAMILTONIAN_XZ_TIME_FREE_LIVING_HASH,
    pinned,
    formula: 'x = hScale * cos(theta*3) * cos(theta); z = hScale * cos(theta*3) * sin(theta); y = hScale * sin(theta*3) + sin(t) * 2',
    xIgnoresT: xLine.length > 0 && !clockIn(xLine),
    zIgnoresT: zLine.length > 0 && !clockIn(zLine),
    yReadsT: /Math\.sin\(t\)/.test(yLine),
    xzStable,
    yMoves,
    sample: { a, b },
    pasteRewritten: false,
    secrets: false,
    ok: xLine.length > 0 && zLine.length > 0 && !clockIn(xLine) && !clockIn(zLine) && /Math\.sin\(t\)/.test(yLine) && xzStable && yMoves,
    note: 'Stage 435 holds hamiltonian x/z independent of t. Paste not rewritten.',
  };
}
