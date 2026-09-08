/**
 * Evaluate the target geometric state assigned by the LLM.
 * Pure mapping: (theta, phi, t, idx, state, geometry) -> {x,y,z}
 */
export const GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'helix', 'mobius'];

export function evaluateGeometry({
  theta,
  phi,
  t,
  idx,
  gravityPull = 1,
  toroidalWeave = 1,
  geometry = 'torus',
}) {
  const major = 10 + idx * 2;
  const minor = 3 + toroidalWeave * 2;
  let x = 0, y = 0, z = 0;

  switch (geometry) {
    case 'infinity': {
      // Lemniscate of Bernoulli
      const scale = major * 1.5;
      const denom = 1 + Math.sin(theta) * Math.sin(theta);
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
    case 'torus':
    default: {
      x = (major + minor * Math.cos(phi)) * Math.cos(theta);
      z = (major + minor * Math.cos(phi)) * Math.sin(theta);
      y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
      break;
    }
  }

  return { x, y, z, major, minor, gravityPull };
}
