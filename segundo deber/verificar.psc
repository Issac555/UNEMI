// Definir num1 y num2 como enteros
// Leer el primer n�mero
// Verificar si el n�mero es positivo o negativo
// Si el n�mero es positivo, comprobar si es par o impar y si es m�ltiplo de 7
// Si el n�mero es negativo, hacer lo mismo (comprobar si es par o impar y si es m�ltiplo de 7)
// Mostrar los resultados para par/impar y m�ltiplo de 7
Algoritmo VerificarDivisor
    Definir num1, num2 Como Entero
	
    Escribir "Ingrese el primer n�mero:"
    Leer num1
	
    Si num1 >= 1  Entonces
        Escribir "El n�mero ", num1 , "es positivo"
		Si num1 MOD 2 = 0 Entonces
			
			Escribir "El numero es par " , num1
		SiNo
			Escribir "El numero es impar"
		FinSi
		
		Si num1 % 7 = 0 Entonces
			Escribir "El n�mero ", num1 , "es m�ltiplo de 7"
		Sino
			Escribir "El n�mero ", num1 , "NO es m�ltiplo de 7"
		FinSi
		
    Sino
        Escribir "El n�mero ", num1, "es negativo  "
		Si num1 MOD 2 = 0 Entonces
			
			Escribir "El numero es par ", num1
		SiNo
			Escribir "El numero es impar"
		FinSi
		
		Si num1 % 7 = 0 Entonces
			Escribir "El n�mero ", num1 , "es m�ltiplo de 7"
		Sino
			Escribir "El n�mero ", num1 , "NO es m�ltiplo de 7"
		FinSi
		
    FinSi
FinAlgoritmo