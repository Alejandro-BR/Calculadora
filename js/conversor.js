// Alejandro Barrionuevo Rosado

const DC = "displayConversor";
const RC = "recuadroConversor";

// calcularConversor


/**
 * Limpia la salida y entrada.
 */
function limpiarConversor() {
  let display = document.getElementById(DC);
  let entrada = document.getElementById(RC);
  display.value = "";
  entrada.value = ""; 
}