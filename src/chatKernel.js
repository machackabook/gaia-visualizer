/**
 * Living chat-kernel contract — Stage 49.
 * CHAT_KERNEL_SESSION_SOURCE is the exact update(t) posted in the current session (hash beec41f1).
 * CHAT_KERNEL_SOURCE is the living runtime:
 *   phi += 0.007 * toroidalWeave
 *   uniform existence guards
 *   reused _kernelTarget Vector3 (no per-frame allocation)
 * sourceHash is FNV-1a of CHAT_KERNEL_SOURCE (7cd81012).
 * Runtime extras that stay in evaluateChatKernel: klein manifold for hamiltonian↔klein blend.
 */

export const STAGE = 49;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein'];
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
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    note: 'Session paste 2026-09-10 22:02 CDT matches beec41f1. Klein stays runtime-only.',
  };
}

export const CHAT_KERNEL_SESSION_SOURCE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;

    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);

    // Evaluate the target geometric state assigned by the LLM
    switch(targetState.geometry) {
        case 'infinity':
            // Lemniscate of Bernoulli mathematical mapping
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
            
        case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
            
        case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;

        case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }

    // Smoothly interpolate current position to the new geometric state target
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export const CHAT_KERNEL_SOURCE = `update(t) {
    if (this.material && this.material.uniforms) {
        if (this.material.uniforms.uTime) this.material.uniforms.uTime.value = t;
        if (this.material.uniforms.uGravity) this.material.uniforms.uGravity.value = state.gravityPull;
    }

    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    this.phi += 0.007 * state.toroidalWeave;
    
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);

    // Evaluate the target geometric state assigned by the LLM
    switch(targetState.geometry) {
        case 'infinity':
            // Lemniscate of Bernoulli mathematical mapping
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
            
        case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
            
        case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;

        case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }

    // Smoothly interpolate current position to the new geometric state target
    if (!this._kernelTarget) this._kernelTarget = new THREE.Vector3();
    this._kernelTarget.set(x, y, z);
    this.mesh.position.lerp(this._kernelTarget, 0.05);
}`;
