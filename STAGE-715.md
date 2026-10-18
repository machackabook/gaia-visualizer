# STAGE-715 — Hold infinity lemniscate denom shared by x and z only

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity case:
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  x = (scale * Math.cos(this.theta)) / denom;
  z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- denom shared by x and z only. Y uses minor * sin(phi) * sin(t*0.5 + idx). Unread by denom.
- Prior holds remain: switch sole four-case (714), major/minor before switch (713), uniforms order (712), theta step (711).
- Paste not rewritten. No secrets.

## Next
716 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2.
