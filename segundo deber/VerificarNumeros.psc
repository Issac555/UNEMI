// Leer los cuatro números
// Pedir al usuario que ingrese el primer número
// Leer num1
// Pedir al usuario que ingrese el segundo número
// Leer num2
// Pedir al usuario que ingrese el tercer número
// Leer num3
// Pedir al usuario que ingrese el cuarto número
// Leer num4

// Verificar si el primer número es la mitad del segundo
// Si num1 es igual a la mitad de num2
// Mostrar que el primer número es la mitad del segundo
// Si no
// Mostrar que el primer número NO es la mitad del segundo

// Verificar si el tercer número es divisor del cuarto
// Si num4 es divisible entre num3 (residuo de 0)
// Mostrar que el tercer número es divisor del cuarto
// Si no
// Mostrar que el tercer número NO es divisor del cuarto

Algoritmo VerificarNumeros
    Definir num1, num2, num3, num4 Como Entero
	
    // Leer los cuatro números
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    Si num1 = num2 / 2 Entonces
        Escribir "El primer número es la mitad del segundo número."
    Sino
        Escribir "El primer número NO es la mitad del segundo número."
    FinSi
	
    Si num4 MOD num3 = 0 Entonces
        Escribir "El tercer número es divisor del cuarto número."
    Sino
        Escribir "El tercer número NO es divisor del cuarto número."
    FinSi

FinAlgoritmo
