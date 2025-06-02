document.addEventListener("DOMContentLoaded", function() {
     
     document.getElementById("verificar").addEventListener("click", function() {
          
          const compra = parseInt(document.getElementById("valor").value);
          const tipo = document.getElementById("tipo").value;
          let valoriva = 0, valortotal = 0, valordescuento = 0, descuento = 10;
         
          function textoColor(texto, color) {
               return `<span style="color: ${color};">${texto}</span><br>`;
          }
          const mensaje = document.getElementById("resultado");
          if (isNaN(compra))
          {
               mensaje.textContent = `Ingresa el formulario correctamente`;
               mensaje.style.color = "Red"
               return;
          }
          if (tipo === "A") {
               descuento = 30;
               valoriva = compra * 0.15;
               valordescuento = compra * (descuento / 100);

               valortotal = compra + valoriva - valordescuento;
               mensaje.innerHTML =
               textoColor(`El valor del descuento es de ${valordescuento}$`, "green") +
               textoColor(`El valor del IVA es de ${valoriva}$`, "red") +
               textoColor(`El valor total es de ${valortotal}$`, "blue") +
               textoColor(`Tu tipo de discapacidad es: ${tipo}`, "black");

          }
          else if (tipo === "B") {
               descuento = 25;
               valoriva = compra * 0.15;
               valordescuento = compra * (descuento / 100);

               valortotal = compra + valoriva - valordescuento;
               mensaje.innerHTML =
               textoColor(`El valor del descuento es de ${valordescuento}$`, "green") +
               textoColor(`El valor del IVA es de ${valoriva}$`, "red") +
               textoColor(`El valor total es de ${valortotal}$`, "blue") +
               textoColor(`Tu tipo de discapacidad es: ${tipo}`, "black");

          }
          else if (tipo === "C") {
               descuento = 20;
               valoriva = compra * 0.15;
               valordescuento = compra * (descuento / 100);

               valortotal = compra + valoriva - valordescuento;
               mensaje.innerHTML =
               textoColor(`El valor del descuento es de ${valordescuento}$`, "green") +
               textoColor(`El valor del IVA es de ${valoriva}$`, "red") +
               textoColor(`El valor total es de ${valortotal}$`, "blue") +
               textoColor(`Tu tipo de discapacidad es: ${tipo}`, "black");
               
          }
          else  {
               descuento = 10;
               valoriva = compra * 0.15;
               valordescuento = compra * (descuento / 100);

               valortotal = compra + valoriva - valordescuento;
               mensaje.innerHTML =
               textoColor(`El valor del descuento es de ${valordescuento}$`, "green") +
               textoColor(`El valor del IVA es de ${valoriva}$`, "red") +
               textoColor(`El valor total es de ${valortotal}$`, "blue") +
               textoColor(`Tu tipo de discapacidad es: Otro`, "black");
          }
     });
});