let suma = 0;
let numero = 0;

while (numero >= 0) {
  numero = parseFloat(prompt("Ingresa un número (negativo para terminar):"));

  if (isNaN(numero)) {
    alert("Eso no es un número válido.");
    continue;
  }

  if (numero >= 0) {
    suma += numero;
  }
}

alert("La suma total es: " + suma);

