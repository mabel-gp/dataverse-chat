export const renderCards = (data) => {
 
  const prueba = document.createElement("main");
  const listaDeFlores = document.createElement("ul");
  prueba.appendChild(listaDeFlores);
  
  data.forEach((dato) => {
    const li = document.createElement("li")
    li.classList.add("caracteristicas");
    li.setAttribute("itemtype", "http://schema.org/Flores");
    li.setAttribute("itemscope", "dato");
  
    li.innerHTML =  
        `
        <dl>
          <dd itemprop="name">${dato.name}</dd>
          <dd itemprop="imageUrl"><img src="${dato.imageUrl}"/></dd>
          <dd itemprop="shortDescription">${dato.shortDescription}</dd>
          <dd itemprop="continenteDeOrigen">Origen: ${dato.facts.continenteDeOrigen}</dd>
          <dd itemprop="tipoDeHabitat">Hábitat: ${dato.facts.tipoDeHabitat}</dd>
          <dd itemprop="tamañoDeFlor">Tamaño: ${dato.facts.tamañoDeFlor}</dd>
        <dl>
        <div class = "contenedor-botones">
          <button class = "button-mas">Ver más</button>
          <button class = "button-chat">Chat</button>
        </div>
        `
    listaDeFlores.appendChild(li);
  });
  
  return prueba;
  
};