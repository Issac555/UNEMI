function ejercicio5() {
     const x = parseInt(document.getElementById('ex5_x').value);
     const n = parseInt(document.getElementById('ex5_n').value);
     
     let resultado = `Múltiplos de ${x} hasta ${n}:\n\n`;
     
     // 1️⃣ INICIALIZACIÓN
     let i = 1;
     let contador = 0;
     
     // 2️⃣ CONDICIÓN
     while (i <= n) {
         // 3️⃣ PROCESOS
         if (i % x === 0) {
             resultado += `${i}\n`;
             contador++;
         }
         // 4️⃣ ACTUALIZACIÓN
         i++;
     }
     
     resultado += `\nTotal múltiplos de ${x}: ${contador}`;
     return resultado;
 }
 
 function mostrarResultado() {
     document.getElementById('resultado5').textContent = ejercicio5();
 }
 