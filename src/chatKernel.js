/**
 * Living chat-kernel contract — Stage 359.
 * Session paste 2026-10-01 11:32 CDT reconfirmed four base cases (infinity|hamiltonian|triangular|torus).
 * Stage 314 extras (klein, hopf, figure8, trefoil, mobius) remain in the living switch only.
 * Stage 359: public-band fidelity sample. Session switch unchanged. Next queue 360+.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 */

export {
  chatKernelEnergy,
  shouldFreezeChatKernel,
  attachChatKernelEnergy,
  CHAT_KERNEL_ENERGY_MIN,
  CHAT_KERNEL_ENERGY_MAX,
  CHAT_KERNEL_FREEZE_BELOW,
} from './chatKernelEnergy.js';

export {
  compileChatKernelNextStages,
  pairBlendChatKernelGeometries,
  chatKernelMemoryEngram,
  reuseSessionLerpTarget,
  SESSION_LERP,
  samplePublicBandFidelity,
  CHAT_KERNEL_NEXT_STAGES,
  CHAT_KERNEL_LIVING_HASH,
  CHAT_KERNEL_ENGRAM_FOLDER,
} from './chatKernelNext.js';

export const STAGE = 359;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const CHAT_KERNEL_TWO_PI = Math.PI * 2;
export const CHAT_KERNEL_MAJOR_MIN = 2;
export const CHAT_KERNEL_MAJOR_MAX = 96;
export const CHAT_KERNEL_MINOR_MIN = 0.25;
export const CHAT_KERNEL_MINOR_MAX = 24;
export const GPU_AUTO_THRESHOLD = 1024;
export const INSTANCE_OFFSET_MIN = 4096;
export const NODE_CAP = 16384;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const CHAT_KERNEL_SOURCE_HASH = '7cd81012';
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';
export const CHAT_KERNEL_PASTE_HASH = 'beec41f1';

export const CHAT_KERNEL_SESSION_SOURCE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;

    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);

    // Evaluate the target geometric state assigned by the LLM
    switch(targetState.geometry) {
        case 'infinity':
            // Lemniscate of Bernoulli mathematical mapping
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
            
        case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
            
        case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;

        case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }

    // Smoothly interpolate current position to the new geometric state target
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;
