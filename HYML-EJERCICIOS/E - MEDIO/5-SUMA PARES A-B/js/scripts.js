function ejercicio10() {
     const a = parseInt(document.getElementById('ex10_a').value);
     const b = parseInt(document.getElementById('ex10_b').value);
   
     let resultado = `Sumando pares entre ${a} y ${b}:\n\n`;
     let i = a;
     let suma = 0;
     let contador = 0;
   
     while (i <= b) {
       if (i % 2 === 0) {
         resultado += `${i} (sumando)\n`;
         suma += i;
         contador++;
       }
       i++;
     }
   
     resultado += `\nSuma total: ${suma}\n`;
     resultado += `Cantidad de pares: ${contador}`;
     return resultado;
   }
   
   function mostrarSumaPares() {
     document.getElementById('resultado10').textContent = ejercicio10();
   }
   