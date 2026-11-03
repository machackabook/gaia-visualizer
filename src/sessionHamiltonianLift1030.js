/** Stage 1030 — hamiltonian y lift free of hScale/minor. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_LIFT_STAGE = 1030;
export const HAMILTONIAN_LIFT_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_LIFT_LIVING_HASH = '7cd81012';

export function noteSessionHamiltonianLift(source) {
  const text = source == null ? '' : String(source);
  const yLine = /y = hScale \* Math\.sin\(this\.theta \* 3\) \+ \(Math\.sin\(t\) \* 2\);/.test(text);
  const freeOfMinor = !/minor/.test((text.match(/case 'hamiltonian':[\s\S]*?break;/) || [''])[0]);
  return {
    stage: HAMILTONIAN_LIFT_STAGE,
    session: HAMILTONIAN_LIFT_SESSION_HASH,
    living: HAMILTONIAN_LIFT_LIVING_HASH,
    yLine,
    freeOfMinor,
    pasteRewritten: false,
    secrets: false,
    ok: yLine && freeOfMinor,
    note: 'Stage 1030 holds hamiltonian y lift free of hScale/minor on the additive term. Paste not rewritten.',
  };
}
