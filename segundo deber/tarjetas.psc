// Definir valorbase y total como reales
// Definir nombre como carácter
// Leer el tipo de tarjeta de crédito
// Si la tarjeta es MasterCard, calcular aumento y mostrar detalles
// Si la tarjeta es Visa, calcular aumento y mostrar detalles
// Si la tarjeta es American, calcular aumento y mostrar detalles
// Si la tarjeta es Otros, calcular aumento y mostrar detalles
Algoritmo sin_titulo
	Definir valorbase, total Como Real
	Definir  nombre Como Caracter
	Escribir "Ingresa el tipo de tarjeta de crédito que pertenece - MasterCard/Visa/American/Otros"
	Leer nombre
		Si nombre = "MasterCard" Entonces
			valorbase = 1000 + 100
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento será de 100$, su adicional será de 10%"
			Escribir "Su valor base ", valorbase " más el adicional es de ", total
		FinSi
		Si nombre = "Visa" Entonces
			valorbase = 1000 + 200
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento será de 200$, su adicional será de 10%"
			Escribir "Su valor base ", valorbase " más el adicional es de ", total
		FinSi
		Si nombre = "American" Entonces
			valorbase = 1000 + 300
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento será de 300$, su adicional será de 10%"
			Escribir "Su valor base ", valorbase " más el adicional es de ", total
		FinSi
		Si nombre = "Otros" Entonces
			valorbase = 1000 + 500
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento será de 500$, su adicional será de 10%"
			Escribir "Su valor bas e", valorbase " más el adicional es de ", total
		FinSi	
FinAlgoritmo
