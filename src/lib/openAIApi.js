// Importa la función para obtener la API KEY desde apiKey.js
import {getApiKey}  from '../lib/libApiKey.js';

let historial = [];

function añadirMensaje(role, messages) {
  historial.push({ role: role, content: messages });
}

function obtenerHistorial() {
  return historial;
}

const recibeApiKey = getApiKey();

export const communicateWithOpenAI = (messages) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  añadirMensaje('user', messages);
  // historial.push({ role: 'user', content: messages });
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + recibeApiKey
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: obtenerHistorial()
      //  [
      //    {
      //      "role": "user", 
      //      "content": messages
      //    }
      //  ],
      // temperature: 0.9,
    })
    // añadirMensaje("assistant", assistantMessage); 
  }) 
    .then(promesaOpenAI => {return promesaOpenAI.json()})
    .catch (error => {('Error de API:' ,error)})
};