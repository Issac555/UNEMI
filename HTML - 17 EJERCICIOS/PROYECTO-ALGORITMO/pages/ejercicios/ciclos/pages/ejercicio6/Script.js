function mostrarDivisores() {
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar anterior

    if (isNaN(num) || num <= 0) {
        resultado.innerHTML = "Por favor ingresa un número mayor que 0.";
        return;
    }

    let i = 1;

    while (i <= num) {
        if (num % i === 0) {
            resultado.innerHTML += i + "<br>";
        }
        i++;
    }
}
