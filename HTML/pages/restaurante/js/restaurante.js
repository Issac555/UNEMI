document.addEventListener("DOMContentLoaded", function () {
     document.getElementById("boton-precios").addEventListener("click", function () {

          const precio = parseFloat(document.getElementById("precio-valor").value);
          const cupon = parseInt(document.getElementById("precio-cupon").value);
          let mensajecupon = document.getElementById("valor-descuento");
          let mensajeiva = document.getElementById("valor-iva");
          let preciomensaje = document.getElementById("precio-total");
          let valoriva = 0;
          let valorcupon = 0;
          let preciototal = 0;

          valorcupon = precio * (cupon / 100);
          valoriva = precio * (15 / 100);

          if (isNaN(precio) || isNaN(cupon)) {
              
               mensajecupon.textContent = `Debes de llenar los valores correctamente`
               mensajecupon.style.color = "red";

               mensajeiva.textContent = `Debes de llenar los valores correctamente`
               mensajeiva.style.color = "red";
               
               preciomensaje.textContent = `Debes de llenar los valores correctamente`
               preciomensaje.style.color = "red"
               return;
          }

          {6}
          if (precio > 70)
          {
               mensajecupon.textContent=`El valor del descuento es de ${valorcupon}$`
               mensajecupon.style.color = "green";

               mensajeiva.textContent = `El valor del IVA(15%) es de ${valoriva}$`;
               mensajeiva.style.color = "blue";

               preciototal = precio - valorcupon;
               preciototal = preciototal + valoriva;
               preciomensaje.textContent=`El valor total de su compra (IVA - CUPON) ${preciototal}`

          }
          else
          {
               mensajeiva.textContent = `El valor del IVA(15%) es de ${valoriva}$`;
               mensajeiva.style.color = "blue";

               preciototal = preciototal + valoriva;
               preciomensaje.textContent=`El valor total de su factura  ${preciototal}`
          }

     });
});