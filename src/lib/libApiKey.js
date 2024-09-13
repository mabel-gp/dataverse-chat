export const getApiKey = () => {
// Implementa el código para obtener la API KEY desde Local Storage
  return localStorage.getItem("apikey");
};
 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  return localStorage.setItem("apikey", key);
};

export const deleteApiKey = () => {
  //Elimina la API KEY  
  return localStorage.removeItem("apikey");
};