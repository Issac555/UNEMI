// Definir num1 y num3 como enteros
// Leer el primer n�mero (num1)
// Leer el tercer n�mero (num3)
// Verificar si num1 es divisor de num3
// Si num1 es divisor de num3, mostrar el mensaje correspondiente
// Si num1 no es divisor de num3, mostrar el mensaje correspondiente

Algoritmo VerificarDivisor
    Definir num1, num3 Como Entero
	
    Escribir "Ingrese el primer n�mero:"
    Leer num1
    Escribir "Ingrese el tercer n�mero:"
    Leer num3
	
    Si num3 % num1 = 0 Entonces
        Escribir "El n�mero ", num1, "es divisor del n�mero ", num3
    Sino
        Escribir "El n�mero ", num1, "NO es divisor del n�mero ", num3
    FinSi
FinAlgoritmo