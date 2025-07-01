  let suma = 0;

  function pedirNumero() {
    const input = document.getElementById("numero");
    let num = parseFloat(input.value);
    input.value = "";
    input.focus();


    if (isNaN(num)) return;

    if (num < 0) {
      document.querySelector("button[type='submit']").disabled = true;
      document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> La suma total es: ${suma}`;
    } else {
      let i = 0;
      while (i < 1) {
        suma += num;
        i++;
      }
      document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> Número agregado. Suma actual: ${suma}`;
    }
  }
