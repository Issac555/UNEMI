function sumarArreglos() {
    //obtener valores de los dos arreglos
    let texto1 = document.getElementById("entrada1").value;
    let texto2 = document.getElementById("entrada2").value; 
     // covertir los arreglos numericos
    let arreglo1 = texto1.split(",").map(Number);
    let arreglo2 = texto2.split(",").map(Number);
    
     // verificar si hay valores no numericos
    if (arreglo1.some(isNaN) || arreglo2.some(isNaN)) {
        document.getElementById("resultado").innerText = "Ingresar los numeros validos de los dos arreglos.";
        return;
    }
     // validar que ambos arreglos tengan la misma cantidad de numeros
    if (arreglo1.length !== arreglo2.length) {
        document.getElementById("resultado").innerText = "Ambos arreglos deben tener la misma cantidad de numeros.";
        return;
    }
     // sumar los dos arreglos
    let arregloSuma = [];
    for (let i = 0; i < arreglo1.length; i++) {
        arregloSuma.push(arreglo1[i] + arreglo2[i]);
    }
     // mostrar el resultado
    document.getElementById("resultado").innerText = "Resultado de la suma: " + arregloSuma.join(", ");
}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada1").value = " ";
    document.getElementById("entrada2").value = " ";
    document.getElementById("resultado").innerText = " ";
}

// volver al menu
function volverMenu(){
    
}