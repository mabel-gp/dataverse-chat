import { filterDataHabitat, filterDataTamaño, sortData, computeStats, computeStatsPorcentaje} from '../lib/dataFunctions.js';
import data from '../data/dataset.js';
import { renderCards } from '../component/componentCards.js';
console.log(renderCards(data))

export const home = (props) => {
  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
/*   viewEl.innerHTML = `
    <h1>DataVerse</h1>
    ...
  `; */

  viewEl.appendChild(renderCards(data))
  return viewEl;
}




/* // src/views/About.js

export function About(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'This is the About page.';
    return viewEl;
  } */