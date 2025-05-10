
//menu interactivo
Algoritmo contar
	Definir menu Como Entero
	Mostrar "1-. Ejercicio 1: Calculadora de vuelto"
	Mostrar "2-. Ejercicio 2: Conversor de kilogramos a libras y viceversa"
	Mostrar "3-. Ejercicio 3: Calculadora de descuentos"
	Mostrar "4-. Ejercicio 4: Cálculo del IVA (12%)"
	Mostrar "5-. Ejercicio 5: Comparación de precios entre dos productos"
	Mostrar "6-. Ejercicio 6: Clasificador de edad del cliente"
	Mostrar "7-. Ejercicio 7: Identificador de número par o impar"
	Mostrar "8-. Ejercicio 8: Evaluador de puntuación de servicio"
	Mostrar "9-. Ejercicio 9: Verificador de múltiplo de 3, 9 o 12"
	Mostrar "10-. Ejercicio 10: Calculadora de propina"
	Mostrar "11-. Ejercicio 11: Clasificador de monto de compra"
	Mostrar "12-. Ejercicio 12: Determinación de signo de un número"
	Mostrar "13-. Ejercicio 13: Verificador de acceso por edad y dinero"
	Mostrar "14-. Ejercicio 14: Descuento por edad y monto"
	Mostrar "15-. Ejercicio 15: Cálculo de cambio exacto con billetes de $10 y $5"
	Mostrar "16-. Ejercicio 16: Categorizador de día de la semana"
	Mostrar "17-. Ejercicio 17: Clasificador de producto por precio unitario"
	Mostrar "18-. Ejercicio 18: Determinador de bisiesto (año)"
	Mostrar "19-. Ejercicio 19: Conversor de horas a minutos y segundos"
	Mostrar "20-. Ejercicio 20: Verificador de triple de un número"
	Mostrar "21-. Ejercicio 21: Determinar riesgo por síntomas múltiples para el efecto tienes"
	Mostrar "22-. Ejercicio 22: Clasificación de presión sistólica"
	Mostrar "23-. Ejercicio 23: Mostrar saludo personalizado"
	Mostrar "24-. Ejercicio 24: Detectar si el carácter ingresado es una vocal"
	Mostrar "25-. Ejercicio 25: Detectar si el carácter ingresado es una consonante"
	Mostrar "26-. Ejercicio 26: Comparar si dos nombres ingresados son iguales"
	Mostrar "27-. Ejercicio 27: Verificar si una letra es mayúscula o minúscula"
	Mostrar "28-. Ejercicio 28: Mostrar nombre completo del cliente"
	Mostrar "29-. Ejercicio 29: Verificar si una palabra es corta o larga"
	Mostrar "30-. Ejercicio 30: Contar los caracteres y convertir a mayúsculas cualquier frase"
	
	
	Escribir "Ingresa la función que deseas"
	Leer menu
	Si menu = 1 Entonces
		uno()
	FinSi
	Si menu = 2 Entonces
		dos()
	FinSi
	Si menu = 3 Entonces
		tres()
	FinSi
	Si menu = 4 Entonces
		cuatro()
	FinSi
	Si menu = 5 Entonces
		cinco()
	FinSi
	Si menu = 6 Entonces
		seis()
	FinSi
	Si menu = 7 Entonces
		siete()
	FinSi
	Si menu = 8 Entonces
		ocho()
	FinSi
	Si menu = 9 Entonces
		nueve()
	FinSi
	Si menu = 10 Entonces
		dies()
	FinSi
	Si menu = 11 Entonces
		once()
	FinSi
	Si menu = 12 Entonces
		doce()
	FinSi
	Si menu = 13 Entonces
		trece()
	FinSi
	Si menu = 14 Entonces
		catorce()
	FinSi
	Si menu = 15 Entonces
		quince()
	FinSi
	Si menu = 16 Entonces
		diesiceis()
	FinSi
	Si menu = 17 Entonces
		diesiciete()
	FinSi
	Si menu = 18 Entonces
		diesiocho()
	FinSi
	Si menu = 19 Entonces
		diesinueve()
	FinSi
	Si menu = 20 Entonces
		veinte()
	FinSi
	Si menu = 21 Entonces
		veintiuno()
	FinSi
	Si menu = 22 Entonces
		veintidos()
	FinSi
	Si menu = 23 Entonces
		veintitres()
	FinSi
	Si menu = 24 Entonces
		veinticuatro()
	FinSi
	Si menu = 25 Entonces
		veinticinco()
	FinSi
	Si menu = 26 Entonces
		veinticeis()
	FinSi
	Si menu = 27 Entonces
		veintisiete()
	FinSi
	Si menu = 28 Entonces
		veintiocho()
	FinSi
	Si menu = 29 Entonces
		veintinueve()
	FinSi
	Si menu = 30 Entonces
		treinta()
	FinSi
