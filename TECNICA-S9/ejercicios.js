/* ============================================================
   6) Contar cuántos dígitos hay en una frase
   ------------------------------------------------------------
   BOSQUEJO:
   1. Verificar si cada carácter está entre '0' y '9'.
============================================================ */
function contarDigitos() {
  let frase = "Tengo 2 perros y 3 gatos en 2025";
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= "0" && frase[i] <= "9") {
      contador++;
    }
  }

  console.log("Cantidad de dígitos:", contador);
}
contarDigitos();


/* ============================================================
   7) Contar signos de puntuación
   ------------------------------------------------------------
   BOSQUEJO:
   1. Revisar si el carácter pertenece al grupo de signos.
============================================================ */
function contarSignosPuntuacion() {
  let frase = "¡Hola! ¿Cómo estás? Bien, gracias.";
  let signos = ".,;:?!¡¿";
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (signos.includes(frase[i])) {
      contador++;
    }
  }

  console.log("Cantidad de signos de puntuación:", contador);
}
contarSignosPuntuacion();


/* ============================================================
   11) Saber cuántas palabras contienen más de 3 vocales
   ------------------------------------------------------------
   BOSQUEJO:
   1. Contar vocales dentro de cada palabra.
   2. Cuando se llegue a un espacio, revisar si la palabra tenía más de 3 vocales.
   3. Contar con la misma regla de palabras: if frase[i]==" " && frase[i+1]!=" " contadorPalabras++.
============================================================ */
function palabrasConMasDeTresVocales() {
  let frase = "La programacion educativa estimula la creatividad";
  let palabrasConMasVocales = 0;
  let contadorVocales = 0;
  let contadorPalabras = 1;

  for (let i = 0; i < frase.length; i++) {
    let c = frase[i].toLowerCase();

    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      contadorVocales++;
    }

    // Fin de palabra
    if (frase[i] === " " || i === frase.length - 1) {
      if (contadorVocales > 3) {
        palabrasConMasVocales++;
      }
      contadorVocales = 0;

      if (frase[i] === " " && frase[i + 1] !== " ") {
        contadorPalabras++;
      }
    }
  }

  console.log("Total de palabras:", contadorPalabras);
  console.log("Palabras con más de 3 vocales:", palabrasConMasVocales);
}
palabrasConMasDeTresVocales();



/* ============================================================
   1) Verificar si un número es PAR o IMPAR
   ------------------------------------------------------------
   Bosquejo:
   - Un número es PAR si al dividirlo entre 2 el residuo es 0.
   - Si no, es IMPAR.
   Variables: numero, residuo
   Caso de prueba: 7 → impar, 8 → par
============================================================ */
function verificarParImpar() {
  // let numero= parseInt(prompt("Ingrese un número:"));
  numero = 7; // Cambiar para probar
  if (numero % 2 === 0) {
    console.log(numero + " es par");
  } else {
    console.log(numero + " es impar");
  }
}
//verificarParImpar();

/* ============================================================
   2) Mostrar un número N veces
   ------------------------------------------------------------
   Bosquejo:
   - Fijar el número y la cantidad de repeticiones.
   - Usar un for desde 1 hasta N para imprimirlo.
   Variables: numero, veces, i
============================================================ */
function repetirNumero() {
  let numero = 5;
  let veces = 4;
  for (let i = 1; i <= veces; i++) {
    console.log(numero);
  }
}

//repetirNumero();

/* ============================================================
   3) Mostrar los primeros N números naturales
   ------------------------------------------------------------
   Bosquejo:
   - Imprimir los números del 1 al N usando un for. 1 2 3 4 5
  1
  2
  3
  4
  5 n


   ============================================================ */
function numerosNaturales() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
//numerosNaturales();

