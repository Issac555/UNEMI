function funcionpares() {
     const n = parseInt(document.getElementById("n").value);
     const mensaje = document.getElementById("resultado");

     if (isNaN(n)) {
          mensaje.innerHTML = `Ingresa los espacios`
          return
     }
     for (let i = 0; i <= n; i++) {
          if (i % 2 === 0) {
               mensaje.innerHTML += `${i} (numero par) <br>`
          }
     }
}