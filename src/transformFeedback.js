/**
 * Stage-16/23/65 WebGL2 transform-feedback kernel.
 * Advances theta/phi and evaluates the full manifold set on the GPU.
 * Falls back silently when the context is not WebGL2.
 *
 * Chat kernel (CPU reference, never allocate inside the loop):
 *   uniforms uTime / uGravity
 *   theta += (0.01 + idx * 0.002) * gravityPull
 *   switch(targetState.geometry) { infinity | hamiltonian | triangular | torus | … }
 *   mesh.position.lerp(target, 0.05)
 *
 * Stage 21: currentPosBuffer() + skipCpu readback unless a peer streamer needs snapshots.
 * Stage 22: markZeroCopyAttribute + skip getBufferSubData on the visual path.
 * Stage 23: Three instanceOffset binds to currentPosBuffer() (ping-pong) each frame.
 * Stage 61: vPhi uses 0.007 * uWeave to match living CHAT_KERNEL_PHI_WEAVE * toroidalWeave.
 * Stage 62: vPos = mix(aPrevPos, evaluateChatKernel(...), uLerp) with default 0.05.
 * Stage 63: aPrevPos is seeded from first CPU evaluateChatKernel so frame-0 does not bloom from origin.
 * Stage 64: when geometry changes, re-seed aPrevPos from the new manifold so lerp does not drag through leftover positions.
 * Stage 65: CPU hopf/figure8 extras now match this GPU kernel (ids 13 / 8).
 */
import { EVALUATE_KERNEL_GLSL, KERNEL_GEOMETRY_ID } from './evaluateKernel.glsl.js';
import { CHAT_KERNEL_LERP, seedPrevPositions } from './chatKernel.js';

const TF_VERT = /* glsl */ `#version 300 es
precision highp float;
layout(location = 0) in float aTheta;
layout(location = 1) in float aPhi;
layout(location = 2) in float aIdx;
layout(location = 3) in vec3 aPrevPos;

uniform float uTime;
uniform float uGravity;
uniform float uWeave;
uniform int uGeometry;
uniform float uBlend;
uniform float uLerp;

out float vTheta;
out float vPhi;
out vec3 vPos;

${EVALUATE_KERNEL_GLSL}

void main() {
  float pull = max(uGravity, 0.05);
  float weave = max(uWeave, 0.0);
  vTheta = aTheta + (0.01 + aIdx * 0.002) * pull;
  vPhi = aPhi + 0.007 * weave;
  vec3 target = evaluateChatKernel(vTheta, vPhi, uTime, aIdx, pull, weave, uGeometry, uBlend);
  float a = clamp(uLerp, 0.0, 1.0);
  vPos = mix(aPrevPos, target, a);
}
`;

const TF_FRAG = /* glsl */ `#version 300 es
precision highp float;
out vec4 o;
void main() { o = vec4(0.0); }
`;

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error(log);
  }
  return sh;
}

