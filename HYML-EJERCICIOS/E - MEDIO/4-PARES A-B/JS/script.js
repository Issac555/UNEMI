function ejercicio9() {
     const a = parseInt(document.getElementById('ex9_a').value);
     const b = parseInt(document.getElementById('ex9_b').value);
   
     let resultado = `Números pares entre ${a} y ${b}:\n\n`;
     let i = a;
     let contador = 0;
   
     while (i <= b) {
       if (i % 2 === 0) {
         resultado += `${i}\n`;
         contador++;
       }
       i++;
     }
   
     resultado += `\nTotal de pares: ${contador}`;
     return resultado;
   }
   
   function mostrarPares() {
     document.getElementById('resultado9').textContent = ejercicio9();
   }

   