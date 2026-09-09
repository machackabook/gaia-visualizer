/**
 * Stage-11/15 GPU kernel for the chat update(t) geometries and first expansion wave.
 * CPU evaluateGeometry remains the reference mapping.
 * GLSL is consumed by WebGL2 transform-feedback (src/transformFeedback.js).
 */
export const EVALUATE_KERNEL_GLSL = /* glsl */ `
vec3 evaluateChatKernel(
  float theta,
  float phi,
  float t,
  float idx,
  float gravityPull,
  float toroidalWeave,
  int geometry
) {
  float major = 10.0 + mod(idx, 24.0) * 2.0;
  float minor = 3.0 + toroidalWeave * 2.0;
  vec3 p;

  if (geometry == 1) {
    // infinity — Lemniscate of Bernoulli (chat kernel)
    float scale = major * 1.5;
    float s = sin(theta);
    float denom = 1.0 + s * s;
    p.x = (scale * cos(theta)) / denom;
    p.z = (scale * s * cos(theta)) / denom;
    p.y = minor * sin(phi) * sin(t * 0.5 + idx);
  } else if (geometry == 2) {
    // hamiltonian — vertex-favoring spherical grid (chat kernel)
    p.x = major * cos(theta * 3.0) * cos(theta);
    p.z = major * cos(theta * 3.0) * sin(theta);
    p.y = major * sin(theta * 3.0) + sin(t) * 2.0;
  } else if (geometry == 3) {
    // triangular — modulo snap to 3-fold lattice (chat kernel)
    float step = 6.28318530718 / 3.0;
    float tAngle = floor(theta / step) * step;
    p.x = major * cos(tAngle) + minor * cos(theta * 5.0);
    p.z = major * sin(tAngle) + minor * sin(theta * 5.0);
    p.y = (mod(idx, 3.0) - 1.0) * major * 0.5 + sin(t) * minor;
  } else if (geometry == 4) {
    // helix — gravity-wound climb
    p.x = major * cos(theta);
    p.z = major * sin(theta);
    p.y = (theta * 0.35 + idx * 0.08) * gravityPull + minor * sin(phi);
  } else if (geometry == 5) {
    // mobius — one-sided strip
    float w = minor * cos(phi * 0.5);
    p.x = (major + w * cos(theta * 0.5)) * cos(theta);
    p.z = (major + w * cos(theta * 0.5)) * sin(theta);
    p.y = w * sin(theta * 0.5);
  } else if (geometry == 6) {
    // lissajous — coupled harmonics
    p.x = major * sin(theta * 3.0 + t * 0.2);
    p.y = minor * sin(theta * 2.0 + phi);
    p.z = major * sin(theta * 5.0);
  } else if (geometry == 7) {
    // trefoil — (2,3) torus knot
    float u = theta;
    p.x = (major + minor * cos(3.0 * u)) * cos(2.0 * u);
    p.z = (major + minor * cos(3.0 * u)) * sin(2.0 * u);
    p.y = minor * sin(3.0 * u) + 0.4 * sin(t + idx);
  } else if (geometry == 8) {
    // figure8 — 3D lemniscate tube
    float scale = major * 1.2;
    float s = sin(theta);
    float denom = 1.0 + s * s;
    p.x = (scale * cos(theta)) / denom + minor * cos(phi) * 0.2;
    p.z = (scale * s * cos(theta)) / denom;
    p.y = (scale * s) / denom * 0.35 + minor * sin(phi) * 0.25;
  } else if (geometry == 9) {
    // cassini — lemniscate sibling
    float a = major * 0.6;
    float b = a * (0.85 + 0.15 * sin(t * 0.3));
    float cth = cos(theta);
    float r2 = sqrt(max(0.0, b * b * b * b - 2.0 * a * a * b * b * cos(2.0 * theta) + a * a * a * a));
    float r = sqrt(max(0.0, a * a * cth * cth + r2 * 0.25));
    p.x = r * cth;
    p.z = r * sin(theta);
    p.y = minor * sin(phi) * 0.4;
  } else if (geometry == 10) {
    // clifford — S3 torus projected
    float a = theta;
    float b = phi;
    p.x = major * cos(a);
    p.y = minor * sin(a) * 0.7 + minor * cos(b) * 0.3;
    p.z = major * sin(b);
  } else if (geometry == 11) {
    // villarceau — interlocking circles on a torus
    float u = theta + phi;
    p.x = (major + minor * cos(u)) * cos(theta);
    p.z = (major + minor * cos(u)) * sin(theta);
    p.y = minor * sin(u);
  } else {
    // torus — default chat kernel
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
};
