//12. Pedir al usuario el monto total de una factura
//y el porcentaje de IVA aplicado. Luego, calcula
//y mostrar el monto total a pagar incluyendo el IVA.

//bozeto
//Inicio
//Definir factura, iva, total, totaltodo como Real
//Escribir "Ingresa el monto total de la factura"
//Leer total
//Escribir "Ingresa el porcentaje de IVA aplicado (en porcentaje, como 12 para 12%)"
//Leer iva
//Calcular el monto del IVA
//factura = total * (iva) / 100
//Mostrar los resultados
//Escribir "Factura sin IVA = ", total
//Escribir "El IVA de la factura = ", factura
//Escribir "______________________"
//Mostrar el total a pagar
//Escribir "Suma de ambos: ", factura + total

Algoritmo caculo
	Definir factura, iva, total, totaltodo Como Real
	Escribir "Ingresa el primer dato, agrega el monto total de la factura"
	Leer total
	Escribir "Ingresa el porcentaje aplicado a está, debe de llevar el 0.IVA%"
	Leer iva
	factura = total * (iva) / 100
	Escribir "A continuación los datos"
	Escribir "Factura sin IVA = ", total
	Escribir "El IVA de la factura  = ", factura
	Escribir "______________________"
	Escribir "Suma de ambos: ", factura + total


FinAlgoritmo
	