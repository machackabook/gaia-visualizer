/** Stage 420 — hamiltonian branch ignores phi. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_IGNORES_PHI_STAGE = 420;
export const HAMILTONIAN_IGNORES_PHI_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_IGNORES_PHI_LIVING_HASH = '7cd81012';

const PINNED_CASE = `case 'hamiltonian':
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;`;

export function hamiltonianPoint(theta, t, major) {
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = Number.isFinite(major) ? major : 10;
  return {
    hScale,
    x: hScale * Math.cos(th * 3) * Math.cos(th),
    z: hScale * Math.cos(th * 3) * Math.sin(th),
    y: hScale * Math.sin(th * 3) + Math.sin(time) * 2,
  };
}

export function noteSessionHamiltonianIgnoresPhi(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_CASE : String(source);
  const block = (text.match(/case\s+'hamiltonian'[\s\S]*?break;/) || [PINNED_CASE])[0];
  const hasCase = /case\s+'hamiltonian'/.test(text);
  const hScale = /hScale\s*=\s*major/.test(block);
  const lift = /Math\.sin\(t\)\s*\*\s*2/.test(block);
  const ignoresPhi = !/phi/.test(block);
  const sample = hamiltonianPoint(0, 0, 10);
  const crest = hamiltonianPoint(Math.PI / 2, 0, 10);
  return {
    stage: HAMILTONIAN_IGNORES_PHI_STAGE,
    session: HAMILTONIAN_IGNORES_PHI_SESSION_HASH,
    living: HAMILTONIAN_IGNORES_PHI_LIVING_HASH,
    pinned,
    hasCase,
    hScale,
    lift,
    ignoresPhi,
    sample,
    crest,
    pasteRewritten: false,
    secrets: false,
    ok: hasCase && hScale && lift && ignoresPhi && sample.x === 10 && sample.y === 0 && sample.z === 0 && crest.y === -10 && crest.x === 0 && crest.z === 0,
    note: 'Stage 420 holds the hamiltonian case. hScale = major. x/z/y use theta and t only. phi is not read in this branch. Paste not rewritten.',
  };
}
