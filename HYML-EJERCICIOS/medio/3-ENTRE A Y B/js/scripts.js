function ejercicio8() {
     const a = parseInt(document.getElementById('ex8_a').value);
     const b = parseInt(document.getElementById('ex8_b').value);
   
     let resultado = `Números entre ${a} y ${b}:\n\n`;
   
     // 1️⃣ INICIALIZACIÓN
     let i = a;
   
     // 2️⃣ CONDICIÓN
     while (i <= b) {
       // 3️⃣ PROCESOS
       resultado += `${i}\n`;
   
       // 4️⃣ ACTUALIZACIÓN
       i++;
     }
   
     return resultado;
   }
   
   function mostrarNumeros() {
     document.getElementById('resultado8').textContent = ejercicio8();
   }
   