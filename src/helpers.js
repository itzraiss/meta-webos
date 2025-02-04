const APP_URL = 'https://m.facebook.com';

export const startApp = () => {
  window.location.href = APP_URL;
};

const keyMap = {
  40: 'down',    // Seta para baixo
  38: 'up',      // Seta para cima
  39: 'right',   // Seta para direita
  37: 'left',    // Seta para esquerda
  13: 'enter'    // Botão "OK"
};

export const getKeyAction = (keyCode) => keyMap[keyCode] ?? null;
