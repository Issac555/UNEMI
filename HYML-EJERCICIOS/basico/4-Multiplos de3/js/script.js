function mostrarMultiplos() {
     const n = parseInt(document.getElementById('limite').value);
     let i = 1;
     let contador = 0;
     let salida = `Múltiplos de 3 del 1 al ${n}:\n`;
     salida += "========================\n";
   
     while (i <= n) {
       if (i % 3 === 0) {
         salida += `${i} (múltiplo de 3)\n`;
         contador++;
       }
       i++;
     }
   
     salida += "========================\n";
     salida += `Total múltiplos de 3: ${contador}`;
   
     document.getElementById('resultado').textContent = salida;
   }
   