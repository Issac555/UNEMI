const resultado = document.getElementById("resultado");

function ejercicio1() {
  const edad = parseInt(document.getElementById("input18").value);
  if (isNaN(edad)) return resultado.innerText = "Ingrese una edad válida";
  
  if (edad >= 0 && edad <= 12) {
    resultado.innerText = `Edad ${edad}: Es niño`;
  } else if (edad >= 13 && edad <= 17) {
    resultado.innerText = `Edad ${edad}: Es adolescente`;
  } else if (edad >= 18 && edad <= 59) {
    resultado.innerText = `Edad ${edad}: Es adulto`;
  } else if (edad >= 60) {
    resultado.innerText = `Edad ${edad}: Es adulto mayor`;
  } else {
    resultado.innerText = "Edad no válida";
  }
}