function mostrarFactoriales() {
    let texto = document.getElementById("entrada").value;
    let numeros = texto.split(",").map(Number);
    //validar que sean todos numeros
    if ( numeros.some(isNaN)){
        document.getElementById("resultado").innerText = "Ingrese un numero.";
        return;
    }
    //cadena para mostrar los resultados
    let resultadoFinal = "";
    //calcular el factorial de cada numero
    for(let i = 0; i < numeros.length; i++){
        let n = numeros[i];
        let factorial = 1;
        //factorial de 0 es 1 por definicion
        for (let j = 1; j <= n; j++) {
            factorial *= j;
        }
    resultadoFinal += "El factorial de " + n + ": " + factorial + "\n";
    }
    // mostrar resultados
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