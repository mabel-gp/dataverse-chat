export const getApiKey = () => {
// Implementa el código para obtener la API KEY desde Local Storage
  const obtenerApi = localStorage.getItem("apikey");
  

};
 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  const guardarApi = localStorage.setItem("apikey", key);

  return guardarApi;
};