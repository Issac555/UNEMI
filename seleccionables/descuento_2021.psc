Algoritmo sin_titulo
	Definir precio_nuevo, fecha, quitar Como Real
	Escribir "Ingresa el valor del vehículo que deseas vender, mayor de 900$"
	Leer precio_nuevo
	Si precio_nuevo <= 900 Entonces
		Escribir "Error: El valor ingresado debe ser mayor de 900$"
	SiNo
		Escribir "Ingresa el año de fabricación del auto"
		Leer fecha
		Si fecha <= 2009 Entonces
			quitar = precio_nuevo * 0.10
			Escribir "El año de fabricación es del ", fecha ", su precio al publico, su descuento del 10%: " precio_nuevo - quitar
		SiNo
			Escribir "El año de fabricación es del ", fecha ", su precio al publico es  ", precio_nuevo
		FinSi
	FinSi
FinAlgoritmo
