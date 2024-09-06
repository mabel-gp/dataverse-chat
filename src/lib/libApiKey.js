export const getApiKey = () => {
// Implementa el código para obtener la API KEY desde Local Storage
  const obtenerApi = localStorage.getItem("apikey");
  //return aqui iba apikey 
  // return obtenerApi;

};
 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  const guardarApi = localStorage.setItem("apikey", key);

  return guardarApi;
};