/**
 * Evaluate the target geometric state assigned by the LLM.
 * Pure mapping: (theta, phi, t, idx, state, geometry) -> {x,y,z}
 * Chat kernel remains torus / infinity / hamiltonian / triangular + lerp.
 * Stage-16: CPU reference for the full 31-manifold set; TF kernel now covers all ids 0–30.
 * Stage 321: blend accepts blendFrom / blendTo (default hamiltonian → klein).
 * Stage 1325: major = 10 + (idx * 2) matches session paste exactly (removed % 24 living clamp).
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
  'clifford',
  'enneper',
  'gyroid',
  'calabi',
  'figure8',
  'villarceau',
  'boy',
  'catenoid',
  'dini',
  'roman',
  'hyperbolic',
  'scherk',
  'knot',
  'pseudosphere',
  'cassini',
  'lorenz',
  'superformula',
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

function torusPath(theta, phi, t, idx, major, minor) {
  return {
    x: (major + minor * Math.cos(phi)) * Math.cos(theta),
    z: (major + minor * Math.cos(phi)) * Math.sin(theta),
    y: minor * Math.sin(phi) * Math.sin(t * 0.5 + idx),
  };
}

function infinityPath(theta, phi, t, idx, major, minor) {
  const scale = major * 1.5;
  const denom = 1 + Math.sin(theta) * Math.sin(theta);
  return {
    x: (scale * Math.cos(theta)) / denom,
    z: (scale * Math.sin(theta) * Math.cos(theta)) / denom,
    y: minor * Math.sin(phi) * Math.sin(t * 0.5 + idx),
  };
}

function triangularPath(theta, t, idx, major, minor) {
  const step = (Math.PI * 2) / 3;
  const tAngle = Math.floor(theta / step) * step;
  return {
    x: major * Math.cos(tAngle) + minor * Math.cos(theta * 5),
    z: major * Math.sin(tAngle) + minor * Math.sin(theta * 5),
    y: (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor,
  };
}

function sampleNamed(name, ctx) {
  const { theta, phi, t, idx, major, minor, toroidalWeave, gravityPull } = ctx;
  switch (name) {
    case 'infinity': return infinityPath(theta, phi, t, idx, major, minor);
    case 'hamiltonian': return hamiltonianPath(theta, t, major);
    case 'triangular': return triangularPath(theta, t, idx, major, minor);
    case 'klein': return kleinBottle(theta, phi, t, idx, major, toroidalWeave);
    case 'torus':
    default: return torusPath(theta, phi, t, idx, major, minor);
  }
}

// ... (remaining helper functions unchanged for brevity in this update; full file continues as before)

export function evaluateGeometry({
  theta,
  phi,
  t,
  idx,
  gravityPull = 1,
  toroidalWeave = 1,
  geometry = 'torus',
  blend = 0.5,
  blendFrom = 'hamiltonian',
  blendTo = 'klein',
}) {
  // STAGE-1325: major formula matches session paste exactly: 10 + (idx * 2)
  const major = 10 + (idx * 2);
  const minor = 3 + toroidalWeave * 2;
  let x = 0, y = 0, z = 0;
  const ctx = { theta, phi, t, idx, major, minor, toroidalWeave, gravityPull };

  switch (geometry) {
    case 'infinity': {
      const p = infinityPath(theta, phi, t, idx, major, minor);
      x = p.x; y = p.y; z = p.z;
      break;
    }
    case 'hamiltonian': {
      const h = hamiltonianPath(theta, t, major);
      x = h.x; y = h.y; z = h.z;
      break;
    }
    case 'triangular': {
      const p = triangularPath(theta, t, idx, major, minor);
      x = p.x; y = p.y; z = p.z;
      break;
    }
    // ... (all other cases remain identical)
    case 'torus':
    default: {
      const p = torusPath(theta, phi, t, idx, major, minor);
      x = p.x; y = p.y; z = p.z;
      break;
    }
  }

  if (!Number.isFinite(x)) x = 0;
  if (!Number.isFinite(y)) y = 0;
  if (!Number.isFinite(z)) z = 0;

  return { x, y, z, major, minor, gravityPull };
}
