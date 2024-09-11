// Importa la función para obtener la API KEY desde apiKey.js
import {getApiKey}  from '../lib/libApiKey.js';

const recibeApiKey = getApiKey();

export const communicateWithOpenAI = (messages, data) => {
  //Aquí es donde debes implementar la petición con fetch o axios

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + recibeApiKey
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages:
        [
          {
            "role": "system", 
            "content": `Eres ${data.name}. Responderas los mensajes de acuerdo a ${data.description}. Estos mensajes deben tener un máximo de 30 palabras. Que la conversación sea fluida. Siempre ten en cuenta tu nombre y refleja tu personalidad al responder.`
          },   
          {
            "role": "user", 
            "content": messages
          },
        ],
      temperature: 0.9,
    })
  }) 
    .then(promesaOpenAI => {return promesaOpenAI.json()})
    .catch (error => {('Error de API:' ,error)})
};