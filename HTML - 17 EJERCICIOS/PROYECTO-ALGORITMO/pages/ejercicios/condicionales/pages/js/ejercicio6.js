function ejercicio6() {
  const nombre = document.getElementById("input6a").value;
  const genero = document.getElementById("input6b").value.toLowerCase();
  
  if (!nombre || !genero) return resultado.innerText = "Ingrese nombre y género";
  
  if (genero === "masculino" || genero === "hombre") {
    resultado.innerText = `Bienvenido ${nombre}`;
  } else if (genero === "femenino" || genero === "mujer") {
    resultado.innerText = `Bienvenida ${nombre}`;
  } else {
    resultado.innerText = `Bienvenido/a ${nombre}`;
  }
}