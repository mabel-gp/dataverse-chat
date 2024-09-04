import data from '../data/dataset.js'

export const renderChatIndividual = (props) => {
  const itemFlor = data.find(item => item.id === props.id);
  
  const contenedorChatIndividual = document.createElement("section");
  contenedorChatIndividual.className = "section-chat-individual";

  //data.forEach((dato) => {
  const divChatIndividual = document.createElement("div")
  divChatIndividual.className = "contenedor-vista-chat-individual"

  divChatIndividual.innerHTML =  
        `
        <div class = "chat-individual">
            <div class = "mensaje-chat">
            </div>
            <div class = "mensaje-de-usuario">
                <input type="text" placeholder="Escribe aquí"/>
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

  contenedorChatIndividual.appendChild(divChatIndividual);
  //});
        
  return contenedorChatIndividual;
          
};