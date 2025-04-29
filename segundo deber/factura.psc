// Definir variables precio_nuevo, fecha, quitar, iva como reales
// Leer monto total de la factura
// Verificar si el monto es mayor a 900
// Si el monto es menor o igual a 900, mostrar mensaje de error
// Si el monto es v�lido, leer el a�o de compra
// Verificar si el a�o es menor o igual a 2024
// Calcular IVA y precio final dependiendo del a�o
// Mostrar el a�o de compra, precio al p�blico y el IVA
Algoritmo sin_titulo
	Definir precio_nuevo, fecha, quitar, iva Como Real
	Escribir "Ingresa el monto total de la factura"
	Leer precio_nuevo
	Si precio_nuevo <= 900 Entonces
		Escribir "Error: El valor ingresado debe ser mayor de 900$"
	SiNo
		Escribir "Ingresa el a�o de compra"
		Leer fecha
		Si fecha <= 2024 Entonces
			iva = 0.12
			quitar = precio + (precio_nuevo * iva)
			Escribir "El a�o de compra es del ", fecha ", su precio al publico, " precio_nuevo + quitar " y el IVA es ", iva
		SiNo
			iva = 0.15
			quitar = precio + (precio_nuevo * iva)
			Escribir "El a�o de compra es del ", fecha ", su precio al publico, " precio_nuevo + quitar " y el IVA es ", iva
		FinSi
	FinSi
FinAlgoritmo
