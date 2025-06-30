function ejercicio3() {
  const nota = parseFloat(document.getElementById("input3").value);
  if (isNaN(nota)) return resultado.innerText = "Ingrese una nota válida";
  
  if (nota >= 7) {
    resultado.innerText = `Nota ${nota}: Está aprobado`;
  } else if (nota >= 5) {
    resultado.innerText = `Nota ${nota}: Está en supletorio`;
  } else {
    resultado.innerText = `Nota ${nota}: Está reprobado`;
  }
}