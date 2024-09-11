import { getApiKey } from "../lib/libApiKey.js";
import { setApiKey } from "../lib/libApiKey.js";
import { deleteApiKey } from "../lib/libApiKey.js";

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
  //Variables 
  const inputApi = contenedorApi.querySelector(".input-api");
  const botonObtenerApi = contenedorApi.querySelector(".button-guardar-api");
  //Guardar ApiKey

  const recuperarApi = () => {
    const obtenerApiKey = getApiKey();
    if(obtenerApiKey){
      inputApi.value = obtenerApiKey;
      botonObtenerApi.textContent = 'Borrar Clave';
    }
  }
  recuperarApi();


  botonObtenerApi.addEventListener('click', () => {
    // setApiKey(inputApi.value);
    const apiKey = inputApi.value;
    
    // const eliminarApiKey = deleteApiKey();
    // console.log(eliminarApiKey);

    if(botonObtenerApi.textContent === 'Guardar'){
      // const paraObtener = getApiKey(apiKey);
      if(apiKey){
        setApiKey(apiKey);
        botonObtenerApi.textContent = 'Borrar Clave';
        // getApiKey(apiKey);
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




    // if(recuperarApiKey){
    //   //guardar ApiKey
    //   recuperarApiKey;
    //   //cambia estado de botón a borrar
    //   inputApi.value = `${recuperarApiKey}`;
    // }else if(eliminarApiKey){
    //   botonObtenerGuardarApi.textContent = "Borrar Clave";
    //   botonObtenerGuardarApi.addEventListener = deleteApiKey();
    // }else{
    //   alert('Por favor, digita la clave correcta.');
    // }
    

    //Para ocultar la clave
    // Muestra los primeros "visibleCount" caracteres y oculta el resto con asteriscos 
    // function maskKey(inputApi, visibleCount = 4) { 

    //   const visiblePart = inputApi.slice(0, visibleCount); // Parte visible de la clave 
    //   const hiddenPart = "*".repeat(inputApi.length - visibleCount); // Parte oculta con asteriscos 
    //   return visiblePart + hiddenPart; // Combina ambas partes 
    // }
    // return maskKey;
  })
  
  

  // document.addEventListener("DOMContentLoaded", () => {
  //   const estadoDeClave = getApiKey("apikey");
  //   if (estadoDeClave){
  //     inputApi.value = `Clave guardada: ${estadoDeClave}`;
  //     botonObtenerGuardadApi.textContent = "Borrar clave";
  //   }
  // });

  //primero escuchar al botón

  // botonObtenerGuardadApi.addEventListener("click", () => {
  //   const botonObtenerApiKey = getApiKey("apikey");

  //   if(botonObtenerApiKey){
  //     localStorage.removeItem = ("apikey");

  //     botonObtenerGuardadApi.textContent = "Borrar";

  //   //establecer la función que obtenga el getApiKey
  //   } else {
  //     const nuevaApiKey = inputApi.value;
  //     setApiKey("apikey", nuevaApiKey);
        
  //     inputApi.value = "";
  //     botonObtenerGuardadApi.textContent = "Guardar";
    
  //   }
  // });

  return contenedorApi;
        
};
