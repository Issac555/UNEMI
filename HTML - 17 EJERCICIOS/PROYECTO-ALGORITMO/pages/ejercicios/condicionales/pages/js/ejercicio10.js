function ejercicio10() {
  const membresia = document.getElementById("membresia10").value.toLowerCase();
  const compra = parseFloat(document.getElementById("compra10").value);
  
  if (isNaN(compra) || compra < 0) {
    return resultado.innerText = "Ingrese un monto de compra válido";
  }
  
  if (membresia !== "si" && membresia !== "sí" && membresia !== "no") {
    return resultado.innerText = "Ingrese 'si' o 'no' para la membresía";
  }
  
  let descuento = 0;
  let porcentajeDescuento = 0;
  let porcentajeIva = 0;
  
  if ((membresia === "si" || membresia === "sí") && compra > 50) {
    porcentajeDescuento = 30;
    porcentajeIva = 15;
    descuento = compra * 0.30;
  } else {
    porcentajeDescuento = 5;
    porcentajeIva = 10;
    descuento = compra * 0.05;
  }
  
  const subtotal = compra - descuento;
  const iva = subtotal * (porcentajeIva / 100);
  const total = subtotal + iva;
  
  resultado.innerText = `Membresía: ${(membresia === "si" || membresia === "sí") ? "Sí" : "No"}, Compra: $${compra}, Descuento: ${porcentajeDescuento}% ($${descuento.toFixed(2)}), Subtotal: $${subtotal.toFixed(2)}, IVA: ${porcentajeIva}% ($${iva.toFixed(2)}), Total: $${total.toFixed(2)}`;
}