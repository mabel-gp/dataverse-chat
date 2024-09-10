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
                  <img id= "img-chat-bot"src="${itemFlor.imageUrl}"/>
                  <p id= "mensaje-chat-bot" >¡Hola! mi nombre es ${itemFlor.name}, ¿puedo ayudarte en algo?</p>
                </li>

                <li class= "mensaje-usuario">
                  <p id="mensaje-chat-usuario">...</p>
                  <img id= "img-chat-usuario" src="assets/images/usuario.png"/>
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
  
  //const chatMensajes = divChatIndividual.querySelector('.mensaje-chat');
  const chatInput = divChatIndividual.querySelector('#chat-input');  
  const chatButton = divChatIndividual.querySelector('.boton-enviar-chat-individual');

  chatButton.addEventListener('click', () => {
    const textoInput = chatInput.value.trim();

    // const historial = [];

    // function añadirMensaje(role, message) {
    //   historial.push ({ role: 'user', content: message });
    // }
    
    // function obtenerHistorial() {
    //   return historial;
    // }

    if (chatInput !== ""){
      communicateWithOpenAI(textoInput)
        .then(respuesta =>{
          const textBot = respuesta.choices[0].message.content;
          chatInput.value = " ";
          clonarTemplate(textBot, "bot")
          // historial.push({ role: 'bot', content: textBot });
        })
        .catch(error => {
          ('Error de API:' ,error)
        });
    }
    clonarTemplate(textoInput, "user")
    // historial.push({ role: 'user', content: textoInput });
  });
  
  const cloneTemplate = divChatIndividual.querySelector(".lista-de-mensajes")
  function clonarTemplate(text, sender) {
    //estás li ya no son las originales sino son las copias del cloneHTML
    const cloneHTML = cloneTemplate.cloneNode(true);

    if(sender === `bot`){
      //Llamamos con querySelector de la copia li y los hijos de la copia li
      const nuevoMensajeBot= cloneHTML.querySelector(".mensaje-bot");
      const mensajeBot= nuevoMensajeBot.querySelector("#mensaje-chat-bot");
      const spanBot= nuevoMensajeBot.querySelector("#img-chat-bot");

      spanBot.textContent = sender;
      mensajeBot.textContent = text;

      cloneTemplate.appendChild(nuevoMensajeBot);

    } else {
      const nuevoMensajeUsuario= cloneHTML.querySelector(".mensaje-usuario");
      const mensajeUsuario= nuevoMensajeUsuario.querySelector("#mensaje-chat-usuario");
      const spanUsuario= nuevoMensajeUsuario.querySelector("#img-chat-usuario");

      spanUsuario.textContent = sender;
      mensajeUsuario.textContent = text;

      cloneTemplate.appendChild(nuevoMensajeUsuario);
    }
  }

  contenedorChatIndividual.appendChild(divChatIndividual);
        
  return contenedorChatIndividual;
          
};