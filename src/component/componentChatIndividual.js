import data from '../data/dataset.js'
import {communicateWithOpenAI}  from '../lib/openAIApi.js';

export const renderChatIndividual = (props) => {
  const itemFlor = data.find(item => item.id === props.id);
  
  const contenedorChatIndividual = document.createElement("section");
  contenedorChatIndividual.className = "section-chat-individual";
  
  const divChatIndividual = document.createElement("div")
  divChatIndividual.className = "contenedor-vista-chat-individual"

  divChatIndividual.innerHTML =  
        `
        <div class = "chat-individual">
            <div class = "mensaje-chat">
            </div>
            <div class = "mensaje-de-usuario">
                <input id="chat-input" type="text" placeholder="Escribe aquí"/>
                <button class = "boton-enviar-chat-individual">
                    <img src = "assets/images/enviar.png">
                </button>
            </div>
        </div>
       
        <div class = "tarjeta-chat-individual">
            <h1>${itemFlor.name}</h1>
            <img src="${itemFlor.imageUrl}"/>
            <p>${itemFlor.description}</p>    
        </div>
        `
  const chatMensajes = divChatIndividual.querySelector(".mensaje-chat");


  const chatInput = divChatIndividual.querySelector('#chat-input');  

  const chatButton = divChatIndividual.querySelector('.boton-enviar-chat-individual');
  chatButton.addEventListener('click', () =>{
    communicateWithOpenAI(chatInput.value).then(respuesta =>{
      chatMensajes.innerHTML =  respuesta.choices[0].message.content;
    }).catch();
    
    // console.log(respuesta.choices[0].message.content);
  });

  contenedorChatIndividual.appendChild(divChatIndividual);
        
  return contenedorChatIndividual;
          
};