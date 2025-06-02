document.getElementById("boton1").addEventListener("click", function () {

     const numero1 = parseInt(document.getElementById("primer-digito").value);
     const numero2 = parseInt(document.getElementById("segundo-digito").value);
     const numero3 = parseInt(document.getElementById("tercer-digito").value);
     const numero4 = parseInt(document.getElementById("cuarto-digito").value);

     let mensaje = document.getElementById("resultado");
     let mensaje2 = document.getElementById("resultado-dos");

     if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
          mensaje.style.color = "red";
          mensaje.textContent = "Llena los recuadros correctamente";
         
          mensaje2.style.color = "red";
          mensaje2.textContent = "Llena los recuadros correctamente";
          return;
     }

     if (numero1 * 2  === numero2)
     {
          mensaje.textContent = `El numero ${numero1} si es la mitad de ${numero2}`
          mensaje.style.color="green"
     } else {
          mensaje.style.color="red"
          mensaje.textContent = `El numero ${numero1} no es la mitad de ${numero2}`
     }

     if (numero3 % numero4 === 0) {
 
          mensaje2.textContent = `El número ${numero3} si es divisor del numero ${numero4}`
          mensaje2.style.color="green"
     }
     else if (numero4 % numero3 === 0)
     {
          mensaje2.textContent = `El número ${numero4} es divisor de numero ${numero3}`;
          mensaje2.style.color = "green;"
     
     }
     else
     {
          mensaje2.textContent = "Níngun numero es divisor y viceversa";
          mensaje2.style.color = "RED"
     }

});