// 1. Contar caracteres
function contarCaracteres(palabra) {
  return "La palabra '" + palabra + "' tiene " + palabra.length + " letras.";
}
console.log(contarCaracteres("Manzana"));

// 2. Contar apariciones de letra
function contarLetra(texto, letra) {
  let count = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === letra.toLowerCase()) {
      count++;
    }
  }
  return "La letra '" + letra + "' aparece " + count + " veces.";
}
console.log(contarLetra("Me encanta el café", "e"));

// 3. Invertir texto
function invertirTexto(texto) {
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;
}
console.log(invertirTexto("Quito"));

// 4. Comparar longitudes
function compararLongitudes(cad1, cad2) {
  if (cad1.length > cad2.length) {
    return cad1 + " tiene más letras.";
  } else if (cad2.length > cad1.length) {
    return cad2 + " tiene más letras.";
  } else {
    return "Ambos tienen la misma cantidad de letras.";
  }
}
console.log(compararLongitudes("García", "Pérez"));

// 5. Iniciales
function iniciales(nombre) {
  let partes = nombre.split(" ");
  let resultado = "";
  for (let i = 0; i < partes.length; i++) {
    resultado += partes[i][0].toUpperCase() + ".";
  }
  return resultado;
}
console.log(iniciales("Ana María Torres"));

// 6. Reemplazar caracteres
function reemplazarCaracteres(texto, letra) {
  let nuevo = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === letra.toLowerCase()) {
      nuevo += "#";
    } else {
      nuevo += texto[i];
    }
  }
  return nuevo;
}
console.log(reemplazarCaracteres("Programador", "a"));

// 7. Palíndromo
function esPalindromo(palabra) {
  let invertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }
  if (palabra === invertida) {
    return "La palabra '" + palabra + "' es un palíndromo.";
  } else {
    return "La palabra '" + palabra + "' no es un palíndromo.";
  }
}
console.log(esPalindromo("radar"));

// 8. Frase más larga
function mayorFrase(f1, f2) {
  if (f1.length > f2.length) {
    return f1 + " tiene más caracteres.";
  } else if (f2.length > f1.length) {
    return f2 + " tiene más caracteres.";
  } else {
    return "Ambas frases tienen la misma cantidad.";
  }
}
console.log(mayorFrase("Me gusta el fútbol", "Prefiero el baloncesto"));

// 9. Contar caracter específico
console.log(contarLetra("Examen de programación", "m"));

// 10. Dividir oración
function dividirOracion(oracion) {
  let palabras = oracion.split(" ");
  let resultado = "";
  for (let i = 0; i < palabras.length; i++) {
    resultado += palabras[i] + "\n";
  }
  return resultado;
}
console.log(dividirOracion("Me gusta aprender programación"));


// 1. Contar caracteres en varias palabras
function contarCaracteresArreglo(palabras) {
  for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i] + " tiene " + palabras[i].length + " letras.");
  }
}
contarCaracteresArreglo(["Manzana", "Pera", "Sandía"]);

// 2. Contar apariciones de una letra en frases
function contarLetraArreglo(letra, frases) {
  for (let i = 0; i < frases.length; i++) {
    let count = 0;
    for (let j = 0; j < frases[i].length; j++) {
      if (frases[i][j].toLowerCase() === letra.toLowerCase()) {
        count++;
      }
    }
    console.log("En frase " + (i + 1) + ", '" + letra + "' aparece " + count + " veces.");
  }
}
contarLetraArreglo("e", ["Me encanta el café", "Estudio programación"]);

// 3. Invertir varios textos
function invertirArreglo(palabras) {
  for (let i = 0; i < palabras.length; i++) {
    let invertida = "";
    for (let j = palabras[i].length - 1; j >= 0; j--) {
      invertida += palabras[i][j];
    }
    console.log(palabras[i] + " → " + invertida);
  }
}
invertirArreglo(["Quito", "Lima"]);

// 4. Comparar pares de palabras
function compararPares(pares) {
  for (let i = 0; i < pares.length; i++) {
    console.log(compararLongitudes(pares[i][0], pares[i][1]));
  }
}
compararPares([["García", "Pérez"], ["Lopez", "Ramirez"]]);

// 5. Iniciales de varios nombres
function inicialesArreglo(nombres) {
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i] + " → " + iniciales(nombres[i]));
  }
}
inicialesArreglo(["Ana María Torres", "Juan Carlos Pérez"]);

// 6. Reemplazar caracteres en varios textos
function reemplazarCaracteresArreglo(palabras, letra) {
  for (let i = 0; i < palabras.length; i++) {
    console.log(reemplazarCaracteres(palabras[i], letra));
  }
}
reemplazarCaracteresArreglo(["Programador", "Motor"], "o");

// 7. Palíndromos en arreglo
function palindromosArreglo(palabras) {
  for (let i = 0; i < palabras.length; i++) {
    console.log(esPalindromo(palabras[i]));
  }
}
palindromosArreglo(["radar", "oso", "casa"]);

// 8. Frases con más caracteres en pares
compararPares([["Me gusta el fútbol", "Prefiero el baloncesto"], ["Hola", "Adiós"]]);

