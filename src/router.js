let ROUTES = {
};

let rootElement;

export const setRootEl = (element) => {
  // assign rootEl
  rootElement = element;
}

export const setRoutes = (routes) => {

  // optional Throw errors if routes isn't an object
  if (typeof routes !== "object"){
    throw new Error ("La página no se encuentra");
  }

  // optional Throw errors if routes doesn't define an /error 
  
  // Opcional: arroja errores si las rutas no definen una ruta /error
  if (routes["/Error"]){
    throw new Error ("La página no encuentra la ruta");
  }

  // assign ROUTES 
  return ROUTES = routes;
}

const renderView = (pathname, props={}) => {//chatind necesita prop,mandarid yrecibir con querysttringtoobject, props otra forma de llamr params
  
  // clear the root element
  const root =  rootElement;
  root.innerHTML = "";

  // find the correct view in ROUTES for the pathname
  // Encuentre la vista correcta en RUTAS para la ruta
  
  // in case not found render the error view
  if(ROUTES[pathname] === undefined){
    root.replaceChildren( ROUTES["/error"]());
  }else{
    root.replaceChildren( ROUTES[pathname]());

  }
  // render the correct view passing the value of props
  

  // add the view element to the DOM root element


} 

export const onURLChange = (location) => { //Escucha cuando la URL cambia, revisar querystringtoobject
  // console.log('URL cambia');

  // parse the location for the pathname and search params
  // > analizar la ubicación del pathname y de los parámetros de búsqueda=search
  const { pathname, search } = location;
  console.log(pathname);
  console.log(search); 

  // convert the search params to an object
  // > convertir los parámetros de búsqueda a un objeto
  const props = queryStringToObject(search);
  console.log(props);

  // render the view with the pathname and object
  // > renderizar la view con el pathname y el objeto
  renderView(pathname, props);
  

}

  

const queryStringToObject = (queryString) => { //para chat individual ejemplo chat?id=1
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

