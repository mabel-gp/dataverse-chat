import { getApiKey } from "../lib/libApiKey.js";
import { setApiKey } from "../lib/libApiKey.js";
import { deleteApiKey } from "../lib/libApiKey.js";
import {navigateTo} from "../router.js";

export const renderApi = () => {
 
  const contenedorApi = document.createElement("section");
  contenedorApi.className = "section-page-api"
      
  contenedorApi.innerHTML = 
        `
          <h1 class = "titulo-api" >Api Key Admin</h1>
          <p class = "mensaje-api" >Desde aquí puedes administrar la API Key a utilizar</p>
          <input type = "password" placeholder = "Escribe/pega tu API KEY aquí" class = "input-api" ></input>
          <div class = "botones-vista-api">
            <button class = "button-inicio">Inicio</button>  
            <button class = "button-guardar-api">Guardar</button>
          </div>
        `
  //Variables 
  const inputApi = contenedorApi.querySelector(".input-api");
  const botonObtenerApi = contenedorApi.querySelector(".button-guardar-api");
  const botonInicio = contenedorApi.querySelector(".button-inicio");
  //Guardar ApiKey

  const recuperarApi = () => {
    const obtenerApiKey = getApiKey();
    if(obtenerApiKey){
      inputApi.value = obtenerApiKey;
      botonObtenerApi.textContent = 'Borrar Clave';
    }
  }
  recuperarApi();

  //Boton para guardar y borrar el ApiKey
  botonObtenerApi.addEventListener('click', () => {
    const apiKey = inputApi.value;

    if(botonObtenerApi.textContent === 'Guardar'){
      if(apiKey){
        setApiKey(apiKey);
        botonObtenerApi.textContent = 'Borrar Clave';
      }else{
        alert('Por favor, digita la clave correcta.');
      }
    }else if(botonObtenerApi.textContent === 'Borrar Clave'){
      deleteApiKey(apiKey);
      inputApi.value = "";
      botonObtenerApi.textContent = 'Guardar';
    }else{
      alert('Por favor, digita la clave correcta.');
    }
  });

  //boton para volver al inicio
  botonInicio.addEventListener('click', () => {
    navigateTo('/')
  });

  return contenedorApi;       
};
