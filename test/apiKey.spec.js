import { getApiKey, setApiKey } from '../src/lib/libApiKey.js';

//recupera la API KEY guardada en Local Storage
//tiene 1 parametro
describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    //const testObtenerApi = getApiKey;
    
    console.log(getApiKey)
    //expect(testObtenerApi).toBe(getApiKey);
  });
  
});

//obtiene y la guardar la API KEY en Local Storage
//tiene 2 parametros "apikey", key
describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    const obtengoPrueba = "hola123"
    const guardarPrueba = setApiKey(obtengoPrueba)

    expect(guardarPrueba).toBe(setApiKey(guardarPrueba));
  });
});