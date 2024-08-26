// Funciones para manejar las rutas, navegar entre ellas y actualizar el contenido dinámicamante
// El router debe tener su propia variable "privada" para almacenar las rutas y una función que pueda llamarse desde otro módulo para asignar las rutas
// setRoutes(routes): Esta función asigna el valor del parámetro routes al objeto ROUTES



let ROUTES = {

  // + se define una variable que representa una colección de rutas que no debe cambiar a lo largo de la ejecución
  // Esta variable almacena información sobre las rutas en tu SPA
  // Cada ruta está asociada con una ruta y una vista o componente correspondiente. Si un usuario navega a una ruta específica, el router mostrará la vista correspondiente.
  
  /* path: '/', prueba: home, //+ mapeo | c/o tiene como propiedad path y su valor será la ruta, la otra propiedad será prueba y su valor será la referencia a la importación */
  /* home: /home, //clave-valor */
  "/": home, //clave-valor
  
};
  
  
let rootEl = document.querySelector('#root');
// Variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá
  
export const setRootEl = (el) => {
  
  /* Esta función tiene un parámetro (elemento). 
    Establece el elemento raíz donde se representarán las vistas, lo que le permite para especificar en qué parte de su documento HTML aparecerá el contenido SPA */
  
  /* Una función que renderiza una vista en el elemento root especificado. Tiene dos parametros, pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista. La función renderView borra el contenido existente, encuentra la función de view para el pathname dado y llama a esa función de vista pasando props como argumento ( más sobre eso en un momento ). Luego agrega el elemento devuelto por la función de vista al elemento root. */
  
  // assign rootEl
  // > asignar un valor a la variable rootEl
  
  rootEl = document.querySelector(el);
  // console.log(rootEl);
}
  
  
export const setRoutes = (routes) => {
  
  /* asigna el valor del argumento routes al objeto ROUTES. Routes debe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así. Utilice esta función para definir las rutas para su SPA */
  
  // assign ROUTES
  // > asignar un valor a la variable rootEl
  
  // optional Throw errors if routes isn't an object
  // > opcional: Lanza errores si las rutas no son un objeto
  
  // optional Throw errors if routes doesn't define an /error route
  // > opcional: Lanza errores si las rutas no definen una ruta /error 
    
  
    
  
   
}
  
  
const renderView = (pathname, props={}) => {
  
  /*representa una vista en el elemento raíz especificado. Borra el contenido existente, busca la función de vista para el nombre de ruta y luego busca la vista. funciona en routes y llama a la función de vista pasando el valor props como argumento a la vista. Agrega el elemento DOM devuelto por la función de vista al elemento root */
  
  // clear the root element
  // > borrar el root element
  rootEl.replaceChild("");
  
  // find the correct view in ROUTES for the pathname
  // > encuentra la view correcta en ROUTES para el pathname
  const rutaDelHome = rootEl;
  rutaDelHome.innerHTML = ROUTES[pathname];
    
  // in case not found render the error view
  // > en caso de que no se encuentre, renderiza la error view
  
  // render the correct view passing the value of props
  // > renderiza la view correcta pasando el valor de los props
  
  // add the view element to the DOM root element
  // > agrega el view element al root element del DOM
  return rutaDelHome;
} 
  
  
export const onURLChange = (location) => {
  
  /* esta función está destinada a manejar cambios de URL con popstate y también cuando el app carga la primera vez. Cuando la URL cambia, analiza el pathname y la search desde la location (window.location) y luego llama a renderView. Debes usar queryStringToObject para obtener los parámetros de la cadena de search en formato de objeto para pasar a renderView */
  
  /* función para manejar cambios de URL con popstate*/
  
  // parse the location for the pathname and search params
  // > analizar la ubicación del pathname y de los parámetros de búsqueda
  
  // convert the search params to an object
  // > convertir los parámetros de búsqueda a un objeto
  
  // render the view with the pathname and object
  // > renderizar la view con el pathname y el objeto
  
    
}
  
  
  
  
/* const queryStringToObject = (queryString) => {
    // convert query string to URLSearchParams
    // convert URLSearchParams to an object
    // return the object
  }
   */
  
  
  
/* export const navigateTo = (pathname, props={}) => {
  
    // Una función que recibe una ruta, envía un nuevo estado histórico y representa la nueva vista
    // función renderView, podemos usarla dentro de navigateTo para mantener el código DRY
  
    // update window history with window.history.pushState
    // >
    // render the view with the pathname and props
    // >  
  } */