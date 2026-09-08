import * as THREE from 'three';
import { evaluateGeometry } from './geometry.js';

const _target = new THREE.Vector3();

export class GaiaNode {
  constructor({ idx, mesh, material }) {
    this.idx = idx;
    this.mesh = mesh;
    this.material = material;
    this.theta = Math.random() * Math.PI * 2;
    this.phi = Math.random() * Math.PI * 2;
  }

  update(t, state, targetState) {
    if (this.material?.uniforms) {
      if (this.material.uniforms.uTime) this.material.uniforms.uTime.value = t;
      if (this.material.uniforms.uGravity) this.material.uniforms.uGravity.value = state.gravityPull;
    }

    const pull = state.gravityPull ?? 1;
    this.theta += (0.01 + this.idx * 0.002) * pull;
    this.phi += (0.007 + this.idx * 0.0007) * Math.max(0.25, pull);

    const { x, y, z } = evaluateGeometry({
      theta: this.theta,
      phi: this.phi,
      t,
      idx: this.idx,
      gravityPull: pull,
      toroidalWeave: state.toroidalWeave,
      geometry: targetState?.geometry || 'torus',
    });

    _target.set(x, y, z);
    this.mesh.position.lerp(_target, state.lerp ?? 0.05);
  }
}
