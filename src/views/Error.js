function pageError(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Error 404. Page not found.';
  return viewEl;
}
  
export default pageError;