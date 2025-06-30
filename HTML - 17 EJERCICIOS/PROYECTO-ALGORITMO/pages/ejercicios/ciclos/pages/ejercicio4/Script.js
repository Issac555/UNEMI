function calcularFactorial() {
    const n = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultados anteriores

    if (isNaN(n) || n < 0) {
        resultado.innerHTML = "Por favor ingresa un número entero mayor o igual a 0.";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    resultado.innerHTML = `El factorial de ${n} es: ${factorial}`;
}