FinAlgoritmo
Funcion uno
	//	Pedir costo y dinero recibido. Calcular y mostrar el vuelto o advertir si no alcanza. 
//	entrada
	Definir costo Como Real
	Definir dinero_recibido Como Real
	Definir vuelto Como Real
//	inicializacion de las variables
	costo=0;dinero_recibido=0;vuelto=0
//	Proceso 
	Escribir " ingrese costo " 
	Leer costo
	Escribir " dinero recibido "
	Leer dinero_recibido 
//	calculamos dinero recibido - costo 
	vuelto= dinero_recibido - costo 
	Escribir vuelto
//	salida
//	cumplir la condicion, mostar condicion 1 sino mostrar condicion 2
	si dinero_recibido < costo Entonces
		Escribir " No alcanza "
	FinSi
	si dinero_recibido > costo Entonces
		Escribir " Es su vuelto"
	FinSi
//	fin Algoritmo
	
FinFuncion

Funcion dos
	// Convertir entre kilogramos y libras. Mostrar el resultado. 
//	entradas
	Definir Kilogramos Como Real
	Definir Libras Como Real
	Definir Resultado_KG_a_LB Como Real
	Definir Resultado_LB_a_KG Como Real
//	inicializamos las variables
	Kilogramos=0;Libras=0;Resultado_KG_a_LB=0;Resultado_LB_a_KG=0
//	Proceso 
	Escribir "ingrese Kilogramos"
	Leer Kilogramos 
	Escribir "ingrese Libras"
	Leer Libras 
	// hacemos la formula de conversion de KG a LB
	Resultado_KG_a_LB= Kilogramos * 2.20462
	Escribir "resultado de KG a LB es"
	Escribir Resultado_KG_a_LB
//	hacemos la formula de conversion de LB a KG
	Resultado_LB_a_KG= Libras / 2.20462
//	salida
	Escribir "resultado de LB a KG es"
	Escribir Resultado_LB_a_KG
FinFuncion

Funcion tres
	//	Aplicar 0%, 5% o 10% de descuento según el monto de compra.
//	entrada
	Definir Montodecompra Como Real
	Definir Precio_0 Como Real
	Definir Precio_5 Como Real
	Definir Precio_10 Como Real
//	Inicializamos
	Montodecompra=0;Precio_0=0;Precio_5=0;Precio_10=0
//	Proceso 
	Escribir "ingrese monto de compra"
	Leer Montodecompra
//	calculo
	Precio_0= Montodecompra * 1 
	Precio_5= Montodecompra * 0.95
	Precio_10= Montodecompra * 0.90
//	escribimos los mensajes que se van a mostrar en pantalla
	Escribir  "el monto de compra con el 0% de descuento es =",Precio_0
	Escribir "el monto de compra con el 5% de descuento es =",Precio_5
	Escribir "el monto de compra con el 10% de descuento es =",Precio_10
FinFuncion

Funcion cuatro
//	Pedir un precio sin IVA y calcular el precio con IVA incluido del 15% con un descuento del 30%
//	entrada
	Definir PreciosinIVA Como Real
	Definir PrecioIVA15 Como Real
	Definir PrecioDescuento30 Como Real
//	inicializamos
	PreciosinIVA=0;PrecioIVA15=0;PrecioDescuento30=0
//	Proceso 
	Escribir "ingrese precio"
	Leer PreciosinIVA
//	calculamos
	PrecioDescuento30= PreciosinIVA * 0.70
	Escribir "su precio con descuento del 30% es ="
	Escribir PrecioDescuento30
	PrecioIVA15= PrecioDescuento30 * 1.15
