/**
 * Evaluate the target geometric state assigned by the LLM.
 * Pure mapping: (theta, phi, t, idx, state, geometry) -> {x,y,z}
 */
export const GEOMETRIES = [
  'torus',
  'infinity',
  'hamiltonian',
  'triangular',
  'helix',
  'mobius',
  'lissajous',
  'klein',
  'hopf',
  'rose',
  'seifert',
  'blend',
  'trefoil',
  'stereo',
];

function kleinBottle(theta, phi, t, idx, major, toroidalWeave) {
  const u = theta;
  const v = phi;
  const r = 4 + toroidalWeave;
  let x = (r + Math.cos(u / 2) * Math.sin(v) - Math.sin(u / 2) * Math.sin(2 * v)) * Math.cos(u) * 1.2;
  let z = (r + Math.cos(u / 2) * Math.sin(v) - Math.sin(u / 2) * Math.sin(2 * v)) * Math.sin(u) * 1.2;
  let y = Math.sin(u / 2) * Math.sin(v) + Math.cos(u / 2) * Math.sin(2 * v) + Math.sin(t * 0.2 + idx) * 0.3;
  x *= major * 0.12;
  y *= major * 0.18;
  z *= major * 0.12;
  return { x, y, z };
}

function hamiltonianPath(theta, t, major) {
  return {
    x: major * Math.cos(theta * 3) * Math.cos(theta),
    z: major * Math.cos(theta * 3) * Math.sin(theta),
    y: major * Math.sin(theta * 3) + Math.sin(t) * 2,
  };
}

export function evaluateGeometry({
  theta,
  phi,
  t,
  idx,
  gravityPull = 1,
  toroidalWeave = 1,
  geometry = 'torus',
  blend = 0.5,
}) {
  const major = 10 + (idx % 24) * 2;
  const minor = 3 + toroidalWeave * 2;
  let x = 0, y = 0, z = 0;

  switch (geometry) {
    case 'infinity': {
      const scale = major * 1.5;
      const denom = 1 + Math.sin(theta) * Math.sin(theta);
      x = (scale * Math.cos(theta)) / denom;
      z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
      y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
      break;
    }
    case 'hamiltonian': {
      const h = hamiltonianPath(theta, t, major);
      x = h.x; y = h.y; z = h.z;
      break;
    }
    case 'triangular': {
      const step = (Math.PI * 2) / 3;
      const tAngle = Math.floor(theta / step) * step;
      x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
      z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
      y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
      break;
    }
    case 'helix': {
      const turns = 3 + toroidalWeave;
      x = minor * Math.cos(theta);
      z = minor * Math.sin(theta);
      y = ((theta / (Math.PI * 2)) % turns) * (major / turns) - major * 0.4;
      break;
    }
    case 'mobius': {
      const u = theta;
      const v = (idx / 12 - 0.5) * minor;
      x = (major + v * Math.cos(u / 2)) * Math.cos(u);
      z = (major + v * Math.cos(u / 2)) * Math.sin(u);
      y = v * Math.sin(u / 2) + Math.sin(t * 0.3 + idx) * 0.4;
      break;
    }
    case 'lissajous': {
      const a = 3 + (idx % 3);
      const b = 2 + (idx % 2);
      x = major * Math.sin(a * theta + phi);
      y = minor * Math.sin(b * theta);
      z = major * Math.sin(a * theta) * Math.cos(b * phi * 0.25);
      break;
    }
    case 'klein': {
      const k = kleinBottle(theta, phi, t, idx, major, toroidalWeave);
      x = k.x; y = k.y; z = k.z;
      break;
    }
    case 'hopf': {
      const eta = theta;
      const xi = phi + t * 0.15 * gravityPull;
      const r = Math.sin(eta);
      x = major * r * Math.cos(xi);
      z = major * r * Math.sin(xi);
      y = major * Math.cos(eta) * 0.65 + Math.sin(t * 0.4 + idx) * 0.4;
      break;
    }
    case 'rose': {
      const k = 3 + (idx % 4);
      const rho = major * Math.cos(k * theta);
      x = rho * Math.cos(theta);
      z = rho * Math.sin(theta);
      y = minor * Math.sin(phi + t * 0.3) * 0.6;
      break;
    }
    case 'seifert': {
      const p = 2 + (idx % 3);
      const q = 3 + (idx % 2);
      x = (major + minor * Math.cos(q * phi)) * Math.cos(p * theta);
      z = (major + minor * Math.cos(q * phi)) * Math.sin(p * theta);
      y = minor * Math.sin(q * phi) + Math.sin(t * 0.25 + idx) * 0.5;
      break;
    }
    case 'blend': {
      const h = hamiltonianPath(theta, t, major);
      const k = kleinBottle(theta, phi, t, idx, major, toroidalWeave);
      const a = Math.min(1, Math.max(0, blend));
      x = h.x * (1 - a) + k.x * a;
      y = h.y * (1 - a) + k.y * a;
      z = h.z * (1 - a) + k.z * a;
      break;
    }
    case 'trefoil': {
      const u = theta;
      x = major * 0.35 * (Math.sin(u) + 2 * Math.sin(2 * u));
      z = major * 0.35 * (Math.cos(u) - 2 * Math.cos(2 * u));
      y = minor * 0.55 * Math.sin(3 * u) + Math.sin(t * 0.3 + idx) * 0.4;
      break;
    }
    case 'stereo': {
      const u = theta;
      const v = phi;
      const denom = 1 + Math.cos(v);
      const s = major * 0.55;
      x = s * Math.sin(v) * Math.cos(u) / (denom || 1e-6);
      z = s * Math.sin(v) * Math.sin(u) / (denom || 1e-6);
      y = s * Math.sin(t * 0.2 + idx * 0.1) * 0.3 + minor * 0.2 * Math.cos(v);
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

  if (!Number.isFinite(x)) x = 0;
  if (!Number.isFinite(y)) y = 0;
  if (!Number.isFinite(z)) z = 0;

  return { x, y, z, major, minor, gravityPull };
}
