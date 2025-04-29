// Solicitar al usuario un número
// Verificar si el número es un solo dígito, es decir, está en el rango de -9 a 9
// Si es un solo dígito, mostrar el mensaje correspondiente
// Si no es un solo dígito, mostrar que no lo es

Algoritmo digito
	Definir numeros Como Entero
	Escribir "Ingresa el numero para ver si tiene más de un digito"
	leer numeros
	Si numeros < 10 Entonces
		Escribir "El numero que ingresastes tiene un solo dígito, ", numeros
	SiNo
		Escribir "El numero tiene más de un digito, ", numeros
	FinSi
FinAlgoritmo
