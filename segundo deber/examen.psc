// Definir la variable nota como un entero
// Solicitar al usuario que ingrese la nota de su examen
// Verificar si la nota es mayor o igual a 60, si es as�, mostrar que aprob� el examen
// Si la nota es exactamente 60, mostrar un mensaje indicando que debe hacer una recuperaci�n
// Si la nota es menor o igual a 40, mostrar un mensaje indicando que reprob� y no tiene opci�n de recuperaci�n

Algoritmo examen
	Definir nota Como Entero
	Escribir "Ingresa la nota de tu examen"
	Leer nota
	Si nota >= 70 Entonces 
		Escribir "Aprobastes el examen con la nota de ", nota
	FinSi
	Si nota >= 50 Y nota <= 69 Entonces
			Escribir "Tienes ", nota, ", as� que debes de hacer una recuperaci�n "
	FinSi
	Si nota <= 49 Entonces
		Escribir "Reprobastes el examen, no das recuperarci�n ", nota
	FinSi
FinAlgoritmo
