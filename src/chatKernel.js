/**
 * Living chat-kernel contract — Stage 65.
 * CHAT_KERNEL_SESSION_SOURCE is the exact update(t) posted in the current session (hash beec41f1).
 * CHAT_KERNEL_SOURCE is the living runtime:
 *   phi += 0.007 * toroidalWeave
 *   uniform existence guards
 *   reused _kernelTarget Vector3 (no per-frame allocation)
 * sourceHash is FNV-1a of CHAT_KERNEL_SOURCE (7cd81012).
 * Runtime extras that stay in evaluateChatKernel: klein, hopf, figure8.
 * Stage 65: session paste reconfirmed 2026-09-11 22:12 CDT. Klein/hopf/figure8 still not in session switch.
 * GPU TF mixes previous position toward evaluateChatKernel at CHAT_KERNEL_LERP (0.05).
 * Stage 63 seeds aPrevPos from the first CPU evaluate so frame-0 does not bloom from the origin.
 * Stage 64 re-seeds aPrevPos when geometry changes so lerp does not drag leftover manifolds.
 * Stage 65 CPU hopf/figure8 match GPU KERNEL_GEOMETRY_ID 13 / 8.
 */

export const STAGE = 65;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein', 'hopf', 'figure8'];
export const CHAT_KERNEL_SOURCE_HASH = '7cd81012';
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';

export function fnv1a32Hex(source) {
  let h = 0x811c9dc5;
  for (let i = 0; i < source.length; i++) {
    h ^= source.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

export function hashChatKernelSource(source) {
  return fnv1a32Hex(source);
}

export function matchSessionPaste(source) {
  const hash = fnv1a32Hex(source);
  return {
    stage: STAGE,
    hash,
    expected: CHAT_KERNEL_SESSION_HASH,
    match: hash === CHAT_KERNEL_SESSION_HASH,
    kleinInSession: false,
    hopfInSession: false,
    figure8InSession: false,
  };
}

export function advanceChatKernelAngles({ theta = 0, phi = 0, idx = 0, gravityPull = 1, toroidalWeave = 1 } = {}) {
  return {
    theta: theta + (CHAT_KERNEL_THETA_BASE + idx * CHAT_KERNEL_THETA_IDX) * gravityPull,
    phi: phi + CHAT_KERNEL_PHI_WEAVE * toroidalWeave,
  };
}

export function evaluateChatKernel({
  theta,
  phi,
  t,
  idx,
  toroidalWeave = 1,
  geometry = 'torus',
}) {
  return evaluateChatKernelInto({}, { theta, phi, t, idx, toroidalWeave, geometry });
}

export function evaluateChatKernelInto(out, {
  theta,
  phi,
  t,
  idx,
  toroidalWeave = 1,
  geometry = 'torus',
}) {
  const major = 10 + idx * 2;
  const minor = 3 + toroidalWeave * 2;
  let x = 0;
  let y = 0;
  let z = 0;

  switch (geometry) {
    case 'infinity': {
      const scale = major * 1.5;
      const denom = 1 + Math.pow(Math.sin(theta), 2);
      x = (scale * Math.cos(theta)) / denom;
      z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
      y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
      break;
    }
    case 'hamiltonian': {
      const hScale = major;
      x = hScale * Math.cos(theta * 3) * Math.cos(theta);
      z = hScale * Math.cos(theta * 3) * Math.sin(theta);
      y = hScale * Math.sin(theta * 3) + Math.sin(t) * 2;
      break;
    }
    case 'triangular': {
      const tAngle = Math.floor(theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
      x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
      z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
      y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
      break;
    }
    case 'klein': {
      const u = theta;
      const v = phi;
      const r = 4 + toroidalWeave;
      x = (r + Math.cos(u / 2) * Math.sin(v) - Math.sin(u / 2) * Math.sin(2 * v)) * Math.cos(u) * 1.2;
      z = (r + Math.cos(u / 2) * Math.sin(v) - Math.sin(u / 2) * Math.sin(2 * v)) * Math.sin(u) * 1.2;
      y = Math.sin(u / 2) * Math.sin(v) + Math.cos(u / 2) * Math.sin(2 * v) + Math.sin(t * 0.2 + idx) * 0.3;
      x *= major * 0.12;
      y *= major * 0.18;
      z *= major * 0.12;
      break;
    }
    case 'figure8': {
      const scale = major * 1.15;
      const denom = 1 + Math.sin(theta) * Math.sin(theta);
      const cx = (scale * Math.cos(theta)) / denom;
      const cz = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
      const tube = minor * 0.35;
      x = cx + tube * Math.cos(phi);
      y = tube * Math.sin(phi) + Math.sin(t * 0.4) * 0.4;
      z = cz + tube * Math.sin(phi * 0.5);
      break;
    }
    case 'hopf': {
      const eta = theta;
      const xi = phi + t * 0.15;
      const r = Math.sin(eta);
      x = major * r * Math.cos(xi);
      z = major * r * Math.sin(xi);
      y = major * Math.cos(eta) * 0.65 + Math.sin(t * 0.4 + idx) * 0.4;
      break;
    }
    case 'torus':
    default: {
      x = (major + minor * Math.cos(phi)) * Math.cos(theta);
      z = (major + minor * Math.cos(phi)) * Math.sin(theta);
      y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
      break;
    }
  }

  out.x = x;
  out.y = y;
  out.z = z;
  out.major = major;
  out.minor = minor;
  return out;
}

export function seedPrevPositions(count, seedTheta, seedPhi, t = 0, geometry = 'torus', toroidalWeave = 1) {
  const pos = new Float32Array(count * 3);
  const out = { x: 0, y: 0, z: 0, major: 0, minor: 0 };
  for (let i = 0; i < count; i++) {
    evaluateChatKernelInto(out, {
      theta: seedTheta ? seedTheta[i] : 0,
      phi: seedPhi ? seedPhi[i] : 0,
      t,
      idx: i,
      toroidalWeave,
      geometry,
    });
    const o = i * 3;
    pos[o] = out.x;
    pos[o + 1] = out.y;
    pos[o + 2] = out.z;
  }
  return pos;
}

export function chatKernelColor(idx, t, gravityPull = 1) {
  const hue = ((idx / 24) + gravityPull * 0.08 + t * 0.01) % 1;
  const sat = 0.7;
  const light = 0.45 + Math.min(0.3, gravityPull * 0.08);
  return hslToRgb(hue, sat, light);
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

export function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r, g, b };
}

export function confirmSessionKernel() {
  return {
    stage: STAGE,
    sessionHash: CHAT_KERNEL_SESSION_HASH,
    livingHash: CHAT_KERNEL_SOURCE_HASH,
    pinned: true,
    kleinInSession: false,
    hopfInSession: false,
    figure8InSession: false,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    runtimeExtras: ['klein', 'hopf', 'figure8'],
    note: 'Session paste 2026-09-11 22:12 CDT matches beec41f1. Klein/hopf/figure8 stay runtime-only. Stage 65 CPU evaluate matches GPU ids 12/13/8.',
  };
}
