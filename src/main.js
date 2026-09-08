import * as THREE from 'three';
import { GaiaNode } from './Node.js';
import { GEOMETRIES } from './geometry.js';
import { bindRemoteContract } from './pulse.js';

const hud = document.getElementById('hud');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, 18, 42);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const state = { gravityPull: 1, toroidalWeave: 1, lerp: 0.05 };
const targetState = { geometry: 'torus' };
bindRemoteContract(state, targetState);

const nodes = [];
const count = 24;
for (let i = 0; i < count; i++) {
  const geo = new THREE.SphereGeometry(0.35, 16, 16);
  const mat = new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(i / count, 0.7, 0.55),
    emissive: new THREE.Color().setHSL(i / count, 0.8, 0.15),
  });
  mat.uniforms = { uTime: { value: 0 }, uGravity: { value: 1 } };
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  nodes.push(new GaiaNode({ idx: i, mesh, material: mat }));
}

scene.add(new THREE.AmbientLight(0x446688, 1.2));
const key = new THREE.PointLight(0x88ffcc, 40, 80);
key.position.set(8, 16, 10);
scene.add(key);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

addEventListener('keydown', (e) => {
  const n = Number(e.key);
  if (n >= 1 && n <= GEOMETRIES.length) targetState.geometry = GEOMETRIES[n - 1];
  if (e.key === '[') state.gravityPull = Math.max(0.1, state.gravityPull - 0.1);
  if (e.key === ']') state.gravityPull = Math.min(3, state.gravityPull + 0.1);
  if (e.key === '-') state.toroidalWeave = Math.max(0, state.toroidalWeave - 0.1);
  if (e.key === '=') state.toroidalWeave = Math.min(4, state.toroidalWeave + 0.1);
});

const clock = new THREE.Clock();
function frame() {
  const t = clock.getElapsedTime();
  for (const node of nodes) node.update(t, state, targetState);
  camera.position.x = Math.sin(t * 0.08) * 42;
  camera.position.z = Math.cos(t * 0.08) * 42;
  camera.lookAt(0, 0, 0);
  hud.textContent = [
    'GAIA VISUALIZER  band-137',
    `geometry: ${targetState.geometry}   (keys 1-${GEOMETRIES.length})`,
    `gravityPull: ${state.gravityPull.toFixed(2)}   ([ / ])`,
    `toroidalWeave: ${state.toroidalWeave.toFixed(2)}   (- / =)`,
    `lerp: ${state.lerp.toFixed(2)}   (gaia:targetState / ?state=)`,
  ].join('\n');
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
frame();
