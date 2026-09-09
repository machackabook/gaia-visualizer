/**
 * Evaluate the target geometric state assigned by the LLM.
 * Pure mapping: (theta, phi, t, idx, state, geometry) -> {x,y,z}
 * Chat kernel remains torus / infinity / hamiltonian / triangular + lerp.
 * Stage-16: CPU reference for the full 31-manifold set; TF kernel now covers all ids 0–30.
 */
