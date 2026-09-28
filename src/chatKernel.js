/**
 * Living chat-kernel contract — Stage 314.
 * CHAT_KERNEL_SESSION_SOURCE is the exact update(t) posted in the current session (hash 67185cf3).
 * sourceHash is FNV-1a of CHAT_KERNEL_SOURCE (7cd81012 living evaluate path unchanged).
 * Runtime extras now folded into the session switch: klein, hopf, figure8, trefoil, mobius.
 * Stage 314: session paste enhanced 2026-09-27 20:07 CDT. matchSessionPaste scans case labels.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 * CPU lerp reuses _target; session paste still allocates Vector3 (documented, not copied into hot path).
 */

export const STAGE = 314;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const GPU_AUTO_THRESHOLD = 1024;
export const INSTANCE_OFFSET_MIN = 4096;
export const NODE_CAP = 16384;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'klein', 'figure8', 'hopf', 'trefoil', 'mobius', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const CHAT_KERNEL_SOURCE_HASH = '7cd81012';
export const CHAT_KERNEL_SESSION_HASH = '67185cf3';

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

        case 'klein':
            const ku = this.theta;
            const kv = this.phi;
            const kr = 4 + state.toroidalWeave;
            x = (kr + Math.cos(ku / 2) * Math.sin(kv) - Math.sin(ku / 2) * Math.sin(2 * kv)) * Math.cos(ku) * 1.2;
            z = (kr + Math.cos(ku / 2) * Math.sin(kv) - Math.sin(ku / 2) * Math.sin(2 * kv)) * Math.sin(ku) * 1.2;
            y = Math.sin(ku / 2) * Math.sin(kv) + Math.cos(ku / 2) * Math.sin(2 * kv) + Math.sin(t * 0.2 + this.idx) * 0.3;
            x *= major * 0.12;
            y *= major * 0.18;
            z *= major * 0.12;
            break;

        case 'figure8':
            const fscale = major * 1.15;
            const fdenom = 1 + Math.sin(this.theta) * Math.sin(this.theta);
            const fcx = (fscale * Math.cos(this.theta)) / fdenom;
            const fcz = (fscale * Math.sin(this.theta) * Math.cos(this.theta)) / fdenom;
            const ftube = minor * 0.35;
            x = fcx + ftube * Math.cos(this.phi);
            y = ftube * Math.sin(this.phi) + Math.sin(t * 0.4) * 0.4;
            z = fcz + ftube * Math.sin(this.phi * 0.5);
            break;

        case 'hopf':
            const heta = this.theta;
            const hxi = this.phi + t * 0.15;
            const hr = Math.sin(heta);
            x = major * hr * Math.cos(hxi);
            z = major * hr * Math.sin(hxi);
            y = major * Math.cos(heta) * 0.65 + Math.sin(t * 0.4 + this.idx) * 0.4;
            break;

        case 'trefoil':
            const tu = this.theta;
            x = major * 0.35 * (Math.sin(tu) + 2 * Math.sin(2 * tu));
            z = major * 0.35 * (Math.cos(tu) - 2 * Math.cos(2 * tu));
            y = minor * 0.55 * Math.sin(3 * tu) + Math.sin(t * 0.3 + this.idx) * 0.4;
            break;

        case 'mobius':
            const mu = this.theta;
            const mv = (Math.sin(this.phi) * 0.5) * minor * 0.35;
            const mR = major * 0.45;
            x = (mR + mv * Math.cos(mu / 2)) * Math.cos(mu);
            z = (mR + mv * Math.cos(mu / 2)) * Math.sin(mu);
            y = mv * Math.sin(mu / 2) + Math.sin(t * 0.25 + this.idx) * 0.35;
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
