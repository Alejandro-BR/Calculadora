// Alejandro Barrionuevo Rosado

const DC = "displayConversor";
const RC = "recuadroConversor";

/**
 * Calcula la conversion entre sistemas numericos.
 */
function calcularConversor() {
  const valor = document.getElementById(RC).value.trim();
  const baseEntrada = document.getElementById("baseEntrada").value;
  const baseSalida = document.getElementById("baseSalida").value;
  let resultado;

  const DECIMAL = "decimal";
  const BINARIO = "binario";
  const OCTAL = "octal";
  const HEXADECIMAL = "hexadecimal";

  if (valor === "") {
    alert("Por favor, ingrese un valor para convertir.");
    return;
  }

  // Convertir la entrada a decimal
  let valorDecimal;
  switch (baseEntrada) {
    case DECIMAL:
      valorDecimal = parseInt(valor, 10);
      break;
    case BINARIO:
      valorDecimal = parseInt(valor, 2);
      break;
    case OCTAL:
      valorDecimal = parseInt(valor, 8);
      break;
    case HEXADECIMAL:
      valorDecimal = parseInt(valor, 16);
      break;
    default:
      alert("Base de entrada no válida.");
      return;
  }

  if (isNaN(valorDecimal)) {
    alert("El valor ingresado no es válido para la base seleccionada.");
    return;
  }

  // Convertir de decimal a la base de salida
  switch (baseSalida) {
    case DECIMAL:
      resultado = valorDecimal.toString(10);
      break;
    case BINARIO:
      resultado = valorDecimal.toString(2);
      break;
    case OCTAL:
      resultado = valorDecimal.toString(8);
      break;
    case HEXADECIMAL:
      resultado = valorDecimal.toString(16).toUpperCase();
      break;
    default:
      alert("Base de salida no válida.");
      return;
  }

  // Mostrar resultado en el display
  document.getElementById(DC).value = resultado;
}

/**
 * Limpia la salida y entrada del conversor.
 */
function limpiarConversor() {
  document.getElementById(DC).value = "";
  document.getElementById(RC).value = "";
}
