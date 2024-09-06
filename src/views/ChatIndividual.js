import { renderChatIndividual } from '../component/componentChatIndividual.js';

function pageChatIndividual(props) {
  const viewEl = document.createElement('div');
  viewEl.appendChild(renderChatIndividual(props));
  return viewEl;
}
    
export default pageChatIndividual;