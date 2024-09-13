import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve( { choices :[{ message:{ content : 'hola, soy flor'} }]})
}));

//El ojetivo de la función es: realizar una petición para recibir una respuesta 
//sus parametros son messages, data
//posee un then que devuelve la función en formato json()
//tiene un catch, que se encarga de probar errores

describe('communicateWithOpenAI', () => {
  test('communicateWithOpenAI debería recibir una petición y dar una respuesta', () => {
    const messages = "¿Cómo te llamas?"
    const data = { name: "flor", description: 'hola, soy flor' };

    return communicateWithOpenAI(messages, data).then(respuesta => {
      expect(respuesta.choices[0].message.content).toBe('hola, soy flor');
    });
  });
});

  

