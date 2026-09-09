export const nodeVertex = `
uniform float uTime;
uniform float uGravity;
attribute vec3 instanceColor;
varying vec3 vNormalW;
varying float vPulse;
varying vec3 vInstanceColor;

void main() {
  vNormalW = normalize(normalMatrix * normal);
  vInstanceColor = instanceColor;
  float pulse = 1.0 + 0.08 * uGravity * sin(uTime * 2.4 + position.y);
  vPulse = pulse;
  vec3 p = position * pulse;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

export const nodeFragment = `
uniform float uTime;
uniform float uGravity;
uniform vec3 uColor;
varying vec3 vNormalW;
varying float vPulse;
varying vec3 vInstanceColor;

void main() {
  float rim = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.0, 1.0))), 2.0);
  float glow = 0.35 + 0.45 * uGravity + 0.2 * sin(uTime * 3.0);
  vec3 base = length(vInstanceColor) > 0.01 ? vInstanceColor : uColor;
  vec3 col = base * vPulse + vec3(0.2, 0.8, 0.7) * rim * glow;
  gl_FragColor = vec4(col, 1.0);
}
`;
