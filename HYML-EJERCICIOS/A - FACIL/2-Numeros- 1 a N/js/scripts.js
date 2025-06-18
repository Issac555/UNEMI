function botoningresar() {
     const n = parseInt(document.getElementById("n").value);
     let mensaje = document.getElementById("resultado");

     for (let i = 1; i <= n; i++){
          mensaje.innerHTML+= `${n} - ${i} <br>`
     }
     
}