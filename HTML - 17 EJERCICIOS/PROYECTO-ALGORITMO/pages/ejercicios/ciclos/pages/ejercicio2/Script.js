function mostrarTabla() {
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultados previos

    if (isNaN(num)) {
        resultado.innerHTML = "Por favor ingresa un número válido.";
        return;
    }

    for (let i = 1; i <= 12; i++) {
        resultado.innerHTML += `${num} x ${i} = ${num * i} <br>`;
    }
}
