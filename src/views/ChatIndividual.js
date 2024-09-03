import { renderChatIndividual } from '../component/componentChatIndividual.js';

const viewEl = document.createElement('div');

function pageChatIndividual(props) {
  viewEl.appendChild(renderChatIndividual());
  return viewEl;
}
    
export default pageChatIndividual;