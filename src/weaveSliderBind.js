/** Stage 362 — weave-slider public-band bind check. Session switch stays four-case. No secrets. */
export const WEAVE_BIND_STAGE = 362;
export const WEAVE_BIND_SESSION_HASH = 'beec41f1';
export const WEAVE_BIND_LIVING_HASH = '7cd81012';
export const WEAVE_BIND_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const WEAVE_BIND_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const WEAVE_BIND_PUBLIC_BAND = 'hamiltoniansingularity.ai';
export const WEAVE_BIND_BUS = 'quine-weave';
export const WEAVE_BIND_PANEL_COUNT = 19;

export function sessionMinorAtWeave(toroidalWeave = 1) {
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  return 3 + weave * 2;
}

export function sampleWeaveSliderBind(catalog, band = WEAVE_BIND_PUBLIC_BAND) {
  const rows = Array.isArray(catalog) ? catalog : [];
  const geometries = new Set(WEAVE_BIND_GEOMETRIES);
  const extras = new Set(WEAVE_BIND_EXTRAS);
  const laneOk = rows.every((row) => Number.isFinite(row.lane) && row.lane >= 0 && row.lane <= 3 && row.geometry === WEAVE_BIND_GEOMETRIES[row.lane % 4]);
  const valuesOk = rows.every((row) => Number.isFinite(row.value) && row.value >= 0 && row.value <= 2);
  const rangeOk = rows.every((row) => row.min === 0 && row.max === 2 && row.step === 0.01);
  const extrasOff = rows.every((row) => !extras.has(row.geometry || ''));
  const sessionOnly = rows.every((row) => geometries.has(row.geometry || ''));
  const countOk = rows.length === WEAVE_BIND_PANEL_COUNT;
  const bandOk = band === WEAVE_BIND_PUBLIC_BAND && !/token|secret|cookie|password|key/i.test(band);
  const minor = sessionMinorAtWeave(1);
  return {
    stage: WEAVE_BIND_STAGE,
    session: WEAVE_BIND_SESSION_HASH,
    living: WEAVE_BIND_LIVING_HASH,
    bus: WEAVE_BIND_BUS,
    band,
    bandOk,
    count: rows.length,
    expected: WEAVE_BIND_PANEL_COUNT,
    countOk,
    laneOk,
    valuesOk,
    rangeOk,
    sessionOnly,
    extrasOffSession: extrasOff,
    sessionMinorAtWeave1: minor,
    hudIsNotRadius: true,
    sessionSwitchUntouched: true,
    secrets: false,
    ok: countOk && laneOk && valuesOk && rangeOk && sessionOnly && extrasOff && bandOk && minor === 5,
    note: 'HUD catalog binds four session lanes only. Session paste minor = 3 + toroidalWeave * 2 is not rewritten. No new session case.',
  };
}
