import { renderApi } from '../component/componentApi.js';
import { renderHeader } from '../component/componentHeader.js';

const viewEl = document.createElement('div');

function pageApiKey(props) {
  viewEl.appendChild(renderHeader());
  viewEl.appendChild(renderApi());
  return viewEl;
}
    
export default pageApiKey;