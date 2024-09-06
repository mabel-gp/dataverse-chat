import { renderApi } from '../component/componentApi.js';
import { renderHeader } from '../component/componentHeader.js';

function pageApiKey(props) {
  const viewEl = document.createElement('div');
  viewEl.appendChild(renderHeader());
  viewEl.appendChild(renderApi());
  return viewEl;
}
    
export default pageApiKey;