// Pedir al usuario que ingrese el valor de la factura
// Pedir el porcentaje de descuento

// Si la factura es mayor o igual a 100
// Calcular el descuento: precio * descuento / 100
// Calcular el total a pagar: precio - descuento
// Mostrar que la factura sí aplica al descuento
// Mostrar el monto original
// Mostrar cuánto se descuenta
// Mostrar el total a pagar
// Si no
// Mostrar que la factura no aplica al descuento
// Mostrar el monto original sin cambios
// Mostrar que el descuento es 0
// Mostrar el total a pagar igual al original
Algoritmo factura/descuento
	Definir precio, pago, descuento, rebaja Como Real
	Escribir "Ingresa el valor de tu factura"
	LEER precio
	Escribir "Ingresa el valor del descuento aplicado/ (solo se aplicara si tu factura es de más de 100$)"
	Leer descuento
	
	Si precio >= 100 Entonces
		
		rebaja = precio * descuento / 100// descuento
		
		Escribir "Tu factura aplica al descuento"
		Escribir "Total sin descuento: $", precio
		Escribir "Descuento aplicado: $", rebaja
		Escribir "Total a pagar: $", precio - rebaja
	SiNo
		Escribir "Tu factura no aplica, $", precio
		Escribir "El descuento de tu factura es de $0"
		Escribir "El valor a pagar es de: $", precio 
FinSi
FinAlgoritmo
