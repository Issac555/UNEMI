let titulos = [];
let masDe20 = 0;
let terminaEnNumero = 0;
let sinCondicion = 0;

function agregarTitulo() {
  let titulo = document.getElementById("libro").value.trim();

  if (titulo !== "") {
    titulos.push(titulo);

    let ultimo = titulo.charAt(titulo.length - 1);

    if (titulo.length > 20) {
      masDe20++;
    } else if (!isNaN(ultimo) && ultimo !== " ") {
      terminaEnNumero++;
    } else {
      sinCondicion++;
    }

    document.getElementById("libro").value = "";
    document.getElementById("listaLibros").textContent = titulos.join("\n");

    document.getElementById("resumenLibros").innerHTML =
      "Títulos con más de 20 caracteres: " + masDe20 + "<br>" +
      "Títulos que terminan en número: " + terminaEnNumero + "<br>" +
      "Títulos sin condición: " + sinCondicion;
  }
}

let productos = [];
let conVocal = 0;
let conPunto = 0;
let sinCondicion = 0;

function agregarProducto() {
  let nombre = document.getElementById("producto").value.trim();

  if (nombre !== "") {
    productos.push(nombre);

    let primera = nombre.charAt(0).toLowerCase();
    let ultima = nombre.charAt(nombre.length - 1);

    if ("aeiou".includes(primera)) {
      conVocal++;
    } else if (ultima === ".") {
      conPunto++;
    } else {
      sinCondicion++;
    }

    document.getElementById("producto").value = "";
    document.getElementById("lista").textContent = productos.join("\n");

    document.getElementById("resumen").innerHTML =
      "Productos que inician con vocal: " + conVocal + "<br>" +
      "Productos que terminan en punto: " + conPunto + "<br>" +
      "Productos sin condición: " + sinCondicion;
  }
}
