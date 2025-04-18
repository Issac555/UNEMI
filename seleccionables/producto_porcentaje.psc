// Solicitar al usuario el precio de un producto y el porcentaje de descuento
//aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
Algoritmo producto_porcentaje
	Definir producto, porcentaje, quitar Como Real
	Escribir "Ingresa el primer dato, agrega el precio del producto"
	Leer producto
	Escribir "Ingresa ahora el porcentaje de descuento"
	Leer porcentaje
	quitar = producto * (porcentaje / 100)
	Escribir "A continuación los datos"
	Escribir "Producto sin descuento = ", producto
	Escribir "El descuento del producto  = ", quitar
	Escribir "______________________"
	Escribir "Total resta del producto - porcentaje: ", producto - quitar
	
	
FinAlgoritmo
	