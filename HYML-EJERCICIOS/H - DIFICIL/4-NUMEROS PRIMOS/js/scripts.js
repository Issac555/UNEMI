function botoningresar() {
     const n = parseInt(document.getElementById("n").value);
     let mensaje = document.getElementById("resultado");

     if (isNaN(n)) {
          mensaje.innerHTML = "Por favor, ingresa un número válido.";
          return;
     }

     if (n <= 1) {
          mensaje.innerHTML = `${n}, no es un número primo.`;
          return;
     }

     for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
               mensaje.innerHTML = `${n}, no es un número primo.`;
               return;
          }
     }

     mensaje.innerHTML = `${n}, es un número primo.`;
}
