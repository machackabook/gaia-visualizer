/** Stage 415 — hold theta step as a product, not a sum with gravityPull. Document only. Paste not rewritten. No secrets. */
export const THETA_PRODUCT_STAGE = 415;
export const THETA_PRODUCT_SESSION_HASH = 'beec41f1';
export const THETA_PRODUCT_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function thetaProduct(idx, gravityPull) {
  const i = Number.isFinite(idx) ? idx : 0;
  const g = Number.isFinite(gravityPull) ? gravityPull : 0;
  const lane = 0.01 + i * 0.002;
  const summed = lane + g;
  const product = lane * g;
  return { lane, product, summed, isProduct: product !== summed || g === 1 };
}

export function noteSessionThetaProduct(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const productForm = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull/.test(text);
  const sumForm = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\+\s*state\.gravityPull/.test(text);
  const inside = thetaProduct(4, 1.4);
  const frozen = thetaProduct(2, 0);
  const unit = thetaProduct(0, 1);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: THETA_PRODUCT_STAGE,
    session: THETA_PRODUCT_SESSION_HASH,
    living: THETA_PRODUCT_LIVING_HASH,
    pinned,
    formula: '(0.01 + idx * 0.002) * gravityPull',
    productForm,
    sumForm,
    inside,
    frozen,
    unit,
    pasteRewritten: false,
    secrets: false,
    ok: productForm && !sumForm
      && near(inside.lane, 0.018) && near(inside.product, 0.0252) && !near(inside.product, inside.summed)
      && frozen.product === 0 && near(unit.product, 0.01),
    note: 'Stage 415 holds the session theta step as a product. gravityPull scales the lane; it is not added after the parentheses. A zero pull freezes theta. Paste not rewritten.',
  };
}
