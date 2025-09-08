let terminado = false; // Bandera para evitar que se ejecute más de una vez

function temperaturass() {
    // Obtenemos el texto del input, lo dividimos por comas,
    // quitamos espacios y eliminamos entradas vacías
    let grados = document.getElementById("notas").value
        .split(",") // separa por comas 
        .map(s => s.trim()) // quita los espacios
        .filter(s => s !== ""); // elimina las entradas vacias

    // Accedemos a los elementos del HTML donde vamos a mostrar los resultados
    const respuesta = document.getElementById("respuesta");
    const lista = document.getElementById("lista");

    let temperaturas = []; // Aquí guardamos los números como arreglo
    let calidad = "";      // Aquí guardamos el texto de la clasificación

    // .length nos dice cuántos elementos hay en el arreglo "grados"
    // Si no hay ninguno, o ya analizamos antes, salimos de la función
    if (grados.length === 0 || terminado) return;

    // Recorremos todos los valores escritos por el usuario
    for (let i = 0; i < grados.length; i++) {
        let n = parseFloat(grados[i]);  // Convertimos cada texto a número

        // .push() agrega el número al final del arreglo temperaturas
        temperaturas.push(n);

        // Clasificamos el número en fría, templada o caliente
        if (n <= 15) {
            calidad = "Está fría";
        } else if (n > 15 && n < 30) {
            calidad = "Está templada";
        } else if (n >= 30) {
            calidad = "Es caliente";
        }

        // lista.value += agrega una nueva línea al contenido del textarea
        // No borra lo anterior, solo añade al final
        lista.value += n + " → " + calidad + "\n";
    }

    // Mostramos mensaje final en el div de resultado
    respuesta.innerHTML = "Temperaturas analizadas correctamente.";

    // Marcamos que ya se ejecutó, para que no se repita si vuelven a dar clic
    // Mostramos también en consola para entender cómo funciona
    console.log("📦 Temperaturas guardadas con .push():", temperaturas);
    console.log("📏 Total de temperaturas (.length):", temperaturas.length);
    console.log("📝 Texto final del textarea (.value):\n" + lista.value);
}
