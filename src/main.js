import * as THREE from 'three';
import { GaiaNode } from './Node.js';
import { GEOMETRIES } from './geometry.js';
import { bindRemoteContract, createPositionStreamer } from './pulse.js';
import { nodeVertex, nodeFragment } from './shaders.js';

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
const count = Math.max(8, Math.min(2048, Number.isFinite(requested) ? requested : 24));
const useInstancing = count > 48 || params.get('instanced') === '1';
const relay = params.get('relay') || '';

const state = { gravityPull: 1, toroidalWeave: 1, lerp: 0.05, blend: 0.5 };
const targetState = { geometry: 'torus' };
bindRemoteContract(state, targetState);

const nodes = [];
const geo = new THREE.SphereGeometry(0.35, useInstancing ? 8 : 16, useInstancing ? 8 : 16);

if (useInstancing) {
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
  scene.add(inst);
  for (let i = 0; i < count; i++) {
    const dummy = new THREE.Object3D();
    nodes.push(new GaiaNode({ idx: i, dummy, material: mat }));
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

const streamPositions = createPositionStreamer(nodes, { relay });

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const extraKeys = {
  e: 12, r: 13, t: 14, y: 15, u: 16, i: 17, o: 18, p: 19, a: 20, s: 21,
  d: 22, f: 23, g: 24,
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

const clock = new THREE.Clock();
function frame() {
  const t = clock.getElapsedTime();
  for (const node of nodes) node.update(t, state, targetState);
  if (nodes._instanced) {
    for (let i = 0; i < nodes.length; i++) {
      nodes._instanced.setMatrixAt(i, nodes[i].dummy.matrix);
    }
    nodes._instanced.instanceMatrix.needsUpdate = true;
  }
  streamPositions(t);
  camera.position.x = Math.sin(t * 0.08) * 42;
  camera.position.z = Math.cos(t * 0.08) * 42;
  camera.lookAt(0, 0, 0);
  hud.textContent = [
    `GAIA VISUALIZER  band-137  stage-8  nodes=${count}${useInstancing ? ' instanced' : ''}`,
    `geometry: ${targetState.geometry}   (1-9 / 0 / q w + e..p a s d=dini f=roman g=hyperbolic)`,
    `gravityPull: ${state.gravityPull.toFixed(2)}   ([ / ])`,
    `toroidalWeave: ${state.toroidalWeave.toFixed(2)}   (- / =)`,
    `blend: ${state.blend.toFixed(2)}   (, / .)  hamiltonian<->klein`,
    `lerp: ${state.lerp.toFixed(2)}   (?state= / ?pulse=ws / ?token= / ?relay= / ?nodes=)`,
  ].join('\n');
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
frame();
