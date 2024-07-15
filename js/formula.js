// Alejandro Barrionuevo Rosado

const D = "displayFormula";
const R = "recuadroEntrada";

/**
 * Carcula el resultado 
 */
function calcularFormula() {
  let formula, resultado;

  formula = document.formula.recuadro.value;
  resultado = eval(formula); 

  document.formula.displayFormula.value = resultado;
  console.log("Resultado: " + resultado);
}

/**
 * Limpia la salida y entrada.
 */
function limpiarFormula() {
  let display = document.getElementById(D);
  let entrada = document.getElementById(R);
  display.value = "";
}