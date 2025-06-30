function ejercicio9() {
  const tipoCliente = document.getElementById("tipoCliente9").value.toLowerCase();
  const gasto = parseFloat(document.getElementById("gasto9").value);
  
  if (isNaN(gasto) || gasto < 0) {
    return resultado.innerText = "Ingrese un gasto válido";
  }
  
  if (tipoCliente !== "normal" && tipoCliente !== "vip") {
    return resultado.innerText = "Ingrese tipo de cliente válido (Normal o VIP)";
  }
  
  let descuento = 0;
  let porcentajeDescuento = 0;
  
  if (tipoCliente === "vip" && gasto > 100) {
    porcentajeDescuento = 20;
    descuento = gasto * 0.20;
  } else {
    porcentajeDescuento = 10;
    descuento = gasto * 0.10;
  }
  
  const gastoConDescuento = gasto - descuento;
  const iva = gastoConDescuento * 0.15;
  const total = gastoConDescuento + iva;
  
  resultado.innerText = `Cliente: ${tipoCliente.toUpperCase()}, Gasto: $${gasto}, Descuento: ${porcentajeDescuento}% ($${descuento.toFixed(2)}), Subtotal: $${gastoConDescuento.toFixed(2)}, IVA: $${iva.toFixed(2)}, Total: $${total.toFixed(2)}`;
}