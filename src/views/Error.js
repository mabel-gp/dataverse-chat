import {navigateTo} from "../router.js";

function pageError() {
  const viewEl= document.createElement('div');
  viewEl.className= "vista-error"
  viewEl.innerHTML= 
  `
  <div class= "contenedor-error">
    <h1 class= "titulo-error">¡Oops!</h1>
    <p class= "text-error">La página no se encuentra disponible</p>
    <img class= "img-error" src= "assets/images/error.png">
    <button class= "boton-error">Inicio</button>
  </div>
  `

  const botonError = viewEl.querySelector(".boton-error")

  botonError.addEventListener('click', () => {
    navigateTo('/')
  });

  return viewEl;
}
  
export default pageError;