/* ============================================================
   4) Serie de Fibonacci
   ------------------------------------------------------------
   Bosquejo:
   - Los dos primeros números son 0 y 1.
   - Cada término es la suma de los dos anteriores.
============================================================ */
function serieFibonacci() {
  let n = 8; // 0 1 1 2 3 5 8 13
  let a = 0, b = 1, c=0;
  // console.log(a);
  // console.log(b);
  for (let i = 3; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

//serieFibonacci();

/* ============================================================
   5) Divisores de un número
   ------------------------------------------------------------
   Bosquejo:
   - Un divisor es un número que divide exacto a otro.
   - Recorrer de 1 hasta N y verificar residuo 0.
   numero=6
   divisores: 1 2 3 4 5// 6%1=0, 6%2=0, 6%3=0, 6%4=2, 6%5=1
   numero=9
   1,2,3,4,5,6,7,8
   ============================================================ */
function divisoresNumero() {
  let numero = 6;
  console.log("Divisores de", numero, ":");
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      console.log(i);
    }
  }
}

//divisoresNumero();

/* ============================================================
   6) Suma de divisores de un número
   ------------------------------------------------------------
   Bosquejo:
   - Recorrer de 1 hasta N-1.
   - Sumar los que dividen exacto.
============================================================ */
function ContarSumaDivisores() {
   // acu=0
  // 1 +2 + 3 
  // 1 3 6
  let numero = 6,cd=0;
  let suma = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i == 0) {
      cd++
    }else{
      suma += i;
    }
  }
  console.log("La suma de los no divisores de", numero, "es:", suma);
  console.log("La cantidad de los divisores de", numero, "es:", cd);
}
function sumaDivisores(numero) {
  let suma = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i == 0) {
      suma += i;
    }
  }
  return suma // 6
}


//let num = parseInt(prompt("Ingrese un número:"));//10
//sumaDivisores(num);//10
//sumaDivisores(12)
debugger
//let resp =sumaDivisores(6) // retorna el valor de la suma de divisores
//console.log("La suma de los divisores de 6 es:", resp);
/* ============================================================
   7) Número perfecto
   ------------------------------------------------------------
   Bosquejo:
   - Un número es perfecto si la suma de sus divisores propios
     (sin incluir el mismo número) es igual al número original.
    numero=6=  1+2+3=6=6 perfecto
     ============================================================ */
function numeroPerfecto(numero) {
  let suma = sumaDivisores(numero);
  if (suma === numero) {
    console.log(numero + " es un número perfecto");
  } else {
    console.log(numero + " no es perfecto");
  }
}
//numeroPerfecto(6);

/* ============================================================
   8) Número primo
   ------------------------------------------------------------
   Bosquejo:
   - Un número es primo si solo tiene dos divisores: 1 y él mismo.
   - Contar cuántos divisores exactos tiene.
============================================================ */
function numeroPrimo() {
  let numero = 5;
  let contador = 0;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }

  if (contador === 0) {
    console.log(numero + " es primo");
  } else {
    console.log(numero + " no es primo");
  }
}
//numeroPrimo();

/* ============================================================
   9) Invertir un número
   ------------------------------------------------------------
   Bosquejo:
   - Repetir mientras el número sea > 0.
   - Extraer el último dígito con %10.
   - Agregarlo al resultado multiplicando por 10.
   - Eliminar el último dígito con Math.floor(numero/10).
  num=123 inv=321    123/10 = 12  12/10=1  1/10=0
  dig=3 inv=0*10+3=3  dig=2 inv=3*10+2=32 dig=1 inv=32*10+1=321
  num=123 / 10
      3  12 / 10
      2   1 / 10
      1   0
  ============================================================
============================================================ */
function invertirNumero() {
  let numero = 123;
  let invertido = 0;

  while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }

  console.log("Número invertido:", invertido);
}
//invertirNumero();

/* ============================================================
   10) Factorial de un número
   ------------------------------------------------------------
   Bosquejo:
   - Factorial = 1 × 2 × 3 × ... × N
   - Usar for con multiplicación acumulada.
============================================================ */
function factorialNumero(n) {
  //let n = 5;// 5*4*3*2*1=120
  let factorial = 1;

  for (let cont = n; cont > 1; cont--) {
    factorial *= cont;
  }

  //console.log("El factorial de", n, "es:", factorial);
  return factorial
}
//factorialNumero(5);
// Dado un arreglo de numeros presente el factoral de cada numero
function factorialArreglo(arr) {
  let factorial
  for (let i = 0; i < arr.length; i++) {
     factorial = factorialNumero(arr[i]);
     console.log("El factorial de", arr[i], "es:", factorial);
  }
}

let numeros=[3,4,5]
factorialArreglo(numeros)

