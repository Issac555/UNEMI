function contarImpares() {
    let texto = document.getElementById("entrada").value;
    // convertir el texto a un arreglo de numeros, usando la coma para separar
    let arreglo = texto.split(",").map(Number);
    // verificar que todos los elementos sean numeros validos
    if (arreglo.some(isNaN)) {
        document.getElementById("resultado").innerText = "Ingrese solo numeros separados por , (coma).";
        return;
    }
    // contamos cuantos son impares
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 !== 0) {
            contador++;
        }
    }
    // mostar el resultado
    document.getElementById("resultado").innerHTML = `cantidad de numeros impares es: <strong>${contador}</strong>`;
}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = "";
    document.getElementById("resultado").innerText = "";
}

// volver al menu
function volverMenu(){
    
}