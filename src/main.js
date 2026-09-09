import * as THREE from 'three';
import { GaiaNode } from './Node.js';
import { GEOMETRIES } from './geometry.js';
import { bindRemoteContract, createPositionStreamer } from './pulse.js';
import { nodeVertex, nodeFragment } from './shaders.js';
import { createGpuBuffers, writeNode, NODE_CAP } from './gpuBuffer.js';
import { createTransformFeedback } from './transformFeedback.js';
import { KERNEL_GEOMETRY_ID } from './evaluateKernel.glsl.js';
import { STAGE, chatKernelColor } from './chatKernel.js';
import { fidelitySummary, sampleFidelity } from './fidelity.js';
import {
  bindTfPosAttribute,
  markZeroCopyAttribute,
  reportTfBindHealth,
  shouldReportTfBind,
  shouldZeroCopy,
} from './zeroCopy.js';

const hud = document.getElementById('hud');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, 18, 42);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const params = new URLSearchParams(location.search);
const requested = Number(params.get('nodes') || 24);
const count = Math.max(8, Math.min(NODE_CAP, Number.isFinite(requested) ? requested : 24));
const useInstancing = count > 48 || params.get('instanced') === '1';
const useGpu = count > 2048 || params.get('gpu') === '1';
const wantTf = params.get('tf') === '1' || count > 8192;
const relay = params.get('relay') || '';
const peers = params.get('peers') || '';
const token = params.get('token') || '';
const needStreamReadback = Boolean(relay || peers);
const showTfBind = shouldReportTfBind(params);

if (params.get('fidelity') === '1') {
  const report = sampleFidelity();
  console.info('[gaia-fidelity]', fidelitySummary(report), report.note);
  window.__gaiaFidelity = report;
}

const hostDefault =
  /hamiltoniansingularity\.ai$/i.test(location.hostname) ? 'blend' : 'torus';
const state = { gravityPull: 1, toroidalWeave: 1, lerp: 0.05, blend: 0.5, lastPulse: null, lastPulseAt: 0 };
const targetState = { geometry: hostDefault };
bindRemoteContract(state, targetState);

const nodes = [];
const gpu = createGpuBuffers(count);
const geo = new THREE.SphereGeometry(0.35, useInstancing || useGpu ? 8 : 16, useInstancing || useGpu ? 8 : 16);
const instanceColors = new Float32Array(count * 3);
const instanceOffsets = new Float32Array(count * 3);

if (useInstancing || useGpu) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uGravity: { value: 1 },
      uColor: { value: new THREE.Color().setHSL(0.45, 0.7, 0.55) },
    },
    vertexShader: nodeVertex,
    fragmentShader: nodeFragment,
  });
  const inst = new THREE.InstancedMesh(geo, mat, count);
  inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  inst.instanceColor = new THREE.InstancedBufferAttribute(instanceColors, 3);
  inst.geometry.setAttribute('instanceOffset', new THREE.InstancedBufferAttribute(instanceOffsets, 3));
  scene.add(inst);
  for (let i = 0; i < count; i++) {
    const dummy = new THREE.Object3D();
    nodes.push(new GaiaNode({ idx: i, dummy, material: mat }));
    nodes[i].theta = gpu.theta[i];
    nodes[i].phi = gpu.phi[i];
    const c = chatKernelColor(i, 0, 1);
    instanceColors[i * 3] = c.r;
    instanceColors[i * 3 + 1] = c.g;
    instanceColors[i * 3 + 2] = c.b;
  }
  nodes._instanced = inst;
} else {
  for (let i = 0; i < count; i++) {
    const hue = i / count;
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uGravity: { value: 1 },
        uColor: { value: new THREE.Color().setHSL(hue, 0.7, 0.55) },
      },
      vertexShader: nodeVertex,
      fragmentShader: nodeFragment,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    nodes.push(new GaiaNode({ idx: i, mesh, material: mat }));
  }
}

scene.add(new THREE.AmbientLight(0x446688, 1.2));
const key = new THREE.PointLight(0x88ffcc, 40, 80);
key.position.set(8, 16, 10);
scene.add(key);

