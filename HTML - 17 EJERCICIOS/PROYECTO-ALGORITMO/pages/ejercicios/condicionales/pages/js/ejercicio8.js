function ejercicio8() {
  const hijos = parseInt(document.getElementById("input8").value);
  const trabajo = document.getElementById("trabajo8").value.toLowerCase();
  
  if (isNaN(hijos) || hijos < 0) {
    return resultado.innerText = "Ingrese un número válido de hijos";
  }
  
  let bono = 0;
  
  if (trabajo === "si" || trabajo === "sí") {
    bono = hijos * 50;
    resultado.innerText = `Número de hijos: ${hijos}, Tiene trabajo: Sí, Bono: $${bono}`;
  } else if (trabajo === "no") {
    bono = hijos * 30;
    resultado.innerText = `Número de hijos: ${hijos}, Tiene trabajo: No, Bono: $${bono}`;
  } else {
    resultado.innerText = "Ingrese 'si' o 'no' para el trabajo";
  }
}