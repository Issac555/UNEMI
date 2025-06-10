function botoningresar() {
     const mensaje = document.getElementById("n").value;
     const c = parseInt(document.getElementById("c").value);
     const resultado = document.getElementById("resultado-respuesta");
 
     resultado.innerHTML = ""; // limpiar antes de mostrar

     for (let i = 1; i <= c; i++){
          resultado.innerHTML+= `${mensaje} - ${i} <br>`
     }
 }
 
 function limpiar() {
     document.getElementById("n").value = "";
     document.getElementById("c").value = "";
     document.getElementById("resultado-respuesta").innerHTML = "";
 }
 