export const renderFilters = () => {
 
  const filters = document.createElement("aside");
    
  filters.innerHTML = 
      `
      <label for="flor-habitat">Hábitat</label>
      <select name="habitat" id="flor-habitat" data-testid="select-filter">
        <option value="elegir-por-habitat">Elige una opción</option>
        <option value="acuáticas">Acuáticas</option>
        <option value="terrestres">Terrestres</option>
        <option value="epífitas">Epífitas</option>
      </select>

      <label for="flor-tamaño">Tamaño</label>
      <select name="tamaño" id="flor-tamaño">
        <option value="elegir-por-tamaño">Elige una opción</option>
        <option value="pequeñas">Pequeñas</option>
        <option value="medianas">Medianas</option>
        <option value="grandes">Grandes</option>
      </select>

      <label for="ordenar-flor">Orden</label>
      <select name="name" id="ordenar-flor" data-testid="select-sort">
        <option value="elegir-por-orden">Elige una opción</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <div>
        <button data-testid="button-clear">Recargar</button>
      </div>
      `
      
  return filters;
      
};