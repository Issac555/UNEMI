function ejercicio7() {
  const hora = parseInt(document.getElementById("input7").value);
  if (isNaN(hora) || hora < 0 || hora > 23) {
    return resultado.innerText = "Ingrese una hora válida (0-23)";
  }
  
  if (hora >= 0 && hora <= 11) {
    resultado.innerText = `Hora ${hora}: Buenos días`;
  } else if (hora >= 12 && hora <= 17) {
    resultado.innerText = `Hora ${hora}: Buenas tardes`;
  } else {
    resultado.innerText = `Hora ${hora}: Buenas noches`;
  }
}