export function createTransformFeedback(gl, count, seedTheta, seedPhi, seedPos) {
  if (!gl || typeof WebGL2RenderingContext === 'undefined' || !(gl instanceof WebGL2RenderingContext)) {
    return null;
  }
  const vs = compile(gl, gl.VERTEX_SHADER, TF_VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, TF_FRAG);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.transformFeedbackVaryings(program, ['vTheta', 'vPhi', 'vPos'], gl.SEPARATE_ATTRIBS);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return null;
  }

  const idx = new Float32Array(count);
  for (let i = 0; i < count; i++) idx[i] = i;

  const makeBuf = (data, usage = gl.DYNAMIC_COPY) => {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, usage);
    return b;
  };

  const initialPos = (seedPos && seedPos.length === count * 3)
    ? seedPos
    : seedPrevPositions(count, seedTheta, seedPhi, 0, 'torus', 1);

  const ping = {
    theta: makeBuf(seedTheta),
    phi: makeBuf(seedPhi),
    pos: makeBuf(initialPos),
  };
  const pong = {
    theta: makeBuf(new Float32Array(count)),
    phi: makeBuf(new Float32Array(count)),
    pos: makeBuf(new Float32Array(initialPos)),
  };
  const idxBuf = makeBuf(idx, gl.STATIC_DRAW);

  const makeVao = (src) => {
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, src.theta);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, src.phi);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, idxBuf);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, src.pos);
    gl.enableVertexAttribArray(3);
    gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    return vao;
  };

  const makeTf = (dst) => {
    const tf = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, dst.theta);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, dst.phi);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 2, dst.pos);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    return tf;
  };

  let read = ping;
  let write = pong;
  const vaoPing = makeVao(ping);
  const vaoPong = makeVao(pong);
  const tfPingToPong = makeTf(pong);
  const tfPongToPing = makeTf(ping);

  const loc = {
    uTime: gl.getUniformLocation(program, 'uTime'),
    uGravity: gl.getUniformLocation(program, 'uGravity'),
    uWeave: gl.getUniformLocation(program, 'uWeave'),
    uGeometry: gl.getUniformLocation(program, 'uGeometry'),
    uBlend: gl.getUniformLocation(program, 'uBlend'),
    uLerp: gl.getUniformLocation(program, 'uLerp'),
  };

  const outPos = new Float32Array(count * 3);
  const outTheta = new Float32Array(count);
  const outPhi = new Float32Array(count);
  let lastGeometry = null;

  function uploadPosBoth(pos) {
    gl.bindBuffer(gl.ARRAY_BUFFER, ping.pos);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, pos);
    gl.bindBuffer(gl.ARRAY_BUFFER, pong.pos);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, pos);
  }

  function currentAngles() {
    gl.bindBuffer(gl.ARRAY_BUFFER, read.theta);
    gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outTheta);
    gl.bindBuffer(gl.ARRAY_BUFFER, read.phi);
    gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outPhi);
    return { theta: outTheta, phi: outPhi };
  }

  function reseedGeometry(geometryName, t, toroidalWeave) {
    const angles = currentAngles();
    const pos = seedPrevPositions(
      count,
      angles.theta,
      angles.phi,
      t,
      geometryName || 'torus',
      toroidalWeave ?? 1,
    );
    uploadPosBoth(pos);
    lastGeometry = geometryName || 'torus';
    return pos;
  }

  return {
    supported: true,
    count,
    currentPosBuffer() {
      return read.pos;
    },
    reseedGeometry,
    step(t, state, geometryName) {
      if (lastGeometry == null) {
        lastGeometry = geometryName || 'torus';
      } else if (geometryName && geometryName !== lastGeometry) {
        reseedGeometry(geometryName, t, state.toroidalWeave ?? 1);
      }
      const geom = KERNEL_GEOMETRY_ID[geometryName] ?? 0;
      gl.useProgram(program);
      gl.uniform1f(loc.uTime, t);
      gl.uniform1f(loc.uGravity, state.gravityPull ?? 1);
      gl.uniform1f(loc.uWeave, state.toroidalWeave ?? 1);
      gl.uniform1i(loc.uGeometry, geom);
      gl.uniform1f(loc.uBlend, state.blend ?? 0.5);
      gl.uniform1f(loc.uLerp, state.lerp ?? CHAT_KERNEL_LERP);

      const vao = read === ping ? vaoPing : vaoPong;
      const tfObj = read === ping ? tfPingToPong : tfPongToPing;
      gl.bindVertexArray(vao);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tfObj);
      gl.enable(gl.RASTERIZER_DISCARD);
      gl.beginTransformFeedback(gl.POINTS);
      gl.drawArrays(gl.POINTS, 0, count);
      gl.endTransformFeedback();
      gl.disable(gl.RASTERIZER_DISCARD);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
      gl.bindVertexArray(null);

      const tmp = read;
      read = write;
      write = tmp;
    },
    readback(buffers) {
      gl.bindBuffer(gl.ARRAY_BUFFER, read.pos);
      gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outPos);
      gl.bindBuffer(gl.ARRAY_BUFFER, read.theta);
      gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outTheta);
      gl.bindBuffer(gl.ARRAY_BUFFER, read.phi);
      gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outPhi);
      buffers.positions.set(outPos);
      buffers.theta.set(outTheta);
      buffers.phi.set(outPhi);
      return { positions: outPos, theta: outTheta, phi: outPhi };
    },
    readbackPositionsOnly(target) {
      gl.bindBuffer(gl.ARRAY_BUFFER, read.pos);
      gl.getBufferSubData(gl.ARRAY_BUFFER, 0, target);
      return target;
    },
  };
}

export const STAGE = 65;
export const NODE_CAP = 16384;
