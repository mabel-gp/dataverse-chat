// Importa la función para obtener la API KEY desde apiKey.js
import {getApiKey}  from '../lib/libApiKey.js';

const recibeApiKey = getApiKey();

export const communicateWithOpenAI = (messages) => {
  //Aquí es donde debes implementar la petición con fetch o axios

  const promesaOpenAI = fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + recibeApiKey
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          "role": "user", 
          "content": messages
        }
      ],
      temperature: 0.9,
    })
  }) 
    .then(promesaOpenAI => {return promesaOpenAI.json()})
    .catch (error => {console.error ('Error de API:' ,error)});

  console.log(promesaOpenAI);
};

