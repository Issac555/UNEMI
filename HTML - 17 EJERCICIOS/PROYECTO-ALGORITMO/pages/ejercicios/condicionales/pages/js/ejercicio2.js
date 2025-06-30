function ejercicio2() {
  const num1 = parseInt(document.getElementById("input2a").value);
  const num2 = parseInt(document.getElementById("input2b").value);
  const num3 = parseInt(document.getElementById("input2c").value);
  const num4 = parseInt(document.getElementById("input2d").value);
  
  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    return resultado.innerText = "Ingrese los cuatro números válidos";
  }
  
  if (num1 === num2 && num2 === num3 && num3 === num4) {
    resultado.innerText = "Todos los números son iguales";
  } else {
    const mayor = Math.max(num1, num2, num3, num4);
    resultado.innerText = `El número mayor es: ${mayor}`;
  }
}