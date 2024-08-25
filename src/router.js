let ROUTES = {
  '/': Home,
  '/Error': Error,
};
let rootEl = document.querySelector('#root');

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  if (typeof routes !== "object"){
    throw new Error ("La página no se encuentra");
  }
  // optional Throw errors if routes doesn't define an /error route
  // Opcional: arroja errores si las rutas no definen una ruta /error
  if (this.routes !== "/Error"){
    throw new Error ("La página no encuentra la ruta");
  }
  // assign ROUTES 
  return ROUTES = routes
}

const renderView = (pathname, props={}) => {
  // clear the root element
  const root =  rootEl;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  // Encuentre la vista correcta en RUTAS para la ruta

  if(ROUTES = pathname[props]){
    root.innerHTML = pathname("/Home");
  }
  // in case not found render the error view
  if(this.routes !== "/Error")
    return pathname("/Error");

  // render the correct view passing the value of props


  // add the view element to the DOM root element


} 

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}

/* const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
} */

/* export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
} */

