function botoningresar() {
     const n = parseInt(document.getElementById("input-box1").value);
     let mensaje = document.getElementById("resultado");
     let suma = 0;
     for (let i = 1; i <= n; i++) {
          if (n % i === 0) {
               suma += i;
               mensaje.innerHTML += `${i} <br>`;
          }
     }
      // Limpiar inputs después de mostrar resultado
      document.getElementById('input-box1').value = '';
      // Opcional: poner foco en el primer input
      document.getElementById('input-box1').focus();
}    