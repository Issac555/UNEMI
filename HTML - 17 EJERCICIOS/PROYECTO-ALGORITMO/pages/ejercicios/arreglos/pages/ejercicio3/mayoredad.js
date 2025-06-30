function contarMayoresEdad() {
    // obtener el texto que escribio en el input
    let texto = document.getElementById("entrada").value;
    // separar el texto por comas y convertir en arreglo
    let edades = texto.split(",").map(Number);
    //ej: "15,17,18"-> [15, 17,18]
    // verificar que todo los numeros sean validos
    if(edades.some(isNaN)) {
        //si hay algun error mostrar el mensaje
        document.getElementById("resultado").innerhtml= "Ingrese solo numeros separado por , (coma).";
        return;
    }
    // inicializar contador desde 0
    let contador =0;
   //analizamos cada edad en el arreglo
    for(let i = 0; i < edades.length; i ++) {
     // si la edad es mayor o igual a 18, incrementar el contador
     if(edades[i]>= 18) {
        contador++;
     }
    }
    // mostar el resultado
    document.getElementById("resultado").innerHTML = `cantidad de mayores de edad es: <strong>${contador}</strong>`;
}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = "";
    document.getElementById("resultado").innerText = "";
}

// volver al menu
function volverMenu(){
    
}