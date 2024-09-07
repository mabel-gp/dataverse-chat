import data from '../data/dataset.js'
import {communicateWithOpenAI}  from '../lib/openAIApi.js';

export const renderChatIndividual= (props) => {
  const itemFlor= data.find(item => item.id === props.id);
  
  const contenedorChatIndividual= document.createElement("section");
  contenedorChatIndividual.className= "section-chat-individual";
  
  const divChatIndividual= document.createElement("div")
  divChatIndividual.className= "contenedor-vista-chat-individual"

  divChatIndividual.innerHTML=  
        `
        <div class= "chat-individual">
            <div class= "mensaje-chat">
              <ul class= "lista-de-mensajes">
                <li class= "mensaje-bot">
                  <span id= "span-chat-bot" ><img src="${itemFlor.imageUrl}"/></span>
                  <p id= "mensaje-chat-bot" >Esta es la flor</p>
                </li>

                <li class= "mensaje-usuario">
                  <p id="mensaje-chat-usuario" >Esta es la respuesta</p>
                  <span id= "span-chat-bot">usuario: </span>
                </li>
              </ul>
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
  
  const chatMensajes = divChatIndividual.querySelector('.mensaje-chat');
  const chatInput = divChatIndividual.querySelector('#chat-input');  
  const chatButton = divChatIndividual.querySelector('.boton-enviar-chat-individual');

  chatButton.addEventListener('click', () =>{
    const textoInput = chatInput.value.trim();

    if (chatInput !== ""){
      communicateWithOpenAI(textoInput)
        .then(respuesta =>{
          const textBot = respuesta.choices[0].message.content;
          chatInput.value = " ";
          prueba(textBot, "bot")
        }).catch();

    }
    prueba(textoInput, "user")
  });
  
  const cloneTemplate = divChatIndividual.querySelector(".lista-de-mensajes")
  function prueba(text, sender) {
    //en cloneHTML, la ul se convierten en una copia del ul original --- cloneNode(true), para que clone al nodo con todos sus hijos.
    const cloneHTML = cloneTemplate.cloneNode(true);
    //estás li ya no son las originales sino son las copias del cloneHTML
    const nuevoMensaje = cloneHTML.querySelector("li");

    //Llamamos con querySelector a los hijos de la copia li
    const mensajeBot= nuevoMensaje.querySelector("p");
    const spanBot= nuevoMensaje.querySelector("span");
    /* const mensajeUsuario= nuevoMensaje.querySelector("#mensaje-chat-usuario");
    const spanUsuario= nuevoMensaje.querySelector("#span-chat-usuario");
     */
    spanBot.textContent = sender;
    mensajeBot.textContent = text;

    cloneTemplate.appendChild(nuevoMensaje); 
  }

  contenedorChatIndividual.appendChild(divChatIndividual);
        
  return contenedorChatIndividual;
          
};