//	salida
	Escribir "su precio con descuento e incluido IVA 15% es ="
	Escribir PrecioIVA15
FinFuncion

Funcion cinco
	Definir Precio1 Como Real
	Definir Precio2 Como Real
	//inicializamos
	Precio1=0;Precio2=0	
	//Proceso 
	Escribir "ingrese precio 1"
	Leer Precio1
	Escribir "ingrese precio 2"
	Leer Precio2
	//condiciones
	//salida
	si Precio1 >= Precio2 Entonces
		Escribir "precio 1 es mayor que precio 2"
	FinSi
	si Precio1 <= Precio2 Entonces
		Escribir "precio 2 es mayor que precio 1"
	FinSi
FinFuncion

Funcion seis
	//Pedir edad Indicar si es niño (0-12), joven (13-17), adulto (18-64), adulto mayor (65+)
	//entrada
	Definir edad Como Real
	//inicializamos
	edad=0
	//Proceso 
	Escribir "ingrese edad"
	Leer edad
//	condiciones
	si edad <= 12 Entonces
		Escribir "es un niño"
	SiNo 
		si edad <= 17 Entonces
			Escribir "es un joven"
		SiNo
			si edad <= 64 Entonces
				Escribir "es un adulto"
			SiNo
				si edad <= 999999999999999 Entonces
//	salida				
					Escribir "es un adulto mayor"
				FinSi
			FinSi
		FinSi
	FinSi
//	FinAlgoritmo
FinFuncion

Funcion siete
	//Definimos las variables como enteros
	Definir nu1, residuio Como Entero
	//pedimos que ingrese el numero"
	Escribir "Ingresa el número para verificar si es multiplo de 10 y/o es impar o par"
	Leer nu1 //leemos el numero
	
	Si nu1 MOD 2 = 0 // comprobamos si es par o impar
		Escribir "El numero es par, ",nu1
	Sino 
		Escribir "El numero es impar, ",nu1
	FinSi
	
	residuio = nu1 - (Trunc(nu1/10) * 10)
	//residuo = número - (Trunc(número / divisor) * divisor)
	//número: es el valor que quieres analizar.
	//divisor: es el número con el que estás dividiendo 	
	//Trunc(x): toma la parte entera de la división, eliminando los decimales
	Si residuio = 0 Entonces // comprobamos si es multiplo con una formula, sin mod
		Escribir "El numero ",nu1, "es multiplo de 10"
	SiNo
		Escribir "El número ",nu1, " no es multiplo de 10"
	FinSi
FinFuncion

Funcion ocho
	Definir estrellas Como Entero
	Escribir "¿Cual fue tu experiencia) (1 = Malo) - (2-4 = Regular) - (5 - 7 = Bueno) - (8 - 10 = Excelente)"
	Leer estrellas
	
	Si estrellas = 1 Entonces
		Escribir "Lamentamos que tuvistes una mala experienca, prometemos mejorar, estrellas : ",estrellas
	FinSi
	
	Si estrellas > 1 Y estrellas < 4 
		Escribir "Gracias por tu opinión: regular, estrellas : ",estrellas
	FinSi
	
	Si estrellas > 4 Y estrellas < 7 
		Escribir "Gracias por tu opinión: Bueno, estrellas : ",estrellas
	FinSi
	
	Si estrellas > 7 Y estrellas < 11
		Escribir "Gracias por tu opinión: Excelente, estrellas : ",estrellas
	FinSi
FinFuncion

Funcion nueve
	Definir n1 Como Entero
	Escribir "Ingresa un digito"
	Leer n1
	Si n1 MOD 12 =  0 Entonces
		Escribir "El numero es multiplo de 12, ", n1
	SiNo
		Si n1 MOD 9 = 0 Entonces
			Escribir "El numero es multiplo de 9, ", n1
		SiNo
			
			Si n1 MOD 3 = 0 Entonces
				Escribir "El numero es multiplo de 3, ", n1
				
			SiNo
				Escribir "El numero, ", n1, " no es multiplo de 3, 9, 12"
			Finsi
		FinSi
	FinSi
FinFuncion

