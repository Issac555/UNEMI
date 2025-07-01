// Libros
let libros = [];
let muchosCaracteres = 0;
let terminaNumero = 0;
let sinCond = 0;

function agregarLibro() {
  let entrada = document.getElementById("libro").value;

  if (entrada !== "") {
    libros.push(entrada);

    let ultimo = entrada.charAt(entrada.length - 1);

    if (entrada.length > 20) {
      muchosCaracteres++;
    } else if (!isNaN(ultimo)) {
      terminaNumero++;
    } else {
      sinCond++;
    }

    document.getElementById("libro").value = "";
    document.getElementById("listaLibros").textContent = libros.join("\n");

    document.getElementById("resumenLibros").innerHTML =
      "Con más de 20 caracteres: " + muchosCaracteres + "<br>" +
      "Terminan en número: " + terminaNumero + "<br>" +
      "Sin condición: " + sinCond;
  }
}

// Productos
let productos = [];
let iniciaVocal = 0;
let terminaPunto = 0;
let sinCondProd = 0;

function agregarProducto() {
  let nombre = document.getElementById("producto").value;

  if (nombre !== "") {
    productos.push(nombre);

    let primera = nombre.charAt(0).toLowerCase();
    let ultima = nombre.charAt(nombre.length - 1);

    if ("aeiou".includes(primera)) {
      iniciaVocal++;
    } else if (ultima === ".") {
      terminaPunto++;
    } else {
      sinCondProd++;
    }

    document.getElementById("producto").value = "";
    document.getElementById("lista").textContent = productos.join("\n");

    document.getElementById("resumen").innerHTML =
      "Inician con vocal: " + iniciaVocal + "<br>" +
      "Terminan en punto: " + terminaPunto + "<br>" +
      "Sin condición: " + sinCondProd;
  }
}
