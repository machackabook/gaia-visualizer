/**
 * Stage-11/16 GPU kernel for the chat update(t) geometries and full expansion set.
 * CPU evaluateGeometry remains the reference mapping.
 * GLSL is consumed by WebGL2 transform-feedback (src/transformFeedback.js).
 */
export const EVALUATE_KERNEL_GLSL = /* glsl */ `
vec3 kleinBottle(float theta, float phi, float t, float idx, float major, float weave) {
  float u = theta;
  float v = phi;
  float r = 4.0 + weave;
  float x = (r + cos(u * 0.5) * sin(v) - sin(u * 0.5) * sin(2.0 * v)) * cos(u) * 1.2;
  float z = (r + cos(u * 0.5) * sin(v) - sin(u * 0.5) * sin(2.0 * v)) * sin(u) * 1.2;
  float y = sin(u * 0.5) * sin(v) + cos(u * 0.5) * sin(2.0 * v) + sin(t * 0.2 + idx) * 0.3;
  return vec3(x * major * 0.12, y * major * 0.18, z * major * 0.12);
}

vec3 hamiltonianPath(float theta, float t, float major) {
  return vec3(
    major * cos(theta * 3.0) * cos(theta),
    major * sin(theta * 3.0) + sin(t) * 2.0,
    major * cos(theta * 3.0) * sin(theta)
  );
}

vec3 evaluateChatKernel(
  float theta,
  float phi,
  float t,
  float idx,
  float gravityPull,
  float toroidalWeave,
  int geometry,
  float blend
) {
  float major = 10.0 + mod(idx, 24.0) * 2.0;
  float minor = 3.0 + toroidalWeave * 2.0;
  vec3 p;

  if (geometry == 1) {
    float scale = major * 1.5;
    float s = sin(theta);
    float denom = 1.0 + s * s;
    p.x = (scale * cos(theta)) / denom;
    p.z = (scale * s * cos(theta)) / denom;
    p.y = minor * sin(phi) * sin(t * 0.5 + idx);
  } else if (geometry == 2) {
    p = hamiltonianPath(theta, t, major);
  } else if (geometry == 3) {
    float step = 6.28318530718 / 3.0;
    float tAngle = floor(theta / step) * step;
    p.x = major * cos(tAngle) + minor * cos(theta * 5.0);
    p.z = major * sin(tAngle) + minor * sin(theta * 5.0);
    p.y = (mod(idx, 3.0) - 1.0) * major * 0.5 + sin(t) * minor;
  } else if (geometry == 4) {
    float turns = 3.0 + toroidalWeave;
    p.x = minor * cos(theta);
    p.z = minor * sin(theta);
    p.y = mod(theta / 6.28318530718, turns) * (major / turns) - major * 0.4;
  } else if (geometry == 5) {
    float u = theta;
    float v = (idx / 12.0 - 0.5) * minor;
    p.x = (major + v * cos(u * 0.5)) * cos(u);
    p.z = (major + v * cos(u * 0.5)) * sin(u);
    p.y = v * sin(u * 0.5) + sin(t * 0.3 + idx) * 0.4;
  } else if (geometry == 6) {
    float a = 3.0 + mod(idx, 3.0);
    float b = 2.0 + mod(idx, 2.0);
    p.x = major * sin(a * theta + phi);
    p.y = minor * sin(b * theta);
    p.z = major * sin(a * theta) * cos(b * phi * 0.25);
  } else if (geometry == 7) {
    float u = theta;
    p.x = major * 0.35 * (sin(u) + 2.0 * sin(2.0 * u));
    p.z = major * 0.35 * (cos(u) - 2.0 * cos(2.0 * u));
    p.y = minor * 0.55 * sin(3.0 * u) + sin(t * 0.3 + idx) * 0.4;
  } else if (geometry == 8) {
    float scale = major * 1.15;
    float denom = 1.0 + sin(theta) * sin(theta);
    float cx = (scale * cos(theta)) / denom;
    float cz = (scale * sin(theta) * cos(theta)) / denom;
    float tube = minor * 0.35;
    p.x = cx + tube * cos(phi);
    p.y = tube * sin(phi) + sin(t * 0.4) * 0.4;
    p.z = cz + tube * sin(phi * 0.5);
  } else if (geometry == 9) {
    float a = major * 0.35;
    float b = a * (0.85 + 0.15 * sin(t * 0.2));
    float c2 = cos(2.0 * theta);
    float inner = b * b * b * b - a * a * a * a * sin(2.0 * theta) * sin(2.0 * theta);
    float r2 = a * a * c2 + sqrt(max(0.0, inner));
    float r = sqrt(max(0.0, r2));
    float tube = minor * 0.2;
    p.x = r * cos(theta) + tube * cos(phi);
    p.y = tube * sin(phi) + sin(t * 0.35) * 0.3;
    p.z = r * sin(theta) + tube * sin(phi * 0.5);
  } else if (geometry == 10) {
    float aa = 0.70710678118;
    float x4 = aa * cos(theta);
    float y4 = aa * sin(theta);
    float z4 = aa * cos(phi);
    float w4 = aa * sin(phi + t * 0.15);
    float d = max(1.0 - w4, 1e-6);
    p.x = (x4 / d) * major * 0.55;
    p.y = (z4 / d) * minor * 0.85;
    p.z = (y4 / d) * major * 0.55;
  } else if (geometry == 11) {
    float lane = mod(idx, 2.0);
    float a = major;
    float b = minor;
    float psi = theta + (lane > 0.5 ? 1.57079632679 : 0.0) + t * 0.05;
    float tilt = atan(b, a);
    float c = cos(tilt);
    float s = sin(tilt);
    float cx = a * cos(psi);
    float cz = a * sin(psi);
    float localX = b * cos(phi);
    float localY = b * sin(phi);
    p.x = cx + localX * c;
    p.y = localY * (lane > 0.5 ? 1.0 : -1.0) + sin(t * 0.3 + idx) * 0.2;
    p.z = cz + localX * s * (lane > 0.5 ? -1.0 : 1.0);
  } else if (geometry == 12) {
    p = kleinBottle(theta, phi, t, idx, major, toroidalWeave);
  } else if (geometry == 13) {
    float eta = theta;
    float xi = phi + t * 0.15 * gravityPull;
    float r = sin(eta);
    p.x = major * r * cos(xi);
    p.z = major * r * sin(xi);
    p.y = major * cos(eta) * 0.65 + sin(t * 0.4 + idx) * 0.4;
  } else if (geometry == 14) {
    float k = 3.0 + mod(idx, 4.0);
    float rho = major * cos(k * theta);
    p.x = rho * cos(theta);
    p.z = rho * sin(theta);
    p.y = minor * sin(phi + t * 0.3) * 0.6;
  } else if (geometry == 15) {
    float pp = 2.0 + mod(idx, 3.0);
    float qq = 3.0 + mod(idx, 2.0);
    p.x = (major + minor * cos(qq * phi)) * cos(pp * theta);
    p.z = (major + minor * cos(qq * phi)) * sin(pp * theta);
    p.y = minor * sin(qq * phi) + sin(t * 0.25 + idx) * 0.5;
  } else if (geometry == 16) {
    vec3 h = hamiltonianPath(theta, t, major);
    vec3 k = kleinBottle(theta, phi, t, idx, major, toroidalWeave);
    float a = clamp(blend, 0.0, 1.0);
    p = mix(h, k, a);
  } else if (geometry == 17) {
    float denom = 1.0 + cos(phi);
    float s = major * 0.55;
    p.x = s * sin(phi) * cos(theta) / max(denom, 1e-6);
    p.z = s * sin(phi) * sin(theta) / max(denom, 1e-6);
    p.y = s * sin(t * 0.2 + idx * 0.1) * 0.3 + minor * 0.2 * cos(phi);
  } else if (geometry == 18) {
    float u = sin(theta) * 1.15;
    float v = sin(phi) * 1.15;
    float s = major * 0.22;
    p.x = s * (u - u * u * u / 3.0 + u * v * v);
    p.y = s * (v - v * v * v / 3.0 + v * u * u) + sin(t * 0.25) * minor * 0.15;
    p.z = s * (u * u - v * v);
  } else if (geometry == 19) {
    float u = theta;
    float v = phi + t * 0.08;
    float w = t * 0.12;
    float g = sin(u) * cos(v) + sin(v) * cos(w) + sin(w) * cos(u);
    float r = major * 0.45 + minor * 0.25 * g;
    p.x = r * cos(u) * cos(v * 0.5);
    p.y = r * sin(v) * 0.65;
    p.z = r * sin(u) * cos(v * 0.5);
  } else if (geometry == 20) {
    float a = theta;
    float b = phi;
    float c = t * 0.2 + idx * 0.05;
    p.x = major * 0.4 * (cos(a) + 0.35 * cos(c) * cos(b));
    p.y = minor * 0.7 * (sin(a) * sin(b) + 0.25 * sin(c));
    p.z = major * 0.4 * (cos(b) + 0.35 * sin(c) * cos(a));
  } else if (geometry == 21) {
    float u = theta;
    float v = mod(phi, 3.14159265359) * 0.95 + 0.05;
    float su = sin(u);
    float cu = cos(u);
    float sv = sin(v);
    float cv = cos(v);
    float s = major * 0.55;
    p.x = s * (-1.5 * cu * su * sv * sv);
    p.y = s * cv * sv * sv * 0.85 + sin(t * 0.2) * minor * 0.1;
    p.z = s * su * (cu * cu - sv * sv * su * su);
  } else if (geometry == 22) {
    float u = (phi - 3.14159265359) * 1.1;
    float v = theta;
    float alpha = (sin(t * 0.15) + 1.0) * 0.5;
    float cosh = (exp(u) + exp(-u)) * 0.5;
    float s = major * 0.28;
    vec3 cat = vec3(s * cosh * cos(v), s * u, s * cosh * sin(v));
    vec3 hel = vec3(s * u * cos(v), s * v * 0.35, s * u * sin(v));
    p = mix(cat, hel, alpha);
    p.y += sin(t * 0.2) * minor * 0.05;
  } else if (geometry == 23) {
    float a = major * 0.18;
    float b = 0.2 + minor * 0.04;
    float u = theta;
    float v = 0.15 + (mod(phi, 3.14159265359 * 0.9) + 3.14159265359 * 0.05);
    float sv = max(sin(v), 1e-6);
    p.x = a * cos(u) * sin(v);
    p.y = a * (cos(v) + log(sv) * 0.35) + b * u * 0.15 + sin(t * 0.2) * 0.2;
    p.z = a * sin(u) * sin(v);
  } else if (geometry == 24) {
    float u = theta;
    float v = phi * 0.5;
    float s = major * 0.35;
    float su = sin(u);
    float cu = cos(u);
    float sv = sin(v);
    float cv = cos(v);
    p.x = s * su * cu * sv * sv;
    p.y = s * su * su * sv * cv + sin(t * 0.25) * minor * 0.08;
    p.z = s * cu * su * sv * cv;
  } else if (geometry == 25) {
    float u = theta;
    float v = (phi - 3.14159265359) * 0.55;
    float a = major * 0.35;
    float c = minor * 0.55;
    float cosh = (exp(v) + exp(-v)) * 0.5;
    p.x = a * cosh * cos(u);
    p.y = c * v + sin(t * 0.3 + idx) * 0.3;
    p.z = a * cosh * sin(u);
  } else if (geometry == 26) {
    float u = sin(theta) * 1.2;
    float v = sin(phi) * 1.2;
    float s = major * 0.28;
    p.x = s * u;
    p.y = s * log(abs(cos(u) / max(cos(v), 1e-4)) + 1e-4) + sin(t * 0.2) * minor * 0.08;
    p.z = s * v;
  } else if (geometry == 27) {
    float pN = 3.0;
    float qN = 5.0;
    float u = theta;
    float r = major * 0.28 + minor * 0.12 * cos(qN * u);
    p.x = r * cos(pN * u);
    p.y = minor * 0.35 * sin(qN * u) + sin(t * 0.3 + idx) * 0.25;
    p.z = r * sin(pN * u);
  } else if (geometry == 28) {
    float u = mod(phi, 3.14159265359 * 0.95) + 0.08;
    float v = theta;
    float a = major * 0.22;
    float su = max(sin(u), 1e-6);
    p.x = a * su * cos(v);
    p.y = a * (cos(u) + log(max(tan(u * 0.5), 1e-4))) * 0.45 + sin(t * 0.2) * minor * 0.06;
    p.z = a * su * sin(v);
  } else if (geometry == 29) {
    float s = 10.0;
    float rr = 28.0;
    float bb = 8.0 / 3.0;
    float x = sin(theta + idx);
    float y = cos(theta * 0.7 + idx);
    float z = 20.0 + sin(idx);
    float dt = 0.008 * (0.6 + gravityPull);
    for (int i = 0; i < 8; i++) {
      float dx = s * (y - x);
      float dy = x * (rr - z) - y;
      float dz = x * y - bb * z;
      x += dx * dt;
      y += dy * dt;
      z += dz * dt;
    }
    float k = major * 0.045;
    p.x = x * k;
    p.y = (z - 25.0) * k * 0.55 + sin(t * 0.2) * 0.4;
    p.z = y * k;
  } else if (geometry == 30) {
    float m = 6.0;
    float n1 = 0.3 + (sin(t * 0.15) + 1.0) * 0.4;
    float n2 = 1.7;
    float n3 = 1.7;
    float t4 = (m * theta) / 4.0;
    float part = pow(abs(cos(t4)), n2) + pow(abs(sin(t4)), n3);
    float rho = major * 0.45 / pow(max(part, 1e-6), 1.0 / n1);
    p.x = rho * cos(theta);
    p.y = minor * 0.45 * sin(phi + t * 0.25);
    p.z = rho * sin(theta);
  } else {
    p.x = (major + minor * cos(phi)) * cos(theta);
    p.z = (major + minor * cos(phi)) * sin(theta);
    p.y = minor * sin(phi) * sin(t * 0.5 + idx);
  }
  return p;
}
`;

export const KERNEL_GEOMETRY_ID = {
  torus: 0,
  infinity: 1,
  hamiltonian: 2,
  triangular: 3,
  helix: 4,
  mobius: 5,
  lissajous: 6,
  trefoil: 7,
  figure8: 8,
  cassini: 9,
  clifford: 10,
  villarceau: 11,
  klein: 12,
  hopf: 13,
  rose: 14,
  seifert: 15,
  blend: 16,
  stereo: 17,
  enneper: 18,
  gyroid: 19,
  calabi: 20,
  boy: 21,
  catenoid: 22,
  dini: 23,
  roman: 24,
  hyperbolic: 25,
  scherk: 26,
  knot: 27,
  pseudosphere: 28,
  lorenz: 29,
  superformula: 30,
};
