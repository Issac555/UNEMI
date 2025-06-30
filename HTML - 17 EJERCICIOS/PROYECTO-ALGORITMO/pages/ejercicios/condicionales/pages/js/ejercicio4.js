function ejercicio4() {
  const dia = document.getElementById("input4").value.toLowerCase();
  if (!dia) return resultado.innerText = "Ingrese un día de la semana";
  
  if (dia === "sabado" || dia === "domingo") {
    resultado.innerText = `${dia}: Es fin de semana`;
  } else if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
    resultado.innerText = `${dia}: Es entre semana`;
  } else {
    resultado.innerText = "Día no válido";
  }
}