Funcion dies
	Definir factura, propina, porcentaje Como Real
	Escribir "Ingresa el valor de tu factura"
	Leer factura
	Escribir "Ingresa el porcentaje de propina (Si no quiere, coloca 0)"
	Leer porcentaje
	
	Si porcentaje > 0 Entonces
		propina = factura * porcentaje / 100
		Escribir "El valor de tu factura es de ", factura
		Escribir "El porcentaje de tu factura es de ", porcentaje
		Escribir "El total a pagar = " ,factura, " + ", propina, " = " factura + propina
	SiNo
		Escribir "El total a pagar (no hay propina) = " factura
	FinSi
FinFuncion

Funcion once
	Definir compra Como Entero
	Escribir "Ingresa el valor de tu compra"
	Leer compra
	Si compra <= 10 Entonces
		Escribir "Tu compra es una categoria baja"
	SiNo
		Si compra > 10 Y compra < 30 Entonces
			
			Escribir "Tu compra es una categoria media"
		SiNo
			Si compra >= 30 Entonces
				Escribir "Tu compra es una categoria alta"
			FinSi
		FinSi
		
	FinSi
FinFuncion

Funcion doce
	Definir num Como Real
	Definir resultado Como Entero
	//Proceso 
	Escribir "Ingresar un num", num
	Leer num
	//verificar signo
	Si  num > 0 * 2 Entonces
		resultado <-trunc ( num * 2)
		Escribir "El num es positivo. El doble del num es ", resultado
	SiNo
		Si num <0 Entonces
			resultado <-trunc( Abs(num))
			Escribir "El num es negativo. Convertirlo a positivo ",resultado
		SiNo
			Escribir"El num es neutro"
		fin Si
	Fin Si
FinFuncion

Funcion trece
	Definir edad Como Entero
	Definir dinero Como Real
	//INICIALIR 
	//PEDIR EDAD AL USUARIO
	Escribir "Ingresar edad" 
	Leer edad
	//VERIFICAR CANTIDAD DE DINERO
	Escribir "ingrese que cantidad de dinero tiene"
	Leer dinero
	// VERIFICAR SI TIENE LA EDAD Y LA CANTIDAD DE DINERO PARA INGRESAR
	Si edad >= 18 Y dinero >= 1 Entonces
		Escribir "¡Bienvenido a la tienda"
	SiNo
		Escribir " Lo sentimos no puede ingresar a la tienda "
	Fin Si
	//SALIDA
FinFuncion

Funcion catorce
	Definir edad Como Entero
	Definir monto Como Real
	Definir descuento_especial Como Real
	Definir iva Como Real
	Definir descuento Como Real
	Definir total Como Real
	//inicializar
	edad=0; monto=0; descuento_especial=0; iva=0.15; descuento=0.5
	Escribir "Ingrese edad"
	Leer edad
	Escribir "Ingrese monto"
	Leer monto
	//proceso
	//descuento especial
	//cliente mayor a 60 años
	//compra mas de $50
	//si no lo es aplica iva 15% con descuento del %5
	Si edad >= 60  Y monto > 50 Entonces
		total<- monto +iva - descuento
		Escribir "Cliente mayor de 60 y compra mas de $50"
		Escribir "Aplica iva ", iva
		Escribir "Aplica descuento especial", descuento
		Escribir "Total de compra", total
	SiNo
		Si edad <  60 Y monto >50 Entonces
			total<- monto + iva - descuento*0.05
			Escribir " Cliente menor de 60 y compra mas de $50"
			Escribir "Aplica iva", iva
			Escribir "Aplica descuento" , descuento
			Escribir "Total de compra", total
			//salida
		Fin Si
		
	Fin Si
FinFuncion

Funcion quince
	//Entrada
	//Declarar las variables 
	Definir billetes10 Como Entero
	Definir billetes5 Como Entero
	Definir vuelto Como Entero
	//Proceso 
	//calculos exactos
	//billetes de $10 y $5
	//pedir valor vuelto
	//mostrar cuantos billetes de $10 y $5 necesita
	billetes10=10 ;billetes5=5;vuelto=0
	Escribir "Ingresar vuelto"
	Leer vuelto
	Si vuelto MOD 5<>0 Entonces
		Escribir "No es posible entregar vuelto "
	SiNo
		billetes10 <- trunc (vuelto / 10 )
		billetes5 <- ( vuelto -(billetes10 * 10)) / 5 
		Escribir "Cambio necesario"
        Escribir " billetes de $10",billetes10
        Escribir " billetes de $5", billetes5
	Fin Si
	//Salida
