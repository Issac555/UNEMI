// Inicio del algoritmo
// Definir las variables necesarias:
// - precio_nuevo: el valor del veh�culo
// - quitar: el monto de descuento si aplica
// - fecha: el a�o de fabricaci�n del veh�culo

// Pedir al usuario que ingrese el valor del veh�culo (debe ser mayor a $900)
// Leer el valor ingresado y guardarlo en la variable precio_nuevo

// Si el valor del veh�culo es menor o igual a $

Algoritmo sin_titulo
	Definir precio_nuevo, fecha, quitar Como Real
	Escribir "Ingresa el valor del veh�culo que deseas vender, mayor de 900$"
	Leer precio_nuevo
	Si precio_nuevo <= 900 Entonces
		Escribir "Error: El valor ingresado debe ser mayor de 900$"
	SiNo
		Escribir "Ingresa el a�o de fabricaci�n del auto"
		Leer fecha
		Si fecha <= 2009 Entonces
			quitar = precio_nuevo * 0.10
			Escribir "El a�o de fabricaci�n es del ", fecha ", su precio al publico, su descuento del 10%: " precio_nuevo - quitar
		SiNo
			Escribir "El a�o de fabricaci�n es del ", fecha ", su precio al publico es  ", precio_nuevo
		FinSi
	FinSi
FinAlgoritmo
