Algoritmo sin_titulo
	Definir n1, n2, n3, n4, n5 Como Entero
	Escribir "A continuación ingresa tu primer digito"
	Leer n1
	Escribir "A continuación ingresa tu segundo digito"
	Leer n2
	Escribir "A continuación ingresa tu tecer digito"
	Leer n3
	Escribir "A continuación ingresa tu cuarto digito"
	Leer n4
	Escribir "A continuación ingresa tu quinto digito"
	Leer n5
	
	Si n1 = n2 Y n2 = n3 Y n3 = n4 Y n4 = n5 Entonces
		Escribir "Todo los numeros son iguales "
	SiNo
		Si n1 >= n2 Y n1 >= n3 Y n1 >= n4 Y n1 >= n5 Entonces
			Escribir "El primer digito ", n1, " es mayor que los restantes"
		FinSi
		Si n2 >= n1 Y n2 >= n3 Y n2 >= n4 Y n2 >= n5 Entonces
			Escribir "El segundo digito ", n2, " es mayor que los restantes"
		FinSi
		Si n3 >= n1 Y n3 >= n2 Y n3 >= n4 Y n3 >= n5 Entonces
			Escribir "El tecer digito ", n3, " es mayor que los restantes"
		FinSi
		Si n4 >= n1 Y n4 >= n2 Y n4 >= n3 Y n2 >= n5 Entonces
			Escribir "El cuarto digito ", n4, " es mayor que los restantes"
		FinSi
		Si n5 >= n1 Y n5 >= n2 Y n5 >= n3 Y n5 >= n4 Entonces
			Escribir "El quinto digito ", n5, " es mayor que los restantes"
		FinSi
	FinSi
FinAlgoritmo
