// Leer los cuatro n�meros
// Pedir al usuario que ingrese el primer n�mero
// Leer num1
// Pedir al usuario que ingrese el segundo n�mero
// Leer num2
// Pedir al usuario que ingrese el tercer n�mero
// Leer num3
// Pedir al usuario que ingrese el cuarto n�mero
// Leer num4

// Verificar si el primer n�mero es la mitad del segundo
// Si num1 es igual a la mitad de num2
// Mostrar que el primer n�mero es la mitad del segundo
// Si no
// Mostrar que el primer n�mero NO es la mitad del segundo

// Verificar si el tercer n�mero es divisor del cuarto
// Si num4 es divisible entre num3 (residuo de 0)
// Mostrar que el tercer n�mero es divisor del cuarto
// Si no
// Mostrar que el tercer n�mero NO es divisor del cuarto

Algoritmo VerificarNumeros
    Definir num1, num2, num3, num4 Como Entero
	
    // Leer los cuatro n�meros
    Escribir "Ingrese el primer n�mero:"
    Leer num1
    Escribir "Ingrese el segundo n�mero:"
    Leer num2
    Escribir "Ingrese el tercer n�mero:"
    Leer num3
    Escribir "Ingrese el cuarto n�mero:"
    Leer num4
	
    Si num1 = num2 / 2 Entonces
        Escribir "El primer n�mero es la mitad del segundo n�mero."
    Sino
        Escribir "El primer n�mero NO es la mitad del segundo n�mero."
    FinSi
	
    Si num4 MOD num3 = 0 Entonces
        Escribir "El tercer n�mero es divisor del cuarto n�mero."
    Sino
        Escribir "El tercer n�mero NO es divisor del cuarto n�mero."
    FinSi

FinAlgoritmo
