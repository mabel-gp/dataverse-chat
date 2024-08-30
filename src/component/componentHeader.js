export const renderHeader = () => {
 
  const header = document.createElement("header");
  
  header.innerHTML = 
    `
      <img src="assets/images/flor-header.png" alt="imagen-del-header">
      <div><h1>Flores</h1></div>
    `
    
  return header;
    
};