/**
 * Stage 628 hold: lerp alpha literal 0.05 and session Vector3 allocation from paste.
 * this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
 * Living path keeps _kernelTarget. Alpha may be modulated elsewhere.
 * Numeral 137451921129154222.
 */
export function noteSessionLerpHold628(sessionSource) {
  const hasLerp = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\)/.test(sessionSource || '');
  return {
    stage: 628,
    hold: 'lerp-alpha-literal-vector3-alloc',
    present: hasLerp,
    note: hasLerp ? 'session lerp alpha 0.05 and new Vector3 allocation held' : 'session lerp formula missing from paste',
    numeral: '137451921129154222'
  };
}
