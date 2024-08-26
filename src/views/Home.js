// Es común que debas repetir este proceso para cada una de las vistas que requieras durante el desarrollo

// se define una función Home, que crea, configura y retorna un <div>. Creo que este código se relaciona con router.js
export function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';
  return viewEl;
}