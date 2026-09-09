/**
 * Evaluate the target geometric state assigned by the LLM.
 * Pure mapping: (theta, phi, t, idx, state, geometry) -> {x,y,z}
 * Chat kernel remains torus / infinity / hamiltonian / triangular + lerp.
 * Stage-16: CPU reference for the full 31-manifold set; TF kernel now covers all ids 0–30.
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

function cliffordTorus(theta, phi, t, major, minor) {
  const a = Math.SQRT1_2;
  const x4 = a * Math.cos(theta);
  const y4 = a * Math.sin(theta);
  const z4 = a * Math.cos(phi);
  const w4 = a * Math.sin(phi + t * 0.15);
  const d = 1 - w4 || 1e-6;
  return {
    x: (x4 / d) * major * 0.55,
    y: (z4 / d) * minor * 0.85,
    z: (y4 / d) * major * 0.55,
  };
}

function enneper(theta, phi, t, major, minor) {
  const u = Math.sin(theta) * 1.15;
  const v = Math.sin(phi) * 1.15;
  const s = major * 0.22;
  return {
    x: s * (u - u * u * u / 3 + u * v * v),
    y: s * (v - v * v * v / 3 + v * u * u) + Math.sin(t * 0.25) * minor * 0.15,
    z: s * (u * u - v * v),
  };
}

function gyroid(theta, phi, t, major, minor) {
  const u = theta;
  const v = phi + t * 0.08;
  const w = t * 0.12;
  const g =
    Math.sin(u) * Math.cos(v) +
    Math.sin(v) * Math.cos(w) +
    Math.sin(w) * Math.cos(u);
  const r = major * 0.45 + minor * 0.25 * g;
  return {
    x: r * Math.cos(u) * Math.cos(v * 0.5),
    y: r * Math.sin(v) * 0.65,
    z: r * Math.sin(u) * Math.cos(v * 0.5),
  };
}

function calabi(theta, phi, t, idx, major, minor) {
  const a = theta;
  const b = phi;
  const c = t * 0.2 + idx * 0.05;
  const x6 = Math.cos(a);
  const y6 = Math.sin(a);
  const z6 = Math.cos(b);
  const w6 = Math.sin(b);
  const u6 = Math.cos(c);
  const v6 = Math.sin(c);
  return {
    x: major * 0.4 * (x6 + 0.35 * u6 * z6),
    y: minor * 0.7 * (y6 * w6 + 0.25 * v6),
    z: major * 0.4 * (z6 + 0.35 * v6 * x6),
  };
}

function figure8(theta, phi, t, major, minor) {
  const scale = major * 1.15;
  const denom = 1 + Math.sin(theta) * Math.sin(theta);
  const cx = (scale * Math.cos(theta)) / denom;
  const cz = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  const tube = minor * 0.35;
  return {
    x: cx + tube * Math.cos(phi),
    y: tube * Math.sin(phi) + Math.sin(t * 0.4) * 0.4,
    z: cz + tube * Math.sin(phi * 0.5),
  };
}

function villarceau(theta, phi, t, idx, major, minor) {
  const lane = idx % 2;
  const a = major;
  const b = minor;
  const psi = theta + (lane ? Math.PI / 2 : 0) + t * 0.05;
  const tilt = Math.atan2(b, a);
  const c = Math.cos(tilt);
  const s = Math.sin(tilt);
  const cx = a * Math.cos(psi);
  const cz = a * Math.sin(psi);
  const r = b;
  const localX = r * Math.cos(phi);
  const localY = r * Math.sin(phi);
  return {
    x: cx + localX * c,
    y: localY * (lane ? 1 : -1) + Math.sin(t * 0.3 + idx) * 0.2,
    z: cz + localX * s * (lane ? -1 : 1),
  };
}

function boy(theta, phi, t, major, minor) {
  const u = theta;
  const v = (phi % Math.PI) * 0.95 + 0.05;
  const su = Math.sin(u);
  const cu = Math.cos(u);
  const sv = Math.sin(v);
  const cv = Math.cos(v);
  const g1 = -1.5 * cu * su * sv * sv;
  const g2 = su * (cu * cu - sv * sv * su * su);
  const g3 = cv * sv * sv;
  const s = major * 0.55;
  return {
    x: s * g1,
    y: s * g3 * 0.85 + Math.sin(t * 0.2) * minor * 0.1,
    z: s * g2,
  };
}

function catenoid(theta, phi, t, major, minor) {
  const u = (phi - Math.PI) * 1.1;
  const v = theta;
  const alpha = (Math.sin(t * 0.15) + 1) * 0.5;
  const cosh = (Math.exp(u) + Math.exp(-u)) * 0.5;
  const s = major * 0.28;
  const catX = s * cosh * Math.cos(v);
  const catZ = s * cosh * Math.sin(v);
  const catY = s * u;
  const helX = s * u * Math.cos(v);
  const helZ = s * u * Math.sin(v);
  const helY = s * v * 0.35;
  return {
    x: catX * (1 - alpha) + helX * alpha,
    y: catY * (1 - alpha) + helY * alpha + Math.sin(t * 0.2) * minor * 0.05,
    z: catZ * (1 - alpha) + helZ * alpha,
  };
}

function dini(theta, phi, t, major, minor) {
  const a = major * 0.18;
  const b = 0.2 + minor * 0.04;
  const u = theta;
  const v = 0.15 + ((phi % (Math.PI * 0.9)) + Math.PI * 0.05);
  const sv = Math.sin(v) || 1e-6;
  return {
    x: a * Math.cos(u) * Math.sin(v),
    y: a * (Math.cos(v) + Math.log(sv) * 0.35) + b * u * 0.15 + Math.sin(t * 0.2) * 0.2,
    z: a * Math.sin(u) * Math.sin(v),
  };
}

function roman(theta, phi, t, major, minor) {
  const u = theta;
  const v = phi * 0.5;
  const s = major * 0.35;
  const su = Math.sin(u);
  const cu = Math.cos(u);
  const sv = Math.sin(v);
  const cv = Math.cos(v);
  return {
    x: s * su * cu * sv * sv,
    y: s * su * su * sv * cv + Math.sin(t * 0.25) * minor * 0.08,
    z: s * cu * su * sv * cv,
  };
}

function hyperbolic(theta, phi, t, idx, major, minor) {
  const u = theta;
  const v = (phi - Math.PI) * 0.55;
  const a = major * 0.35;
  const c = minor * 0.55;
  const cosh = (Math.exp(v) + Math.exp(-v)) * 0.5;
  return {
    x: a * cosh * Math.cos(u),
    y: c * v + Math.sin(t * 0.3 + idx) * 0.3,
    z: a * cosh * Math.sin(u),
  };
}

function scherk(theta, phi, t, major, minor) {
  const u = Math.sin(theta) * 1.2;
  const v = Math.sin(phi) * 1.2;
  const s = major * 0.28;
  const cu = Math.cos(u);
  return {
    x: s * u,
    y: s * Math.log(Math.abs(cu / Math.cos(v)) + 1e-4) + Math.sin(t * 0.2) * minor * 0.08,
    z: s * v,
  };
}

function knot(theta, t, idx, major, minor) {
  const p = 3;
  const q = 5;
  const u = theta;
  const r = major * 0.28 + minor * 0.12 * Math.cos(q * u);
  return {
    x: r * Math.cos(p * u),
    y: minor * 0.35 * Math.sin(q * u) + Math.sin(t * 0.3 + idx) * 0.25,
    z: r * Math.sin(p * u),
  };
}

function pseudosphere(theta, phi, t, major, minor) {
  const u = ((phi % (Math.PI * 0.95)) + 0.08);
  const v = theta;
  const a = major * 0.22;
  const su = Math.sin(u) || 1e-6;
  return {
    x: a * su * Math.cos(v),
    y: a * (Math.cos(u) + Math.log(Math.tan(u / 2) || 1e-4)) * 0.45 + Math.sin(t * 0.2) * minor * 0.06,
    z: a * su * Math.sin(v),
  };
}

function cassini(theta, phi, t, major, minor) {
  const a = major * 0.35;
  const b = a * (0.85 + 0.15 * Math.sin(t * 0.2));
  const c2 = Math.cos(2 * theta);
  const inner = b * b * b * b - a * a * a * a * Math.sin(2 * theta) * Math.sin(2 * theta);
  const r2 = a * a * c2 + Math.sqrt(Math.max(0, inner));
  const r = Math.sqrt(Math.max(0, r2));
  const tube = minor * 0.2;
  return {
    x: r * Math.cos(theta) + tube * Math.cos(phi),
    y: tube * Math.sin(phi) + Math.sin(t * 0.35) * 0.3,
    z: r * Math.sin(theta) + tube * Math.sin(phi * 0.5),
  };
}

function lorenz(theta, t, idx, major, gravityPull) {
  const s = 10;
  const r = 28;
  const b = 8 / 3;
  let x = Math.sin(theta + idx);
  let y = Math.cos(theta * 0.7 + idx);
  let z = 20 + Math.sin(idx);
  const steps = 8;
  const dt = 0.008 * (0.6 + gravityPull);
  for (let i = 0; i < steps; i++) {
    const dx = s * (y - x);
    const dy = x * (r - z) - y;
    const dz = x * y - b * z;
    x += dx * dt;
    y += dy * dt;
    z += dz * dt;
  }
  const k = major * 0.045;
  return { x: x * k, y: (z - 25) * k * 0.55 + Math.sin(t * 0.2) * 0.4, z: y * k };
}

function superformula(theta, phi, t, major, minor) {
  const m = 6;
  const n1 = 0.3 + (Math.sin(t * 0.15) + 1) * 0.4;
  const n2 = 1.7;
  const n3 = 1.7;
  const a = 1;
  const c = 1;
  const t4 = (m * theta) / 4;
  const part = Math.pow(Math.abs(Math.cos(t4) / a), n2) + Math.pow(Math.abs(Math.sin(t4) / c), n3);
  const rho = major * 0.45 / Math.pow(Math.max(part, 1e-6), 1 / n1);
  return {
    x: rho * Math.cos(theta),
    y: minor * 0.45 * Math.sin(phi + t * 0.25),
    z: rho * Math.sin(theta),
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
    case 'clifford': {
      const c = cliffordTorus(theta, phi, t, major, minor);
      x = c.x; y = c.y; z = c.z;
      break;
    }
    case 'enneper': {
      const e = enneper(theta, phi, t, major, minor);
      x = e.x; y = e.y; z = e.z;
      break;
    }
    case 'gyroid': {
      const g = gyroid(theta, phi, t, major, minor);
      x = g.x; y = g.y; z = g.z;
      break;
    }
    case 'calabi': {
      const c = calabi(theta, phi, t, idx, major, minor);
      x = c.x; y = c.y; z = c.z;
      break;
    }
    case 'figure8': {
      const f = figure8(theta, phi, t, major, minor);
      x = f.x; y = f.y; z = f.z;
      break;
    }
    case 'villarceau': {
      const v = villarceau(theta, phi, t, idx, major, minor);
      x = v.x; y = v.y; z = v.z;
      break;
    }
    case 'boy': {
      const b = boy(theta, phi, t, major, minor);
      x = b.x; y = b.y; z = b.z;
      break;
    }
    case 'catenoid': {
      const c = catenoid(theta, phi, t, major, minor);
      x = c.x; y = c.y; z = c.z;
      break;
    }
    case 'dini': {
      const d = dini(theta, phi, t, major, minor);
      x = d.x; y = d.y; z = d.z;
      break;
    }
    case 'roman': {
      const r = roman(theta, phi, t, major, minor);
      x = r.x; y = r.y; z = r.z;
      break;
    }
    case 'hyperbolic': {
      const h = hyperbolic(theta, phi, t, idx, major, minor);
      x = h.x; y = h.y; z = h.z;
      break;
    }
    case 'scherk': {
      const s = scherk(theta, phi, t, major, minor);
      x = s.x; y = s.y; z = s.z;
      break;
    }
    case 'knot': {
      const k = knot(theta, t, idx, major, minor);
      x = k.x; y = k.y; z = k.z;
      break;
    }
    case 'pseudosphere': {
      const p = pseudosphere(theta, phi, t, major, minor);
      x = p.x; y = p.y; z = p.z;
      break;
    }
    case 'cassini': {
      const c = cassini(theta, phi, t, major, minor);
      x = c.x; y = c.y; z = c.z;
      break;
    }
    case 'lorenz': {
      const l = lorenz(theta, t, idx, major, gravityPull);
      x = l.x; y = l.y; z = l.z;
      break;
    }
    case 'superformula': {
      const s = superformula(theta, phi, t, major, minor);
      x = s.x; y = s.y; z = s.z;
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
