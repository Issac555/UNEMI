function ejercicio7() {
     const numero = parseInt(document.getElementById('ex7_num').value);
     const inicio = parseInt(document.getElementById('ex7_inicio').value);
     const fin = parseInt(document.getElementById('ex7_fin').value);
   
     let resultado = `Tabla del ${numero} (desde ${inicio} hasta ${fin}):\n\n`;
   
     // 1️⃣ INICIALIZACIÓN
     let i = inicio;
   
     // 2️⃣ CONDICIÓN
     while (i <= fin) {
       // 3️⃣ PROCESOS
       resultado += `${numero} x ${i} = ${numero * i}\n`;
   
       // 4️⃣ ACTUALIZACIÓN
       i++;
     }
   
     return resultado;
   }
   
   function mostrarTablaMultiplicar() {
     document.getElementById('resultado7').textContent = ejercicio7();
   }
   