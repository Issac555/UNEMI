// Definir num1 y num3 como enteros
// Leer el primer número (num1)
// Leer el tercer número (num3)
// Verificar si num1 es divisor de num3
// Si num1 es divisor de num3, mostrar el mensaje correspondiente
// Si num1 no es divisor de num3, mostrar el mensaje correspondiente

Algoritmo VerificarDivisor
    Definir num1, num3 Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Si num3 % num1 = 0 Entonces
        Escribir "El número ", num1, "es divisor del número ", num3
    Sino
        Escribir "El número ", num1, "NO es divisor del número ", num3
    FinSi
FinAlgoritmo