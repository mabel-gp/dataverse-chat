import { renderChatIndividual } from '../component/componentChatIndividual.js';

const viewEl = document.createElement('div');

function pageChatIndividual(props) {
  viewEl.appendChild(renderChatIndividual(props));
  return viewEl;
}
    
export default pageChatIndividual;