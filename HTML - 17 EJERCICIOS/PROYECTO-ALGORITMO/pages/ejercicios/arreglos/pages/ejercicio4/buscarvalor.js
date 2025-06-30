function BuscarNumero() {
    // obtener el valor del input
    let text = document.getElementById("entrada").value;
    // convertir el texto en un arreglo de numeros
    let arreglo = text.split(",").map(Number);
    // obtener el numero a buscar
    let numero = Number(document.getElementById("numeroBuscar").value);
    // validar si el numero esta en el arreglo
    if (arreglo.some(isNaN) || isNaN(numero)) {
        document.getElementById("resultado").innerText= "Por favor, ingrese numero validos.";
    return;
 }
// vefiricar si el numero esta en el arreglo
let encontrado = false;
for (let i =0; i < arreglo.length; i++) {
    if(arreglo[i] === numero) {
        encontrado = true;
        break; // salir del bluce una vez que se encuentre el numero
    }
 } // cierre del bulce for
if (encontrado) {
    document.getElementById("resultado").innerText = "El numero " + numero +  "Si existe en el arreglo.";
 } else {
    document.getElementById("resultado").innerText = "El numero " + numero +  "No existe en el arreglo.";
 }

}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = "";
    document.getElementById("numeroBuscar").value = "";
    document.getElementById("resultado").innerText = "";
}

// volver al menu
function volverMenu(){
    
}