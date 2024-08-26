// Este es el archivo principal, + es el punto de entrada/salida el cual nos permitirá controlar todo lo relacionado con la manipulación del DOM en nuestras rutas
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
// Inicialice su router definiendo sus rutas y configurando el elemento raíz

/*
import Example from './views/Example.js';
// + importar ficheros de vistas

Ejemplo de definición de rutas:
// Las rutas deben definirse en un módulo fuera del router pero luego pasarse al router para almacenarlas.

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

//Importar 4 funciones de router.js
import {setRootEl, setRoutes, onURLChange} from 'src/router.js' 

import Home  from './views/home.js';

const routes = {
  "/home": Home,
}