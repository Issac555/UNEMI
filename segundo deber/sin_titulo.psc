// Definir sueldo, porcentaje y total como reales
// Leer el sueldo actual
// Leer el porcentaje de aumento
// Calcular el nuevo sueldo con el aumento del porcentaje
// Mostrar el sueldo actual y el nuevo sueldo con el porcentaje aplicado

Algoritmo sin_titulo
	Definir sueldo, porce, total Como Real
	
	Escribir "Ingresa el sueldo actual que recibes, añadiremos el nuevo sueldo con un poco más de dinero"
	LEER sueldo
	Escribir "Ingresa el porcentaje del cual recibiras"
	Leer porce
	
	total = sueldo + ( sueldo * porce / 100)
	
	Escribir "El sueldo actual es ", sueldo " con el nuevo porcentaje es de ", total, " - ", porce
FinAlgoritmo
