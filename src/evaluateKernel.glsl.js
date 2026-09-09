/**
 * Stage-11 GPU kernel for the chat update(t) geometries.
 * CPU evaluateGeometry remains the reference mapping.
 * This GLSL is the transform-feedback / compute candidate for torus,
 * infinity (lemniscate), hamiltonian, and triangular.
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
    // infinity — Lemniscate of Bernoulli
    float scale = major * 1.5;
    float s = sin(theta);
    float denom = 1.0 + s * s;
    p.x = (scale * cos(theta)) / denom;
    p.z = (scale * s * cos(theta)) / denom;
    p.y = minor * sin(phi) * sin(t * 0.5 + idx);
  } else if (geometry == 2) {
    // hamiltonian — vertex-favoring spherical grid
    p.x = major * cos(theta * 3.0) * cos(theta);
    p.z = major * cos(theta * 3.0) * sin(theta);
    p.y = major * sin(theta * 3.0) + sin(t) * 2.0;
  } else if (geometry == 3) {
    // triangular — modulo snap to 3-fold lattice
    float step = 6.28318530718 / 3.0;
    float tAngle = floor(theta / step) * step;
    p.x = major * cos(tAngle) + minor * cos(theta * 5.0);
    p.z = major * sin(tAngle) + minor * sin(theta * 5.0);
    p.y = (mod(idx, 3.0) - 1.0) * major * 0.5 + sin(t) * minor;
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
};
