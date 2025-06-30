function unirFrase() {
    //obtener el valor del input
    let texto = document.getElementById("entrada").value;
    //convertir el texto en un arreglo
    let palabras = texto.split(",");
    //verificar si el arreglo tiene al menis una sola palabra
    if (palabras.length === 0 || texto === "") { 
        document.getElementById("resultado").innertext = "Ingrese palabras.";
        return;
    }
    //unir las palabras en una sola frase
    let frase = palabras.join(" ");
    //mostrar frase final
    document.getElementById("resultado").innerText = "Frase unida. " + frase;

}
// funcion para limpiar campos
function limpiar() {
    document.getElementById("entrada").value = " ";
    document.getElementById("resultado").innerText = " ";
}

// volver al menu
function volverMenu(){
    
}