// 9. Contar caracteres en pares
function contarCaracterArreglo(pares) {
  for (let i = 0; i < pares.length; i++) {
    console.log(contarLetra(pares[i][0], pares[i][1]));
  }
}
contarCaracterArreglo([["Examen de programación", "m"], ["Hola mundo", "o"]]);

// 10. Dividir varias oraciones
function dividirOraciones(oraciones) {
  for (let i = 0; i < oraciones.length; i++) {
    let palabras = oraciones[i].split(" ");
    let resultado = "Oración " + (i + 1) + ": ";
    for (let j = 0; j < palabras.length; j++) {
      resultado += palabras[j];
      if (j < palabras.length - 1) {
        resultado += ", ";
      }
    }
    console.log(resultado);
  }
}
dividirOraciones(["Me gusta aprender programación", "Hola mundo"]);



// 1. Sumar números del 1 al n
function sumarHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return "La suma de 1 hasta " + n + " es " + suma;
}
console.log(sumarHastaN(10));

// 2. Factorial de un número
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return "El factorial de " + n + " es " + resultado;
}
console.log(factorial(5));

// 3. Tabla de multiplicar
function tablaMultiplicar(num) {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += num + " x " + i + " = " + (num * i) + "\n";
  }
  return resultado;
}
console.log(tablaMultiplicar(7));

// 4. Números pares hasta n
function paresHastaN(n) {
  let resultado = "";
  for (let i = 2; i <= n; i += 2) {
    resultado += i + " ";
  }
  return resultado;
}
console.log(paresHastaN(20));

// 5. Contar dígitos de un número
function contarDigitos(num) {
  let texto = num.toString();
  return "El número " + num + " tiene " + texto.length + " dígitos.";
}
console.log(contarDigitos(12345));

// 6. Invertir número
function invertirNumero(num) {
  let texto = num.toString();
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return "Número invertido: " + invertido;
}
console.log(invertirNumero(12345));

// 7. Verificar número primo
function esPrimo(num) {
  if (num < 2) return num + " no es primo.";
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return num + " no es primo.";
    }
  }
  return num + " es primo.";
}
console.log(esPrimo(17));

// 8. Sumar dígitos
function sumarDigitos(num) {
  let texto = num.toString();
  let suma = 0;
  for (let i = 0; i < texto.length; i++) {
    suma += parseInt(texto[i]);
  }
  return "La suma de los dígitos de " + num + " es " + suma;
}
console.log(sumarDigitos(1234));

// 9. Potencia con multiplicaciones
function potencia(base, exponente) {
  let resultado = 1;
  for (let i = 1; i <= exponente; i++) {
    resultado *= base;
  }
  return base + "^" + exponente + " = " + resultado;
}
console.log(potencia(2, 8));

// 10. Serie Fibonacci hasta n términos
function fibonacci(n) {
  let a = 0, b = 1, serie = a + " " + b;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    serie += " " + c;
    a = b;
    b = c;
  }
  return "Serie Fibonacci (" + n + " términos): " + serie;
}
console.log(fibonacci(10));


// 1. Sumar todos los números en un arreglo
function sumarArreglo(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return "La suma es " + suma;
}
console.log(sumarArreglo([1, 2, 3, 4, 5]));

// 2. Encontrar el mayor
function mayorNumero(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return "El mayor es " + mayor;
}
console.log(mayorNumero([10, 25, 3, 99, 56]));

// 3. Encontrar el menor
function menorNumero(numeros) {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return "El menor es " + menor;
}
console.log(menorNumero([10, 25, 3, 99, 56]));

// 4. Promedio de los números
function promedioArreglo(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return "El promedio es " + (suma / numeros.length);
}
console.log(promedioArreglo([4, 8, 15, 16, 23, 42]));

// 5. Contar pares en arreglo
function contarPares(numeros) {
  let count = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      count++;
    }
  }
  return "Hay " + count + " números pares.";
}
console.log(contarPares([1, 2, 3, 4, 5, 6]));

// 6. Invertir arreglo
function invertirArreglo(numeros) {
  let invertido = [];
  for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
  }
  return invertido;
}
console.log(invertirArreglo([1, 2, 3, 4, 5]));

// 7. Buscar número en arreglo
function buscarNumero(numeros, objetivo) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === objetivo) {
      return "El número " + objetivo + " se encuentra en la posición " + i;
    }
  }
  return "El número " + objetivo + " no está en el arreglo.";
}
console.log(buscarNumero([10, 20, 30, 40], 30));

// 8. Ordenar arreglo (burbuja)
function ordenarArreglo(numeros) {
  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }
  return numeros;
}
console.log(ordenarArreglo([5, 3, 8, 1, 2]));

// 9. Eliminar duplicados
function eliminarDuplicados(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    let repetido = false;
    for (let j = 0; j < resultado.length; j++) {
      if (numeros[i] === resultado[j]) {
        repetido = true;
        break;
      }
    }
    if (!repetido) {
      resultado.push(numeros[i]);
    }
  }
  return resultado;
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));

// 10. Sumar posiciones pares
function sumarPosicionesPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
      suma += numeros[i];
    }
  }
  return "La suma de posiciones pares es " + suma;
}
console.log(sumarPosicionesPares([10, 20, 30, 40, 50]));
