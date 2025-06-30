let terminado = false;
let contador = 0;

function agregarNombre() {
  if (terminado) return;

  const input = document.getElementById("nombre");
  const nombre = input.value.trim();
  input.value = "";
  input.focus();

  if (nombre === "") return;

  const lista = document.getElementById("listaNombres");

  if (nombre.toLowerCase() === "messi") {
    terminado = true;
    document.getElementById("resultado").innerText = 
      `¡Terminaste! Ingresaste ${contador} nombre(s) antes de escribir "Messi".`;
  } else {
    contador++;
    lista.value += nombre + "\n";  // Mostrar nombre en vertical (una línea por nombre)
  }
}
