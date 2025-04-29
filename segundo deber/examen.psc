// Definir la variable nota como un entero
// Solicitar al usuario que ingrese la nota de su examen
// Verificar si la nota es mayor o igual a 60, si es así, mostrar que aprobó el examen
// Si la nota es exactamente 60, mostrar un mensaje indicando que debe hacer una recuperación
// Si la nota es menor o igual a 40, mostrar un mensaje indicando que reprobó y no tiene opción de recuperación

Algoritmo examen
	Definir nota Como Entero
	Escribir "Ingresa la nota de tu examen"
	Leer nota
	Si nota >= 70 Entonces 
		Escribir "Aprobastes el examen con la nota de ", nota
	FinSi
	Si nota >= 50 Y nota <= 69 Entonces
			Escribir "Tienes ", nota, ", así que debes de hacer una recuperación "
	FinSi
	Si nota <= 49 Entonces
		Escribir "Reprobastes el examen, no das recuperarción ", nota
	FinSi
FinAlgoritmo
