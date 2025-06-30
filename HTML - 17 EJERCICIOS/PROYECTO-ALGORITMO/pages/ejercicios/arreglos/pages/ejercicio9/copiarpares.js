function copiarPares() {
    let texto = document.getElementById("entrada").value;
    let numeros = texto.split(",").map(Number);
    //validar si hay datos incorrectos
    if (numeros.some(isNaN)) {
        document.getElementById("resultado").innerText = "Ingresar numeros validos.";
        return;
    }
    //crear un nuevo arreglo para los pares
    let pares = [];
    // recorrer el arreglo original y copiar los pares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);//añadir el numero par ala arreglo
        }
    }
    //mostrar los pares encontrados
    document.getElementById("resultado").innerText = "Numeros pares: " + pares.join(", ");
}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = " ";
    document.getElementById("resultado").innerText = " ";
}

// volver al menu
function volverMenu(){
    
}