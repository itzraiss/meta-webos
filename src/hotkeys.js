import { getKeyAction } from './helpers.js';

const handleKeyPress = (e) => {
  const action = getKeyAction(e.keyCode);

  if (action === 'down') {
    window.scrollBy(0, 300); // Rolar para baixo
  } else if (action === 'up') {
    window.scrollBy(0, -300); // Rolar para cima
  } else if (action === 'enter') {
    // Clica no elemento em foco (se houver)
    if (document.activeElement) {
      document.activeElement.click();
    }
  } else if (action === 'like') {
    // Tenta clicar no botão "Curtir" mais próximo
    const likeButtons = document.querySelectorAll('[aria-label="Curtir"]');
    if (likeButtons.length > 0) {
      likeButtons[0].click();
    }
  }
};

// Mapeia teclas específicas do controle remoto
const keyMap = {
  40: 'down',    // Seta para baixo
  38: 'up',      // Seta para cima
  13: 'enter',   // Botão "OK"
  403: 'like'    // Tecla "Vermelho" para curtir (pode variar por TV)
};

document.addEventListener('keydown', handleKeyPress);
