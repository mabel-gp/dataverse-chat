export const renderApi = () => {
 
  const contenedorApi = document.createElement("section");
      
  contenedorApi.innerHTML = 
        `
          <h1 class = "titulo-api" >Api Key Admin</h1>
          <p>Desde aquí puedes administrar la API Key a utilizar</p>
          <input type = "password" placeholder = "Escribe/pega tu API KEY aquí"></input>
          <button>Guardar</button>
        `
        
  return contenedorApi;
        
};