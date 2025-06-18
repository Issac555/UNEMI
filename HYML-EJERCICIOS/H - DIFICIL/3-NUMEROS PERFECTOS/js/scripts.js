function botoningresar() {
     const n = parseInt(document.getElementById("n").value);
     let mensaje = document.getElementById("resultado");
     let suma = 0;
     for (let i = 1; i < n; i++) {

          if (n % i === 0) {
               suma += i;
          }
     }

     if (suma === n && n !== 0) {
          mensaje.innerHTML = `${n}, Si es un número perfecto`;
     } else {
          mensaje.innerHTML = `${n}, No es un numero perfecto`;
     }
     
}