// Definir valorbase y total como reales
// Definir nombre como car�cter
// Leer el tipo de tarjeta de cr�dito
// Si la tarjeta es MasterCard, calcular aumento y mostrar detalles
// Si la tarjeta es Visa, calcular aumento y mostrar detalles
// Si la tarjeta es American, calcular aumento y mostrar detalles
// Si la tarjeta es Otros, calcular aumento y mostrar detalles
Algoritmo sin_titulo
	Definir valorbase, total Como Real
	Definir  nombre Como Caracter
	Escribir "Ingresa el tipo de tarjeta de cr�dito que pertenece - MasterCard/Visa/American/Otros"
	Leer nombre
		Si nombre = "MasterCard" Entonces
			valorbase = 1000 + 100
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento ser� de 100$, su adicional ser� de 10%"
			Escribir "Su valor base ", valorbase " m�s el adicional es de ", total
		FinSi
		Si nombre = "Visa" Entonces
			valorbase = 1000 + 200
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento ser� de 200$, su adicional ser� de 10%"
			Escribir "Su valor base ", valorbase " m�s el adicional es de ", total
		FinSi
		Si nombre = "American" Entonces
			valorbase = 1000 + 300
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento ser� de 300$, su adicional ser� de 10%"
			Escribir "Su valor base ", valorbase " m�s el adicional es de ", total
		FinSi
		Si nombre = "Otros" Entonces
			valorbase = 1000 + 500
			total = valorbase + (valorbase * 0.10) 
			Escribir "Su tarjeta de credito es de 1000$ y el aumento ser� de 500$, su adicional ser� de 10%"
			Escribir "Su valor bas e", valorbase " m�s el adicional es de ", total
		FinSi	
FinAlgoritmo
