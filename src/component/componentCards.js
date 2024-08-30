export const renderCards = (data) => {
 
  const sectionMain = document.createElement("main");
  const listaDeFlores = document.createElement("ul");
  sectionMain.appendChild(listaDeFlores);
  
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
          <button class = "button-chatear">Chatear</button>
        </div>
        `

    listaDeFlores.appendChild(li);
  });
  
  const sectionApi = document.createElement("div");
  sectionApi.classList.add("section-api");
  const sectionApiButton = document.createElement("button");
  sectionApiButton.className = "button-api";
  const iconoApi = document.createElement("img");
  iconoApi.src = "assets/images/icono-api.svg";
  sectionApiButton.appendChild(iconoApi);
  sectionApi.appendChild(sectionApiButton); 
  sectionMain.appendChild(sectionApi); 

  return sectionMain;
  
};