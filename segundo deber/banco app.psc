// Definir variables para tipo de cliente, valores de factura, IVA, descuento
// Leer el tipo de cliente
// Verificar el tipo de cliente y aplicar descuentos o solo IVA

// Si el cliente es tipo A, B o C, aplicar un descuento y calcular IVA
// Si el cliente es tipo "Otros", solo calcular el IVA sin descuento

// Mostrar el valor subtotal, el descuento (si aplica), el IVA y el total de la factura
// Si el tipo es incorrecto, mostrar mensaje de error

Algoritmo sin_titulo
	Definir tipo Como Caracter
	Definir valo, total, iva, descuento Como Real
	Escribir "Ingresa el tipo de cliente (A = Dispacitadio) (B, C = Natural) (Otro = Nuevo)"
	Leer tipo
	Si tipo = "A" O tipo = "B" O tipo = "C" O tipo = "Otros" Entonces
		Escribir "Ingresa el valor de tu factura"
		Leer valo
		Si tipo = "A" Entonces
			descuento = valo * 0.30//valor descuento 10 + 20%
			iva = valo * 0.15 //valor IVA
			Escribir "El valor Subtotal de tu factura es de ",valo
			Escribir "-------------------------------------"
			Escribir "El descuento de tu compra es de ",descuento
			Escribir "-------------------------------------"
			Escribir "El IVA de tu factura es de ",iva
			Escribir "-------------------------------------"
			valo = valo - descuento + iva
			Escribir "El total de tu factura es de ",valo
		FinSi
		Si tipo = "B" Entonces
			descuento = valo * 0.25//valor descuento 10 + 20%
			iva = valo * 0.15 //valor IVA
			Escribir "El valor Subtotal de tu factura es de ",valo
			Escribir "-------------------------------------"
			Escribir "El descuento de tu compra es de ",descuento
			Escribir "-------------------------------------"
			Escribir "El IVA de tu factura es de ",iva
			Escribir "-------------------------------------"
			valo = valo - descuento + iva
			Escribir "El total de tu factura es de ",valo
		FinSi
		Si tipo = "C" Entonces
			descuento = valo * 0.20//valor descuento 10 + 20%
			iva = valo * 0.15 //valor IVA
			Escribir "El valor Subtotal de tu factura es de ",valo
			Escribir "-------------------------------------"
			Escribir "El descuento de tu compra es de ",descuento
			Escribir "-------------------------------------"
			Escribir "El IVA de tu factura es de ",iva
			Escribir "-------------------------------------"
			valo = valo - descuento + iva
			Escribir "El total de tu factura es de ",valo
		FinSi
		Si tipo = "Otros" Entonces
			iva = valo * 0.15 //valor IVA
			Escribir "El valor Subtotal de tu factura es de ",valo
			Escribir "-------------------------------------"
			Escribir "El IVA de tu factura es de ",iva
			Escribir "-------------------------------------"
			valo = valo + iva
			Escribir "El total de tu factura es de ",valo
			
		FinSi
		
	SiNo
		Escribir "Error, tipo incorrecto"
	FinSi

FinAlgoritmo
