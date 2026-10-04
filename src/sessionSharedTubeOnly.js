/** Stage 416 — torus and infinity share the y tube; hamiltonian and triangular do not. Document only. Paste not rewritten. No secrets. */
export const SHARED_TUBE_ONLY_STAGE = 416;
export const SHARED_TUBE_ONLY_SESSION_HASH = 'beec41f1';
export const SHARED_TUBE_ONLY_LIVING_HASH = '7cd81012';
export const SHARED_TUBE_FORMULA = 'minor * sin(phi) * sin(t * 0.5 + idx)';

const PINNED_PASTE = `case 'infinity':
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
        case 'hamiltonian':
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;
        case 'torus':
        default:
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;`;

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

const TUBE = /minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/;

export function sharedTube(minor, phi, t, idx) {
  const m = Number.isFinite(minor) ? minor : 3;
  const p = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  return m * Math.sin(p) * Math.sin(time * 0.5 + i);
}

export function noteSessionSharedTubeOnly(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const infinity = TUBE.test(caseBody(text, 'infinity'));
  const torus = TUBE.test(caseBody(text, 'torus') || (text.split(/case\s*['"]torus['"]/)[1] || ''));
  const hamiltonian = TUBE.test(caseBody(text, 'hamiltonian'));
  const triangular = TUBE.test(caseBody(text, 'triangular'));
  const sample = sharedTube(3, Math.PI / 2, 0, 1);
  return {
    stage: SHARED_TUBE_ONLY_STAGE,
    session: SHARED_TUBE_ONLY_SESSION_HASH,
    living: SHARED_TUBE_ONLY_LIVING_HASH,
    pinned,
    formula: SHARED_TUBE_FORMULA,
    infinity,
    torus,
    hamiltonian,
    triangular,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: infinity && torus && !hamiltonian && !triangular && sample === 3 * Math.sin(0.5 + 1),
    note: 'Stage 416 holds the shared y tube on torus and infinity only. Hamiltonian keeps hScale * sin(theta * 3) + sin(t) * 2. Triangular keeps the sector lane. Paste not rewritten.',
  };
}
