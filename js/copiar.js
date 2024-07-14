// Alejandro Barrionuevo Rosado

/**
 * Funcion que copia la salida.
 */
function copiarSalida() {
  let display = document.getElementById("display");
  let salida = display.value;

  if (salida) {
    // Utilizar el Clipboard API para copiar al portapapeles
    navigator.clipboard.writeText(salida).then(function () {
      mensaje("Salida copiada: " + salida);
    }).catch(function (err) {
      mensajeError("Error al copiar al portapapeles: " + err);
    });
  } else {
    mensajeError("No hay salida para copiar.");
  }
}
