document.addEventListener("DOMContentLoaded", function () {
     document.getElementById("ingreso").addEventListener("click", function () {
 
         const compra = parseFloat(document.getElementById("compra").value.trim());
         const edad = parseInt(document.getElementById("edad").value.trim());
         const tipo = document.getElementById("usuario").value;
         const mensaje = document.getElementById("resultado");
 
         // Validación de campos
         if (isNaN(compra) || isNaN(edad)) {
             mensaje.innerHTML = `<span style="color:red;">Ingresa correctamente los valores numéricos.</span>`;
             return;
         }
 
         let porcentajeDescuento = 0;
 
         if (tipo === "premium" && edad < 18) {
             porcentajeDescuento = 15;
         } else if (tipo === "regular" || edad >= 18) {
             porcentajeDescuento = 10;
         } // No se asigna descuento si no es premium ni regular
 
         const valordescuento = compra * (porcentajeDescuento / 100);
         const valoriva = compra * 0.12;
         const valortotal = compra + valoriva - valordescuento;
 
         mensaje.innerHTML =
             `<strong>Tipo de usuario:</strong> ${tipo}<br>` +
             `<strong>Total de la compra:</strong> $${compra.toFixed(2)}<br>` +
             `<strong>Porcentaje de descuento:</strong> ${porcentajeDescuento}%<br>` +
             `<strong>Valor del descuento:</strong> $${valordescuento.toFixed(2)}<br>` +
             `<strong>Valor del IVA (12%):</strong> $${valoriva.toFixed(2)}<br>` +
             `<strong>Total a pagar:</strong> $${valortotal.toFixed(2)}`;
     });
 });
 