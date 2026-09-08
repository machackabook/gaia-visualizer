import * as THREE from 'three';
import { evaluateGeometry } from './geometry.js';

const _target = new THREE.Vector3();
const _color = new THREE.Color();

export class GaiaNode {
  constructor({ idx, mesh, material }) {
    this.idx = idx;
    this.mesh = mesh;
    this.material = material;
    this.theta = Math.random() * Math.PI * 2;
    this.phi = Math.random() * Math.PI * 2;
    this.baseHue = idx / 24;
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

    if (this.material?.color) {
      const hue = (this.baseHue + pull * 0.08 + t * 0.01) % 1;
      _color.setHSL(hue, 0.7, 0.45 + Math.min(0.3, pull * 0.08));
      this.material.color.lerp(_color, 0.08);
      if (this.material.emissive) {
        this.material.emissive.copy(_color).multiplyScalar(0.25 * pull);
      }
    }
  }
}
