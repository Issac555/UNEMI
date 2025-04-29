// Definir num1 y num2 como enteros
// Leer el primer número
// Verificar si el número es positivo o negativo
// Si el número es positivo, comprobar si es par o impar y si es múltiplo de 7
// Si el número es negativo, hacer lo mismo (comprobar si es par o impar y si es múltiplo de 7)
// Mostrar los resultados para par/impar y múltiplo de 7
Algoritmo VerificarDivisor
    Definir num1, num2 Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Si num1 >= 1  Entonces
        Escribir "El número ", num1 , "es positivo"
		Si num1 MOD 2 = 0 Entonces
			
			Escribir "El numero es par " , num1
		SiNo
			Escribir "El numero es impar"
		FinSi
		
		Si num1 % 7 = 0 Entonces
			Escribir "El número ", num1 , "es múltiplo de 7"
		Sino
			Escribir "El número ", num1 , "NO es múltiplo de 7"
		FinSi
		
    Sino
        Escribir "El número ", num1, "es negativo  "
		Si num1 MOD 2 = 0 Entonces
			
			Escribir "El numero es par ", num1
		SiNo
			Escribir "El numero es impar"
		FinSi
		
		Si num1 % 7 = 0 Entonces
			Escribir "El número ", num1 , "es múltiplo de 7"
		Sino
			Escribir "El número ", num1 , "NO es múltiplo de 7"
		FinSi
		
    FinSi
FinAlgoritmo