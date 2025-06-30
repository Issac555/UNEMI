let contador = 0;
let terminado = false;

function agregarNumero() {
  if (terminado) return;

  const input = document.getElementById("numeroInput");
  const numero = parseInt(input.value);

  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (numero === 0) {
    terminado = true;
    document.getElementById("resultado").innerText =
      `Ingresaste ${contador} número(s) (sin contar el 0).`;
    return;
  }

  contador++;
  input.value = ""; // limpiar campo
  input.focus();
}
