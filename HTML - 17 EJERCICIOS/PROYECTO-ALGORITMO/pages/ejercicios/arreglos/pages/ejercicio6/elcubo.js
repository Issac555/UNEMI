function obtenerCubos() {
//obtener el texto ingresado por el usuario
let texto = document.getElementById("entrada").value;
//convertir el numero en arreglo
let numeros = texto.split(",").map(Number);
//verificar si el arreglo tiene numero
if (numeros.some(isNaN)) {
    document.getElementById("resultado").innertext = "Ingrese solo numeros.";
    return;
}
//calcular el cubo de cada numero (n^3)
let cubos = [];
for (let i = 0; i < numeros.length; i++) {
cubos.push(numeros[i] * numeros[i] * numeros[i]);
}
//mostar el resultado
document.getElementById("resultado").innerText = "Los cubos son: " + cubos.join(" , ");

}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = " ";
    document.getElementById("resultado").innerText = " ";
}

// volver al menu
function volverMenu(){
    
}
