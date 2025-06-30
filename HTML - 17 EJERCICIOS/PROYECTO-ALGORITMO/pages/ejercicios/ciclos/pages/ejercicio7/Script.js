function generarFibonacci() {
    const n = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(n) || n <= 0) {
        resultado.innerHTML = "Por favor ingresa un número mayor que 0.";
        return;
    }

    let a = 0;       // primer término
    let b = 1;       // segundo término
    let contador = 1;

    resultado.innerHTML += a + "<br>";

    while (contador < n) {
        resultado.innerHTML += b + "<br>";
        let temp = a + b;
        a = b;
        b = temp;
        contador++;
    }
}
