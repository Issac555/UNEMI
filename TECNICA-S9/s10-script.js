debugger;

class calculo {

    serieFibonacci(numero){
        let a = 0, b = 1, c;
        console.log(`\n[1] Serie de Fibonacci para el número ${numero}:`);
        if (numero >= 1) console.log(a);
        if (numero >= 2) console.log(b);
        for (let j = 3; j <= numero; j++) {
            c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }

    divisoresnumeros(numero){
        console.log(`\n[2] Divisores de ${numero}:`);
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) console.log(i);
        }
    }

    sumadedivisores(numero){
        let suma = 0;
        for(let i = 1; i <= numero; i++){
            if (numero % i === 0){
                suma += i;
            }
        }
        console.log(`\n[3] La suma de los divisores de ${numero} es: ${suma}`);
    }

    numeroperfecto(numero){
        let suma = 0;
        for(let i = 1; i < numero; i++){
            if (numero % i === 0){
                suma += i;
            }
        }
        if(suma === numero){
            console.log(`\n[4] ${numero} es un número perfecto`);
        } else {
            console.log(`\n[4] ${numero} no es un número perfecto`);
        }
    }

    numeroprimo(numero){
        let contador = 0;
        for(let i = 1; i <= numero; i++){
            if (numero % i === 0){
                contador++;
            }
        }
        if(contador === 2){
            console.log(`\n[5] ${numero} es primo`);
        } else {
            console.log(`\n[5] ${numero} no es primo`);
        }
    }

    invertirnumero(numero){
        let original = numero;
        let texto = String(numero);       
        let invertido = "";
        for (let i = texto.length - 1; i >= 0; i--) {
            invertido += texto[i];        // recorre de atrás hacia adelante
        }
        console.log(`\n[6] El número ${original} invertido es: ${invertido}`);
    }

      contarDigitos(numero){
        let original = numero;
        let texto = String(numero);    // Convertir el número a cadena
        let contador = texto.length;   // La longitud de la cadena es el número de dígitos
        console.log(`\n[7] El número ${original} tiene ${contador} dígitos.`);
    }


    factorialNumero(numero){
        let factorial = 1;
        for (let i = numero; i > 1; i--){
            factorial *= i;
        }
        console.log(`\n[8] El factorial de ${numero} es: ${factorial}`);
    }

    sumasSucesivas(numero, veces){
        let resultado = 0;
        for(let i = 0; i < veces; i++){
            resultado += numero;
        }
        console.log(`\n[9] La suma sucesiva de ${numero} repetida ${veces} veces es: ${resultado}`);
    }

    restasSucesivas(numero, numero2){
        let original = numero;
        let proceso = `${numero}`;
        while(numero >= numero2){
            numero -= numero2;
            proceso += ` - ${numero2} = ${numero}`;
        }
        console.log(`\n[10] Proceso de restas sucesivas (${original} - ${numero2}):`);
        console.log(proceso);
        console.log(`Resultado final: ${numero}`);
    }
}

const operaciones = new calculo();

const serie = [
  { number: 8 },
  { number: 10 },
  { number: 1 }
];

function serieFibonacciObjeto(){
  for (let i = 0; i < serie.length; i++){
    operaciones.serieFibonacci(serie[i].number);
  }
}
serieFibonacciObjeto();

function serieDivisor(){
  for (let i = 0; i < serie.length; i++){
    operaciones.divisoresnumeros(serie[i].number);
  }
}
serieDivisor();

function serieSumDiv(){
  for (let i = 0; i < serie.length; i++){
    operaciones.sumadedivisores(serie[i].number);
  }
}
serieSumDiv();

function seriePerfecto(){
  for (let i = 0; i < serie.length; i++){
    operaciones.numeroperfecto(serie[i].number);
  }
}
seriePerfecto();

function seriePrimo(){
  for (let i = 0; i < serie.length; i++){
    operaciones.numeroprimo(serie[i].number);
  }
}
seriePrimo();

function serieInvertir(){
  for (let i = 0; i < serie.length; i++){
    operaciones.invertirnumero(serie[i].number);
  }
}
serieInvertir();

function serieContarDigitos(){
  for (let i = 0; i < serie.length; i++){
    operaciones.contarDigitos(serie[i].number);
  }
}
serieContarDigitos();

function serieFactorial(){
  for (let i = 0; i < serie.length; i++){
    operaciones.factorialNumero(serie[i].number);
  }
}
serieFactorial();

function serieSumasSucesivas(){
  for (let i = 0; i < serie.length; i++){
    operaciones.sumasSucesivas(serie[i].number, 4);
  }
}
serieSumasSucesivas();

function serieRestasSucesivas(){
  for (let i = 0; i < serie.length; i++){
    operaciones.restasSucesivas(serie[i].number, 3);
  }
}
serieRestasSucesivas();
