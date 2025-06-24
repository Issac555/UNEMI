const resultado = document.getElementById("resultado");

  function ejercicio1() {
    const num = parseInt(document.getElementById("input1").value);
    if (isNaN(num)) return resultado.innerText = "⚠️ Ingresa un número válido";
    let divisores = [];
    for (let i = 1; i <= num; i++) if (num % i === 0) divisores.push(i);
    resultado.innerText = `Divisores de ${num}: ${divisores.join(", ")}`;
  }

  function ejercicio2() {
    let arr = document.getElementById("input2").value.split(",").map(s => s.trim()).filter(s => s !== "");
    const numAdd = parseInt(document.getElementById("input2add").value);
    if (numAdd && !isNaN(numAdd)) {
      arr.push(numAdd);
    }
    resultado.innerText = `Resultado: [${arr.join(", ")}]`;
  }

  function ejercicio3() {
    let inputStr = document.getElementById("input3a").value;
    let arr = inputStr.split(",").map(s => s.trim()).filter(s => s !== "");
    resultado.innerText = `Arreglo asignado manualmente: [${arr.join(", ")}]`;
  }

  function ejercicio4() {
    const texto = document.getElementById("input4").value;
    resultado.innerText = texto || "Ingresa algún texto";
  }

  function ejercicio5() {
    const palabra = document.getElementById("input5").value;
    resultado.innerText = palabra ? `La palabra "${palabra}" tiene ${palabra.length} caracteres.` : "Ingresa una palabra";
  }

  function ejercicio6() {
    const nombre = document.getElementById("input6").value;
    if (!nombre || nombre.length < 4) return resultado.innerText = "Ingresa un nombre con al menos 4 letras";
    resultado.innerText = `Letras: ${nombre[0]}, ${nombre[1]}, ${nombre[2]}, ${nombre[3]}`;
  }

  function ejercicio7() {
    const palabra = document.getElementById("input7").value;
    if (!palabra) return resultado.innerText = "Ingresa una palabra";
    const letras = palabra.split("");
    resultado.innerText = `Letras separadas: ${letras.join(", ")}`;
  }

  function ejercicio8() {
    const cadena = document.getElementById("input8").value;
    if (!cadena) return resultado.innerText = "Ingresa la cadena de números separados por ;";
    const arreglo = cadena.split(";").map(Number).filter(n => !isNaN(n));
    resultado.innerText = `Arreglo numérico: [${arreglo.join(", ")}]`;
  }

  function ejercicio9() {
    const frutas = document.getElementById("input9").value.split(",").map(s => s.trim()).filter(s => s !== "");
    if (frutas.length === 0) return resultado.innerText = "Ingresa al menos una fruta";
    let salida = "Frutas:\n";
    for (let i = 0; i < frutas.length; i++) {
      salida += frutas[i] + "\n";
    }
    resultado.innerText = salida;
  }

  function ejercicio10() {
    const frutas = document.getElementById("input10").value.split(",").map(s => s.trim()).filter(s => s !== "");
    if (frutas.length === 0) return resultado.innerText = "Ingresa al menos una fruta";
    let salida = "Frutas (while):\n";
    let i = 0;
    while (i < frutas.length) {
      salida += frutas[i] + "\n";
      i++;
    }
    resultado.innerText = salida;
  }

  function ejercicio11() {
    const palabra = document.getElementById("input11").value;
    if (!palabra) return resultado.innerText = "Ingresa una palabra";
    let salida = "Letras:\n";
    for (let i = 0; i < palabra.length; i++) {
      salida += palabra[i] + "\n";
    }
    resultado.innerText = salida;
  }

  function ejercicio12() {
    const palabra = document.getElementById("input12").value;
    if (!palabra) return resultado.innerText = "Ingresa una palabra";
    let salida = "Letras (while):\n";
    let j = 0;
    while (j < palabra.length) {
      salida += palabra[j] + "\n";
      j++;
    }
    resultado.innerText = salida;
  }

  function ejercicio13() {
    const palabra = document.getElementById("input13").value.toLowerCase();
    if (!palabra) return resultado.innerText = "Ingresa una palabra";
    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
      if ("aeiou".includes(palabra[i])) vocales++;
    }
    resultado.innerText = `Número de vocales en "${palabra}": ${vocales}`;
  }

  function ejercicio14() {
    const palabra1 = document.getElementById("input14a").value;
    const palabra2 = document.getElementById("input14b").value;
    if (!palabra1 || !palabra2) return resultado.innerText = "Ingresa ambas palabras";
    let salida = `Comparando "${palabra1}" y "${palabra2}":\n`;
    const minLen = Math.min(palabra1.length, palabra2.length);
    for (let i = 0; i < minLen; i++) {
      const iguales = palabra1[i] === palabra2[i] ? "✔️" : "❌";
      salida += `Posición ${i}: ${palabra1[i]} vs ${palabra2[i]} → ${iguales}\n`;
    }
    resultado.innerText = salida;
  }

  function ejercicio15() {
    const inputStr = document.getElementById("input15").value;
    if (!inputStr) return resultado.innerText = "Ingresa números separados por coma";
    const numeros = inputStr.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    if (numeros.length === 0) return resultado.innerText = "No hay números válidos";
    let salida = "";
    for (let num of numeros) {
      let divisores = [];
      for (let d = 1; d <= num; d++) {
        if (num % d === 0) divisores.push(d);
      }
      salida += `Divisores de ${num}: ${divisores.join(", ")}\n`;
    }
    resultado.innerText = salida;
  }

  function ejercicio16() {
    const inputStr = document.getElementById("input16").value;
    if (!inputStr) return resultado.innerText = "Ingresa números separados por coma";
    const numeros = inputStr.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    if (numeros.length === 0) return resultado.innerText = "No hay números válidos";
    let salida = "";
    for (let num of numeros) {
      let suma = 0;
      for (let d = 1; d < num; d++) {
        if (num % d === 0) suma += d;
      }
      salida += `Suma de divisores de ${num}: ${suma}\n`;
    }
    resultado.innerText = salida;
  }

  function ejercicio17() {
    const inputStr = document.getElementById("input17").value;
    if (!inputStr) return resultado.innerText = "Ingresa números separados por coma";
    const numeros = inputStr.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    if (numeros.length === 0) return resultado.innerText = "No hay números válidos";
    let salida = "";
    for (let num of numeros) {
      let suma = 0;
      for (let d = 1; d < num; d++) {
        if (num % d === 0) suma += d;
      }
      salida += (suma === num)
        ? `${num} es un número perfecto\n`
        : `${num} NO es un número perfecto\n`;
    }
    resultado.innerText = salida;
  }