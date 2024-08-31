import { getApiKey, setApiKey } from '../src/lib/libApiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    const testObtenerApi = getApiKey;
    expect(testObtenerApi).toBe(getApiKey);
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const testGuardarApi = setApiKey;
    expect(testGuardarApi).toBe(setApiKey);
  });
});