const streamPositions = createPositionStreamer(nodes, { relay, peers, token, buffers: gpu });

const gl = renderer.getContext();
const tf = wantTf ? createTransformFeedback(gl, count, gpu.theta, gpu.phi) : null;
const useTfKernel = Boolean(tf?.supported);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const extraKeys = {
  e: 12, r: 13, t: 14, y: 15, u: 16, i: 17, o: 18, p: 19, a: 20, s: 21,
  d: 22, f: 23, g: 24, h: 25, j: 26, k: 27, l: 28, z: 29, x: 30,
};
addEventListener('keydown', (e) => {
  const n = Number(e.key);
  if (n >= 1 && n <= 9 && n <= GEOMETRIES.length) targetState.geometry = GEOMETRIES[n - 1];
  if (e.key === '0' && GEOMETRIES[9]) targetState.geometry = GEOMETRIES[9];
  if (e.key === 'q' && GEOMETRIES[10]) targetState.geometry = GEOMETRIES[10];
  if (e.key === 'w' && GEOMETRIES[11]) targetState.geometry = GEOMETRIES[11];
  if (extraKeys[e.key] != null && GEOMETRIES[extraKeys[e.key]]) {
    targetState.geometry = GEOMETRIES[extraKeys[e.key]];
  }
  if (e.key === '[') state.gravityPull = Math.max(0.1, state.gravityPull - 0.1);
  if (e.key === ']') state.gravityPull = Math.min(3, state.gravityPull + 0.1);
  if (e.key === '-') state.toroidalWeave = Math.max(0, state.toroidalWeave - 0.1);
  if (e.key === '=') state.toroidalWeave = Math.min(4, state.toroidalWeave + 0.1);
  if (e.key === ',') state.blend = Math.max(0, state.blend - 0.05);
  if (e.key === '.') state.blend = Math.min(1, state.blend + 0.05);
});

function paintInstanceColors(t) {
  if (!nodes._instanced) return;
  const pull = state.gravityPull ?? 1;
  for (let i = 0; i < nodes.length; i++) {
    const c = chatKernelColor(i, t, pull);
    instanceColors[i * 3] = c.r;
    instanceColors[i * 3 + 1] = c.g;
    instanceColors[i * 3 + 2] = c.b;
  }
  nodes._instanced.instanceColor.needsUpdate = true;
}

function paintInstanceOffsetsFromGpu() {
  if (!nodes._instanced) return;
  instanceOffsets.set(gpu.positions);
  const attr = nodes._instanced.geometry.getAttribute('instanceOffset');
  if (attr) attr.needsUpdate = true;
}

