// Alejandro Barrionuevo Rosado

function valores(valor) {
  let display = document.getElementById('display');
  display.value += valor;
}

function limpiar() {
  let display = document.getElementById('display');
  display.value = '';
}

function calcular() {
  let display = document.getElementById('display');
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = 'Error';
  }
}
