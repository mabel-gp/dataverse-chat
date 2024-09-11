// Importa la función para obtener la API KEY desde apiKey.js
import {getApiKey}  from '../lib/libApiKey.js';

const recibeApiKey = getApiKey();

//crear fx prompting role:system content:prompt

export const communicateWithOpenAI = (messages) => {
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
            "role": "user", 
            "content": messages
          },
          {
            "role": "system", 
            "content": messages //aqui rol del prompting atraves de la data con name y description
          }
        ],
      temperature: 0.9,
    })
  }) 
    .then(promesaOpenAI => {return promesaOpenAI.json()})
    .catch (error => {('Error de API:' ,error)})
};