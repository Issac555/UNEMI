// Solicitar al usuario un n�mero
// Verificar si el n�mero es un solo d�gito, es decir, est� en el rango de -9 a 9
// Si es un solo d�gito, mostrar el mensaje correspondiente
// Si no es un solo d�gito, mostrar que no lo es

Algoritmo digito
	Definir numeros Como Entero
	Escribir "Ingresa el numero para ver si tiene m�s de un digito"
	leer numeros
	Si numeros < 10 Entonces
		Escribir "El numero que ingresastes tiene un solo d�gito, ", numeros
	SiNo
		Escribir "El numero tiene m�s de un digito, ", numeros
	FinSi
FinAlgoritmo
