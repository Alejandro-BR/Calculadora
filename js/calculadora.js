// Alejandro Barrionuevo Rosado

const D = "display";

/**
 * Pone en la operacion el valor
 * indicado.
 * 
 * @param {*} valor 
 */
function valores(valor) {
  let display = document.getElementById(D);

  if (valor === "Math.PI") {
    display.value += "π";
  } else if (valor === "Math.E") {
    display.value += "e";
  } else {
    display.value += valor;
  }
}

/**
 * Limpia la salida.
 */
function limpiar() {
  let display = document.getElementById(D);
  display.value = "";
}

/**
 * Calcula el resultado.
 */
function calcular() {
  let display = document.getElementById(D);
  let entrada = display.value;

  entrada = entrada.replace(/π/g, "Math.PI");
  entrada = entrada.replace(/e/g, "Math.E");

  try {
    display.value = eval(entrada);
  } catch (error) {
    display.value = "Error";
    mensajeError("Error numérico.");
  }
}

/**
 * Borra el ultimo digito.
 */
function borrar() {
  let display = document.getElementById(D);
  display.value = display.value.slice(0, -1);
}

/**
 * Funcion que copia la salida.
 */
function copiarSalida() {
  let salida = document.getElementById(D).value;

  // Utilizar el Clipboard API para copiar al portapapeles
  navigator.clipboard.writeText(salida).then(function () {
    mensaje("Salida copiada: " + salida);
  }).catch(function (err) {
    mensajeError("Error al copiar al portapapeles.");
  });
}
