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

    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    this.phi += 0.007 + this.idx * 0.0007;

    const { x, y, z } = evaluateGeometry({
      theta: this.theta,
      phi: this.phi,
      t,
      idx: this.idx,
      gravityPull: state.gravityPull,
      toroidalWeave: state.toroidalWeave,
      geometry: targetState?.geometry || 'torus',
    });

    _target.set(x, y, z);
    this.mesh.position.lerp(_target, 0.05);
  }
}
