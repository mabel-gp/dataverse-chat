import { getApiKey, setApiKey } from '../src/lib/libApiKey.js';

//recupera la API KEY guardada en Local Storage
//tiene 1 parametro
describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    //declaramos constante con un string cualquiera
    const clave = 'string cualquiera';
    //simulamos que la API Key está en localStorage
    localStorage.setItem('apikey', clave);
    //obtenemos el valor usando la función
    const obtenerApiKey = getApiKey();
    //el resultado deberia ser el string
    expect(obtenerApiKey).toBe(clave);
  });
  
});

//obtiene y la guardar la API KEY en Local Storage
describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    // declarar constante y le pasas un string 
    const key = "apikey";
    //set apikey recibe solo un parámetro, el key será el valor que se establezca por el usuario
    setApiKey(key);
    //con localStorage guarda la apikey, y se espera que sea el valor de key
    expect(localStorage.getItem("apikey")).toBe(key);
  });
});