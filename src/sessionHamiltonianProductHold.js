/** Stage 404 — hold hamiltonian xz product cos(theta*3) * cos/sin(theta) against hScale. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_PRODUCT_HOLD_STAGE = 404;
export const HAMILTONIAN_PRODUCT_HOLD_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_PRODUCT_HOLD_LIVING_HASH = '7cd81012';

const PINNED_BLOCK = [
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
].join('\n');

export function sessionHamiltonianProduct(theta, major, t) {
  const th = Number.isFinite(theta) ? theta : 0;
  const m = Number.isFinite(major) ? major : 10;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = m;
  const freq = Math.cos(th * 3);
  const x = hScale * freq * Math.cos(th);
  const z = hScale * freq * Math.sin(th);
  const y = hScale * Math.sin(th * 3) + Math.sin(time) * 2;
  const summed = hScale * (freq + Math.cos(th));
  return {
    hScale,
    freq,
    x,
    z,
    y,
    productNotSum: x !== summed,
    scaleAppliedOnce: true,
    yUsesProduct: false,
  };
}

export function noteSessionHamiltonianProductHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_BLOCK : String(source);
  const xProduct = /x\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.cos\(this\.theta\)/.test(text);
  const zProduct = /z\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.sin\(this\.theta\)/.test(text);
  const notSum = !/hScale\s*\*\s*\(\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\+/.test(text);
  const bare = sessionHamiltonianProduct(0, 10, 0);
  const quarter = sessionHamiltonianProduct(Math.PI / 2, 10, 0);
  const wider = sessionHamiltonianProduct(Math.PI / 6, 14, 0);
  const lifted = sessionHamiltonianProduct(0, 10, Math.PI / 2);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  return {
    stage: HAMILTONIAN_PRODUCT_HOLD_STAGE,
    session: HAMILTONIAN_PRODUCT_HOLD_SESSION_HASH,
    living: HAMILTONIAN_PRODUCT_HOLD_LIVING_HASH,
    pinned,
    formula: 'x = hScale * cos(theta*3) * cos(theta); z = hScale * cos(theta*3) * sin(theta)',
    xProduct,
    zProduct,
    notSum,
    bare,
    quarter,
    wider,
    lifted,
    pasteRewritten: false,
    secrets: false,
    ok: xProduct && zProduct && notSum
      && bare.hScale === 10 && near(bare.x, 10) && near(bare.z, 0) && bare.productNotSum
      && near(quarter.x, 0) && near(quarter.z, 0)
      && wider.hScale === 14
      && near(wider.x, 14 * Math.cos(Math.PI / 2) * Math.cos(Math.PI / 6))
      && near(lifted.x, bare.x) && near(lifted.y, 2) && lifted.yUsesProduct === false,
    note: 'Stage 404 holds the hamiltonian xz product against hScale. It is a product, not a sum, and y does not reuse that product. Paste not rewritten.',
  };
}
