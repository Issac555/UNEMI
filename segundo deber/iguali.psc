// Definir num1 y num2 como enteros
// Leer el primer n�mero
// Leer el segundo n�mero
// Verificar si los dos n�meros son iguales
// Si son iguales, mostrar mensaje
// Si no son iguales, comparar el primer n�mero con el segundo
// Si el primer n�mero es mayor, mostrar mensaje correspondiente
// Si el segundo n�mero es mayor, mostrar mensaje correspondiente

Algoritmo igualitos
	Definir num1, num2 Como Entero
	Escribir "Ingresa el primer digito"
	Leer num1
	Escribir "Ingresa el segundo"
	Leer num2
	Si num1 = num2 Entonces
		Escribir "Los numeros son iguales"
	Sino Si num1 >= num2 Entonces
			Escribir "El numero ", num1 " es mayor que ", num2
		
		Sino Si num2 >= num1 Entonces
				Escribir "El numero ", num2 " es mayor que ", num1
			FinSi
		FinSi
	FinSi
FinAlgoritmo
