function calcularSuma() {
    const n = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultado anterior

    if (isNaN(n) || n <= 0) {
        resultado.innerHTML = "Por favor ingresa un número natural mayor que 0.";
        return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    resultado.innerHTML = `La suma de los primeros ${n} números naturales es: ${suma}`;
}
