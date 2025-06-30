function mostrarPares() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar anteriores

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            resultado.innerHTML += i + "<br>";
        }
    }
}
