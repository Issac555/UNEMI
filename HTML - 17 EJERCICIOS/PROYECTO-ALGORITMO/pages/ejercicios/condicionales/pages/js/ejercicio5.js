function ejercicio5() {
  const temperatura = parseFloat(document.getElementById("input5").value);
  if (isNaN(temperatura)) return resultado.innerText = "Ingrese una temperatura válida";
  
  if (temperatura < 15) {
    resultado.innerText = `Temperatura ${temperatura}°C: Hace frío`;
  } else if (temperatura >= 15 && temperatura <= 25) {
    resultado.innerText = `Temperatura ${temperatura}°C: Está templado`;
  } else {
    resultado.innerText = `Temperatura ${temperatura}°C: Hace calor`;
  }
}