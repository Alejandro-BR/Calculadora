// Alejandro Barrionuevo Rosado

const DF = "displayFormula";
const R = "recuadroEntrada";

/**
 * Calcula el resultado
 */
function calcularFormula() {
  let formula, resultado;

  formula = document.formula.recuadro.value;
  try {
    resultado = eval(formula); 
    document.formula.displayFormula.value = resultado;
    console.log("Resultado: " + resultado);
  } catch (error) {
    console.error("Error en la fórmula: " + error);
    document.formula.displayFormula.value = "Error";
  }
}

/**
 * Limpia la salida y entrada.
 */
function limpiarFormula() {
  let display = document.getElementById(DF);
  let entrada = document.getElementById(R);
  display.value = "";
  entrada.value = ""; // Asegúrate de limpiar también la entrada
}
