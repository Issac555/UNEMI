
document.getElementById("btn-ingresar").addEventListener("click", function () {
    const numero = parseInt(document.getElementById("input-box1").value);
    const mensaje = document.getElementById("resultado");

    if (isNaN(numero)) {
        mensaje.innerHTML = `Ingresa los espacios disponibles`;
        return;
    }

    let dividir = [];   
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            dividir.push(i);
        }
    }

    let respuesta = `Divisores de ${numero}: ${dividir.join(', ')}<br>`;
    respuesta += `Total de divisores ${dividir.length}`;
    mensaje.innerHTML = respuesta;
});
``