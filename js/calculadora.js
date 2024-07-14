// Alejandro Barrionuevo Rosado

const D = "display";

/**
 * Agrega el valor indicado al campo de operacion del display.
 * 
 * @param {*} valor - El valor que se va a agregar al display.
 */
function valores(valor) {
  let display = document.getElementById(D);
  display.value += valor;
}

/**
 * Limpia el contenido del display.
 */
function limpiar() {
  let display = document.getElementById(D);
  display.value = "";
}

/**
 * Evalua la expresion matematica en el display y muestra el resultado.
 * Si hay un error en la evaluacion, muestra "Error" y un mensaje de error.
 */
function calcular() {
  let display = document.getElementById(D);
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    mensajeError("Error numerico.");
  }
}

/**
 * Elimina el ultimo caracter del display.
 */
function borrar() {
  let display = document.getElementById(D);
  display.value = display.value.slice(0, -1);
}