FinFuncion

Funcion diesiceis
	//ENTRADA
	//DECLARA LAS VARIABLES 
	Definir dia Como Entero
	//DIA DE LA SEMANA
	//PEDIR UN NUMERO 1 AL 7 
	Escribir "Ingresar un numero del 1 al 7"
	Leer dia
	Si dia < 1 O dia > 7 Entonces
        Escribir "Número inválido. Debe ser entre 1 y 7."
    Sino
        Segun dia Hacer
            1:
                Escribir "Lunes"
            2:
                Escribir "Martes"
            3:
                Escribir "Miércoles"
            4:
                Escribir "Jueves"
            5:
                Escribir "Viernes"
            6:
                Escribir "Sábado"
            7:
                Escribir "Domingo"
        FinSegun
    FinSi
	
FinFuncion

Funcion diesiciete
	Definir precio1 Como Entero
	Escribir  " Ingrese el precio el producto "; leer precio1
	si precio1<50 Entonces
		Escribir " El producto es economico " 
	sino 
		si precio1<=50 Entonces
			Escribir " El producto es regular "
		sino 
			si precio1>50 Entonces
				Escribir " El producto es caro " 
				
			FinSi
		FinSi
	FinSi
FinFuncion

Funcion diesiocho
	Definir año como entero 
	Escribir " ingrese un año para saber si es bisiesto "; leer año
	si (año  MOD 4 = 0 Y año MOD 100 <> 0 ) O (año MOD 400 = 0) Entonces
		Escribir " El año es bisiesto "
	sino 
		Escribir " El año no es bisiesto "
	FinSi
	
FinFuncion

Funcion diesinueve
	Definir horas, minutos, segundo1 Como Real 
	Escribir " Ingrese la hora"; leer horas
	minutos= horas * 60 
	segundo1= horas *3600
	Escribir " Equivale a ", minutos," minutos."
	Escribir " Equivale a ", segundo1, " segundos." 
FinFuncion

Funcion veinte
	Definir num, num2 Como Entero
	Escribir " Ingrese el primer numero"; leer num
	Escribir " Ingrese el segundo numero"; leer num2
	si num2=num * 3 Entonces
		Escribir " El segundo numero es el triple del primero "
	sino 
		Escribir " El segundo numero NO es triple del primero " 
	FinSi
FinFuncion

Funcion veintiuno
	Definir fiebre, dificultad, pecho Como caracter 
	Escribir "¿Tiene fiebre? (SI/NO):"
	Leer fiebre
	
	Escribir "¿Tiene dificultad para respirar? (SI/NO):"
	Leer dificultad
	
	Escribir "¿Tiene dolor en el pecho? (SI/NO):"
	Leer pecho
	
	Si fiebre = "SI" Y dificultad = "SI" Y pecho = "SI" Entonces
		Escribir "Alto riesgo: Derivar a emergencia"
	Sino
		Escribir "Riesgo bajo o medio"
	FinSi
FinFuncion

Funcion veintidos
	Mostrar "22-. Ejercicio 22: Clasificación de presión sistólica"
	
	Definir presion Como Real
	Escribir "Ingresa la presión sistólica actual"
	Leer presion
	
	Si presion < 90 O presion > 500 Entonces
		Escribir "Ingresa un valor correcto"
	SiNo
		Si presion < 90 Entonces
			Escribir "La presión es baja: ", presion
		SiNo
			Si presion >= 90 Y presion <= 120 Entonces
				Escribir "La presión es normal: ", presion
			SiNo
				Si presion >= 121 Y presion <= 139 Entonces
					Escribir "La presión está en Prehipertensión: ", presion
				SiNo
					Escribir "Tienes Hipertensión: ", presion
				FinSi
			FinSi
		FinSi
FinSi
FinFuncion

Funcion veintitres
	//entrada
	//definimos las variables como caracter 
	Definir nom Como Caracter
	//proceso
	//solicitamos al usuario ingrese su nombre
	Escribir "Ingrese su nombre:"
	Leer nom
	//salida
	//mostramos el saludo
	Escribir "------------------"
	Escribir "¡Hola, ",nom "!"