const clock = new THREE.Clock();
function frame() {
  const t = clock.getElapsedTime();
  const geom = targetState.geometry || 'torus';
  const chatOnGpu = useTfKernel && Object.prototype.hasOwnProperty.call(KERNEL_GEOMETRY_ID, geom);
  const skipCpuPath = chatOnGpu && nodes._instanced && !needStreamReadback;
  const zeroCopy = shouldZeroCopy(params, skipCpuPath);
  let tfBound = false;
  let bindReport = null;

  if (chatOnGpu) {
    tf.step(t, state, geom);
    if (skipCpuPath) {
      const attr = nodes._instanced.geometry.getAttribute('instanceOffset');
      if (zeroCopy) {
        tfBound = bindTfPosAttribute(renderer, attr, tf.currentPosBuffer());
        if (!tfBound) markZeroCopyAttribute(attr, tf.currentPosBuffer());
        bindReport = reportTfBindHealth(renderer, attr, tf.currentPosBuffer());
        tfBound = Boolean(bindReport?.bound);
      } else {
        tf.readbackPositionsOnly(instanceOffsets);
        if (attr) attr.needsUpdate = true;
      }
    } else {
      tf.readback(gpu);
      paintInstanceOffsetsFromGpu();
      const alpha = state.lerp ?? 0.05;
      const scale = 0.85 + Math.min(0.55, (state.gravityPull ?? 1) * 0.18);
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.theta = gpu.theta[i];
        node.phi = gpu.phi[i];
        const o = i * 3;
        const tx = gpu.positions[o];
        const ty = gpu.positions[o + 1];
        const tz = gpu.positions[o + 2];
        if (node.dummy) {
          node.dummy.position.x += (tx - node.dummy.position.x) * alpha;
          node.dummy.position.y += (ty - node.dummy.position.y) * alpha;
          node.dummy.position.z += (tz - node.dummy.position.z) * alpha;
          node.dummy.scale.setScalar(scale);
          node.dummy.updateMatrix();
          node.position.copy(node.dummy.position);
        } else if (node.mesh?.position) {
          node.mesh.position.x += (tx - node.mesh.position.x) * alpha;
          node.mesh.position.y += (ty - node.mesh.position.y) * alpha;
          node.mesh.position.z += (tz - node.mesh.position.z) * alpha;
          node.position.copy(node.mesh.position);
        }
      }
    }
    if (nodes._instanced?.material?.uniforms) {
      nodes._instanced.material.uniforms.uTime.value = t;
      nodes._instanced.material.uniforms.uGravity.value = state.gravityPull;
    }
    paintInstanceColors(t);
  } else {
    for (const node of nodes) {
      node.update(t, state, targetState);
      const p = node.position;
      const scale = 0.85 + Math.min(0.55, (state.gravityPull ?? 1) * 0.18);
      writeNode(gpu, node.idx, p.x, p.y, p.z, scale, node.theta, node.phi);
    }
    paintInstanceOffsetsFromGpu();
    paintInstanceColors(t);
  }

  if (nodes._instanced && !skipCpuPath) {
    for (let i = 0; i < nodes.length; i++) {
      nodes._instanced.setMatrixAt(i, nodes[i].dummy.matrix);
    }
    nodes._instanced.instanceMatrix.needsUpdate = true;
    if (nodes._instanced.material?.uniforms?.uTime) {
      nodes._instanced.material.uniforms.uTime.value = t;
      nodes._instanced.material.uniforms.uGravity.value = state.gravityPull;
    }
  }
  streamPositions(t);
  camera.position.x = Math.sin(t * 0.08) * 42;
  camera.position.z = Math.cos(t * 0.08) * 42;
  camera.lookAt(0, 0, 0);
  const pulseAge = state.lastPulseAt ? ((Date.now() - state.lastPulseAt) / 1000).toFixed(1) : '—';
  const pulseVal = state.lastPulse == null ? '—' : Number(state.lastPulse).toFixed(2);
  const bindBit = bindReport
    ? (bindReport.bound ? 'tfbind-ok' : 'tfbind-miss')
    : (tfBound ? 'tfbind' : 'tfbind-off');
  hud.textContent = [
    `GAIA VISUALIZER  band-137  stage-${STAGE}  nodes=${count}${useInstancing || useGpu ? ' instanced' : ''}${useGpu ? ' gpu-buf' : ''}${chatOnGpu ? ' tf' : ''}${skipCpuPath ? ' no-cpu-rb' : ''}${zeroCopy ? ' zerocopy' : ''} ${bindBit}`,
    `pulse: ${pulseVal}  age=${pulseAge}s   tfbind: ${bindReport ? (bindReport.bound ? 'OK' : 'MISS') : (chatOnGpu && zeroCopy ? 'pending' : 'n/a')}`,
    `geometry: ${targetState.geometry}   (1-9 / 0 / q w + e..l z x  l=cassini z=lorenz x=superformula)`,
    `gravityPull: ${state.gravityPull.toFixed(2)}   ([ / ])`,
    `toroidalWeave: ${state.toroidalWeave.toFixed(2)}   (- / =)`,
    `blend: ${state.blend.toFixed(2)}   (, / .)  hamiltonian<->klein`,
    `lerp: ${state.lerp.toFixed(2)}   (?state= / ?pulse=ws / ?token= / ?relay= / ?peers= / ?gpu=1 / ?tf=1 / ?zerocopy=1 / ?fidelity=1 / ?nodes= / ?tfbind=0)`,
  ].join('\n');
  if (showTfBind && typeof window !== 'undefined' && window.__GAIA_TFBIND__) {
    /* already stamped by reportTfBindHealth */
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
frame();
