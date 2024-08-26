//index.js es el único que tiene contacto directo con html

import home from '/views/Home.js';
import pageError from '/views/Error.js';
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': home,
  '/error': pageError,
};

// Assign the routes
setRoutes(routes);

const rootElement = document.querySelector('#root'); 

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(rootElement);
  onURLChange(window.location)
});

  

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/