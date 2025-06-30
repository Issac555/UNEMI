function mostrarTablas() {
    let texto = document.getElementById("entrada").value;
    // convertir eñ arrglor a numero
    let numeros = texto.split(",").map(Number);
    //validar que todos sean arreglos
    if (numeros.some(isNaN)) {
        document.getElementById("resultado").innerText = "Ingresar los numeros validos.";
        return;
    }
    // crear una cadena donde se guardara las tablas de multiplicar
    let resultadoFinal = "";
    //para cada numero del arreglo
    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i];
        resultadoFinal += "Tabla de " + n + ":\n";
        // generar la tabla de multiplicar del 1 al 10
        for(let j = 1; j <= 10; j++) {
            resultadoFinal += n + " x " + j + " = " + (n * j) + "\n";
        }
        // espacio entre tablas
        resultadoFinal += "\n";
    }
    
    // mostar todas las tablas de multiplicar en el<pre>
    document.getElementById("resultado").innerText = resultadoFinal;
}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = " ";
    document.getElementById("resultado").innerText = " ";
}

// volver al menu
function volverMenu(){
    
}