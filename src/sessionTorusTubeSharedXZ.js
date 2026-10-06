/** Stage 437 — torus tube radius is shared by x and z only. Paste not rewritten. No secrets. */
export const TORUS_TUBE_SHARED_STAGE = 437;
export const TORUS_TUBE_SHARED_SESSION_HASH = 'beec41f1';
export const TORUS_TUBE_SHARED_LIVING_HASH = '7cd81012';

export function sampleTorusTube(major, minor, phi, theta, t, idx) {
  const tube = major + minor * Math.cos(phi);
  const x = tube * Math.cos(theta);
  const z = tube * Math.sin(theta);
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { tube, x, z, y };
}

export function noteSessionTorusTubeSharedXZ(source) {
  const pinned = source == null;
  const text = pinned ? "case 'torus':\n default:\n x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);\n z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);\n y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);\n break;" : String(source);
  const arm = (text.match(/case 'torus':[\s\S]*?break;/) || [text])[0];
  const xLine = (arm.match(/x\s*=\s*[^;]+;/) || [''])[0];
  const zLine = (arm.match(/z\s*=\s*[^;]+;/) || [''])[0];
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const shared = /major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)/.test(xLine)
    && /major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)/.test(zLine);
  const yOmitsTube = yLine.length > 0 && !/major\s*\+\s*minor/.test(yLine);
  const sample = sampleTorusTube(10, 3, 0, 0, 0, 0);
  return {
    stage: TORUS_TUBE_SHARED_STAGE,
    session: TORUS_TUBE_SHARED_SESSION_HASH,
    living: TORUS_TUBE_SHARED_LIVING_HASH,
    pinned,
    formula: 'tube = major + minor * cos(phi); x = tube * cos(theta); z = tube * sin(theta); y omits tube',
    shared,
    yOmitsTube,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: shared && yOmitsTube && sample.tube === 13 && sample.x === 13 && sample.z === 0 && sample.y === 0,
    note: 'Stage 437 holds torus tube radius shared by x and z only. Paste not rewritten.',
  };
}
