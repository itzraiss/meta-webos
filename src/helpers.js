const APP_URL = 'https://mbasic.facebook.com';

export const startApp = () => {
  setTimeout(() => {
    window.location.replace(APP_URL);
  }, 1000); // Espera 1 segundo antes de redirecionar
};


const keyMap = {
  40: 'down',    // Seta para baixo
  38: 'up',      // Seta para cima
  39: 'right',   // Seta para direita
  37: 'left',    // Seta para esquerda
  13: 'enter'    // Botão "OK"
};

export const getKeyAction = (keyCode) => keyMap[keyCode] ?? null;
