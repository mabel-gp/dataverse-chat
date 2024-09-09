import { getApiKey } from "../lib/libApiKey.js";
import { setApiKey } from "../lib/libApiKey.js";

export const renderApi = () => {
 
  const contenedorApi = document.createElement("section");
  contenedorApi.className = "section-page-api"
      
  contenedorApi.innerHTML = 
        `
          <h1 class = "titulo-api" >Api Key Admin</h1>
          <p class = "mensaje-api" >Desde aquí puedes administrar la API Key a utilizar</p>
          <input type = "password" placeholder = "Escribe/pega tu API KEY aquí" class = "input-api" ></input>
          <button class = "button-guardar-api" >Guardar</button>
        `
  //determinamos si la clave está guardada o no
  const inputApi = contenedorApi.querySelector(".input-api");
  const botonObtenerGuardadApi = contenedorApi.querySelector(".button-guardar-api");

  document.addEventListener("DOMContentLoaded", () => {
    const estadoDeClave = getApiKey("apikey");
    if (estadoDeClave){
      inputApi.textContent = `Clave guardada: ${estadoDeClave}`;
      botonObtenerGuardadApi.textContent = "Borrar clave";
    }
  });

  //primero escuchar al botón

  botonObtenerGuardadApi.addEventListener("click", () => {
    const botonObtenerApiKey = getApiKey("apikey") 

    if(botonObtenerApiKey){
      botonObtenerApiKey.removeItem = "apikey"

      inputApi.textContent = "Borrar apikey";
      botonObtenerGuardadApi.textContent = "Guardar clave";

      //establecer la función que obtenga el getApiKey
    /*     } else {
      const
    }; */
    }
  });

  
  

  //devolver error si la clave es incorrecta
        
  return contenedorApi;
        
};
