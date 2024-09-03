import { filterDataHabitat, filterDataTamaño, sortData, computeStats, computeStatsPorcentaje} from '../lib/dataFunctions.js';
import data from '../data/dataset.js';
import { renderHeader } from '../component/componentHeader.js';
import { renderFilters } from '../component/componentFilters.js';
import { renderStatistics } from '../component/componentStatistics.js';
import { renderCards } from '../component/componentCards.js';
import { renderFooter } from '../component/componentFooter.js';

let currentData = data;

export function home (props) {
  const viewEl = document.createElement('div');
  viewEl.appendChild(renderHeader());
  viewEl.appendChild(renderFilters());
  viewEl.appendChild(renderStatistics());
  viewEl.appendChild(renderCards(data));
  viewEl.appendChild(renderFooter());

  const arregloDeFlores = viewEl.querySelector("main");

  const contenedorHabitat = viewEl.querySelector("#flor-habitat");
  contenedorHabitat.addEventListener("change", selectDeHabitat);

  const contenedorTamaño = viewEl.querySelector("#flor-tamaño");
  contenedorTamaño.addEventListener("change", selectDeTamaño);

  const contenedorOrdenar = viewEl.querySelector("#ordenar-flor");
  contenedorOrdenar.addEventListener("change", selectDeOrdenar);

 
  //Variables para mostrar el total de flores por cada filtro
  const contenedorEstadistica = viewEl.querySelector("#estadistica");

  const computeStatsAcuatica = computeStats(data, "tipoDeHabitat", "Acuática");
  const computeStatsTerrestre = computeStats(data, "tipoDeHabitat", "Terrestre");
  const computeStatsEpifita = computeStats(data, "tipoDeHabitat", "Epífita");

  const computeStatsPequeña = computeStats(data, "tamañoDeFlor", "Pequeña");
  const computeStatsMediana = computeStats(data, "tamañoDeFlor", "Mediana");
  const computeStatsGrande = computeStats(data, "tamañoDeFlor", "Grande");

  //Variables para mostrar el porcentaje de flores por cada filtro
  let computeStatsAmerica = computeStatsPorcentaje(currentData, "continenteDeOrigen", "América");
  let computeStatsAfrica = computeStatsPorcentaje(currentData, "continenteDeOrigen", "África");
  let computeStatsAsia = computeStatsPorcentaje(currentData, "continenteDeOrigen", "Asia");

  
  function selectDeHabitat(event){
    const opcionDeHabitat= event.target.value;
  
    if (opcionDeHabitat === "acuáticas"){
      currentData = filterDataHabitat(data, "tipoDeHabitat", "Acuática")
      const items = renderCards(currentData);
      arregloDeFlores.replaceChildren(items);
      computeStatsAmerica = computeStatsPorcentaje(currentData, "continenteDeOrigen", "América");
      contenedorEstadistica.innerHTML = "El total de flores acuáticas es " + computeStatsAcuatica + " y el " + computeStatsAmerica + "% provienen de América";
    }else if (opcionDeHabitat === "terrestres"){
      currentData = filterDataHabitat(data, "tipoDeHabitat", "Terrestre")
      const items = renderCards(currentData);
      arregloDeFlores.replaceChildren(items);
      computeStatsAfrica = computeStatsPorcentaje(currentData, "continenteDeOrigen", "África");
      contenedorEstadistica.innerHTML = "El total de flores terrestres es " + computeStatsTerrestre + " y el " + computeStatsAfrica + "% provienen de África";
    }else if(opcionDeHabitat === "epífitas"){
      currentData = filterDataHabitat(data, "tipoDeHabitat", "Epífita")
      const items = renderCards(currentData);
      arregloDeFlores.replaceChildren(items);
      computeStatsAsia = computeStatsPorcentaje(currentData, "continenteDeOrigen", "Asia");
      contenedorEstadistica.innerHTML = "El total de flores epífitas es " + computeStatsEpifita + " y el " + computeStatsAsia + "% provienen de Asia";
    }
  }

  //Función para Tamaño
  function selectDeTamaño(event){
    const opcionDeTamaño = event.target.value;

    if (opcionDeTamaño === "pequeñas"){
      currentData = filterDataTamaño(data, "tamañoDeFlor", "Pequeña");
      const items = renderCards(currentData);
      arregloDeFlores.replaceChildren(items);
      computeStatsAmerica = computeStatsPorcentaje(currentData, "continenteDeOrigen", "América");
      contenedorEstadistica.innerHTML = "El total de flores pequeñas es " + computeStatsPequeña + " y el " + computeStatsAmerica + "% provienen de América";
    }else if (opcionDeTamaño === "medianas"){
      currentData = filterDataTamaño(data, "tamañoDeFlor", "Mediana");
      const items = renderCards(currentData);
      arregloDeFlores.replaceChildren(items);
      computeStatsAmerica = computeStatsPorcentaje(currentData, "continenteDeOrigen", "América");
      contenedorEstadistica.innerHTML = "El total de flores medianas es " + computeStatsMediana + " y el " + computeStatsAmerica + "% provienen de América";
    }else if(opcionDeTamaño === "grandes"){
      currentData = filterDataTamaño(data, "tamañoDeFlor", "Grande");
      const items = renderCards(currentData);
      arregloDeFlores.replaceChildren(items);
      computeStatsAsia = computeStatsPorcentaje(currentData, "continenteDeOrigen", "Asia");
      contenedorEstadistica.innerHTML = "El total de flores grandes es " + computeStatsGrande + " y el " + computeStatsAsia + "% provienen de Asia";
    }
  }
  //Función para Ordenar
  function selectDeOrdenar(event){
    const opcionDeOrden = event.target.value;
    const sortedData = sortData(currentData, opcionDeOrden);
    const items = renderCards(sortedData);
    arregloDeFlores.replaceChildren(items);
  }

  //Función para el botón limpiar
  const botonRecargar = viewEl.querySelector('[data-testid = "button-clear"]');
  botonRecargar.addEventListener("click", () => {
    const limpiar = renderCards(data) //volver a renderizar items con la data inicial
    contenedorEstadistica.innerHTML = "";
    contenedorHabitat.value = "elegir-por-habitat";
    contenedorTamaño.value = "elegir-por-tamaño";
    contenedorOrdenar.value = "elegir-por-orden";
    arregloDeFlores.replaceChildren(limpiar);
  });

  return viewEl;
}