FinFuncion

Funcion veinticuatro
	//entrada
	//definimos las variables
	Definir letra Como Caracter
	//solicitamos que el usuario ingrese una letra
	Escribir "Ingrese una letra:"
	Leer letra
	//convertimos a minúscula para hacer la comparación más simple
	letra = Minusculas(letra)
	Escribir "----------------------------"
	//proceso y salida
	//verificamos si el carácter es una vocal y mostramos el resultado
	Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
		Escribir "El caracter es una vocal."
	SiNo
		Escribir "El caracter no es una vocal."
	FinSi
FinFuncion

Funcion veinticinco
	//Entrada
	//definimos las variables
	Definir letra Como Caracter
	//Proceso
	//solicitamos que el usuario ingrese una letra
	Escribir "Ingrese una letra:"
	Leer letra
	//convertimos a minúscula para hacer la comparación más simple
	letra = Minusculas(letra)
	//Salida
	Escribir "-------------------------------"
	//verificamos si el carácter es una consonante y mostramos el resultado
	Si letra <> "a" Y letra <> "e" Y letra <> "i" Y letra <> "o" Y letra <> "u" Entonces
		Escribir "El caracter es una consonante."
	SiNo
		Escribir "El caracter no es una consonante."
	FinSi
FinFuncion

Funcion veinticeis
	//entrada
	//definimos las variables
	Definir nom1,nom2 Como Caracter
	//solicitamos que el usuario ingrese un nombre
	Escribir "Ingrese un nombre:"
	Leer nom1
	//solicitamos que el usuario ingrese un segundo nombre
	Escribir "Ingrese otro nombre:"
	Leer nom2
	Escribir "------------------------"
	//proceso y salida
	//verificamos si los nombres son iguales y mostramos el resultado
	Si nom1 = nom2 Entonces
		Escribir "Los nombres son iguales."
	SiNo
		Escribir "Los nombres no son iguales."
	FinSi
FinFuncion

Funcion veintisiete
	//entrada
	//definimos las variables
	Definir letra,ma,mi Como Caracter
	//proceso
	//solicitamos al usuario que ingrese una letra
	Escribir "Ingrese una letra:"
	Leer letra
	ma = Mayusculas(letra)
    mi = Minusculas(letra)
	Escribir "------------------------"
	//verificamos si es mayuscula o minuscula y mostramos el resultado
	Si letra = ma Entonces
        Escribir "La letra ingresada esta en mayuscula."
    Sino
        Si letra = mi Entonces
            Escribir "La letra ingresada esta en minuscula."
        FinSi
    FinSi
	//salida
	//hacemos la comparacion con su version en mayuscula y minuscula
	Escribir "------------------------"
	Escribir "Version en mayuscula: ", ma
    Escribir "Version en minuscula: ", mi
FinFuncion

Funcion veintiocho
	//entrada
	//definimos las variables
	Definir nom,ape Como Caracter
	Definir nc Como Cadena
	//proceso
	//solicitamos al usuario que ingrese un nombre
	Escribir "Ingrese su nombre:"
	Leer nom
	//solicitamos al usuario que ingrese un apellido
	Escribir "Ingrese su apellido:"
	Leer ape
	//realizamos la combinacion en cadena
	nc = nom + " " + ape
	//salida
	//mostramos el resultado
	Escribir "---------------------"
	Escribir "Nombre completo: ", nc
FinFuncion

Funcion veintinueve
	Definir caracte como caracter
    Escribir "ponga una palabra"
    Leer caracte
    Si Longitud(caracte) < 6 Entonces
        Escribir "corta"
    Sino
        Si Longitud(caracte) > 6 Entonces
            Escribir "larga"
        FinSi
    FinSi
FinFuncion
Funcion treinta
	Definir palabra Como Caracter
	Escribir "Ingresa la palabra para convetirta"
	Leer palabra
	palabra = Mayusculas(palabra)
	Escribir "La cantidad de palabra es de ", Longitud(palabra)
	Escribir "Tu frase se cambio a mayusculas ", palabra
FinFuncion




