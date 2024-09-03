import data from '../data/dataset.js'

export const renderChatIndividual = () => {

  //   const dato = data.find(item => item.id === props.id);

  const contenedorChatIndividual = document.createElement("section");
  contenedorChatIndividual.className = "section-chat-individual";

  //data.forEach((dato) => {
  const divChatIndividual = document.createElement("div")

  divChatIndividual.innerHTML =  
        `
        <div>
            <div class = "contenedor-mensaje-individual">
            </div>
            <div class = "mensaje-de-usuario">
                <input type="text" placeholder="Escribe aquí"/>
                <button class = "boton-enviar-chat-individual">
                    <img scr = "assets/images/enviar.png">
                </button>
            </div>
        </div>
        <div>
            <h1>${data.name}</h1>
            <img src="${data.imageUrl}"/>
            <p>${data.description}</p>
            
        </div>
        `

  contenedorChatIndividual.appendChild(divChatIndividual);
  //});
        
  return contenedorChatIndividual;
          
};