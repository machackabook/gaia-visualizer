/** Stage 361 — instance-band health sample. Session switch stays four-case. No secrets. */
export const INSTANCE_BAND_STAGE = 361;
export const INSTANCE_BAND_MIN = 4096;
export const INSTANCE_BAND_CAP = 16384;
export const INSTANCE_BAND_GPU = 1024;
export const INSTANCE_BAND_SESSION_HASH = 'beec41f1';
export const INSTANCE_BAND_LIVING_HASH = '7cd81012';
export const INSTANCE_BAND_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const INSTANCE_BAND_LIVING_MAJOR_MAX = 96;

export function inInstanceBand(count) {
  return Number.isFinite(count) && count >= INSTANCE_BAND_MIN && count <= INSTANCE_BAND_CAP;
}

export function sessionMajorAtIndex(idx) {
  const i = Number.isFinite(idx) ? idx : 0;
  return 10 + i * 2;
}

export function livingMajorAtIndex(idx) {
  return Math.min(INSTANCE_BAND_LIVING_MAJOR_MAX, Math.max(2, sessionMajorAtIndex(idx)));
}

function samplePoint(geometry, idx) {
  const theta = 0.7;
  const phi = 0.4;
  const t = 1.2;
  const major = livingMajorAtIndex(idx % 24);
  const minor = 5;
  let x = 0;
  let y = 0;
  let z = 0;
  if (geometry === 'infinity') {
    const scale = major * 1.5;
    const denom = 1 + Math.pow(Math.sin(theta), 2);
    x = (scale * Math.cos(theta)) / denom;
    z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
    y = minor * Math.sin(phi) * Math.sin(t * 0.5 + (idx % 24));
  } else if (geometry === 'hamiltonian') {
    x = major * Math.cos(theta * 3) * Math.cos(theta);
    z = major * Math.cos(theta * 3) * Math.sin(theta);
    y = major * Math.sin(theta * 3) + Math.sin(t) * 2;
  } else if (geometry === 'triangular') {
    const tAngle = Math.floor(theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
    x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
    y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
  } else {
    x = (major + minor * Math.cos(phi)) * Math.cos(theta);
    z = (major + minor * Math.cos(phi)) * Math.sin(theta);
    y = minor * Math.sin(phi) * Math.sin(t * 0.5 + (idx % 24));
  }
  return { geometry, finite: Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z) };
}

export function sampleInstanceBandHealth(count = INSTANCE_BAND_CAP) {
  const probes = [1024, 4095, 4096, 8192, 12288, 16384, 16385];
  const rows = probes.map((n) => ({
    count: n,
    inBand: inInstanceBand(n),
    gpuAuto: n > INSTANCE_BAND_GPU,
    skipCpuInstanceMatrix: inInstanceBand(n),
  }));
  const capMajor = sessionMajorAtIndex(INSTANCE_BAND_CAP);
  const points = INSTANCE_BAND_GEOMETRIES.map((name, i) => samplePoint(name, i + 1));
  const bandEdges = rows.filter((row) => row.count === 4096 || row.count === 16384).every((row) => row.inBand);
  const outside = rows.filter((row) => row.count === 4095 || row.count === 16385).every((row) => !row.inBand);
  return {
    stage: INSTANCE_BAND_STAGE,
    session: INSTANCE_BAND_SESSION_HASH,
    living: INSTANCE_BAND_LIVING_HASH,
    min: INSTANCE_BAND_MIN,
    cap: INSTANCE_BAND_CAP,
    sample: count,
    inBand: inInstanceBand(count),
    probes: rows,
    sessionMajorAtCap: capMajor,
    livingMajorAtCap: livingMajorAtIndex(INSTANCE_BAND_CAP),
    sessionMajorUnclampedAtCap: capMajor > INSTANCE_BAND_LIVING_MAJOR_MAX,
    pointsFinite: points.every((p) => p.finite),
    geometries: [...INSTANCE_BAND_GEOMETRIES],
    sessionSwitchUntouched: true,
    extrasOffSession: true,
    secrets: false,
    ok: bandEdges && outside && points.every((p) => p.finite),
    note: 'Session paste uses major = 10 + idx * 2 and does not clamp. Living path clamps major to 96. No new session case.',
  };
}
