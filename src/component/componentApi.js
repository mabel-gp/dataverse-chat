export const renderApi = () => {
 
  const contenedorApi = document.createElement("section");
  contenedorApi.className = "section-page-api"
      
  contenedorApi.innerHTML = 
        `
          <h1 class = "titulo-api" >Api Key Admin</h1>
          <p class = "mensaje-api" >Desde aquí puedes administrar la API Key a utilizar</p>
          <input type = "password" placeholder = "Escribe/pega tu API KEY aquí" class = "input-api" ></input>
          <button class = "buttton-guardar-api" >Guardar</button>
        `
        
  return contenedorApi;
        
};