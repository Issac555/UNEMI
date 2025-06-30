// calculadora.js
function calcularPromedio() {
    let entrada = document.getElementById("entrada").value;
    // convertir la entrada a un arreglo de numeros, usando el guion como separador
    let arreglo = entrada.split(",").map(Number);
    
    // verificar que sean exactamente cinco numeros y que todos sean válidos
    if (arreglo.length !== 5 || arreglo.some(isNaN)) {
        document.getElementById("resultado").innerText = "Ingrese exactamente 5 números separados por , (coma).";
        return;
    }
    
    // calcular la suma de los numeros
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    
    // calcular el promedio y mostrarlo
    let promedio = suma / arreglo.length;
    document.getElementById("resultado").innerHTML = `El promedio de los números es: ${promedio}`;
}

// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = "";
    document.getElementById("resultado").innerText = "";
}

// volver al menu
function volverMenu() {

}