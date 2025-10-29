// POO

debugger;

// Contar caracteres del nombre de un empleado
function longitud(empleado) {
  let nombre = empleado.nombre;
  let lon = 0;
  for (let i = 0; i < nombre.length; i++) {
    lon++;
  }
  return lon;
}

// Contar apariciones de una vocal en el nombre de un producto
function contadorVocal(producto, vocal) {
  let nombre = producto.nombre;
  let cv = 0;
  for (let i = 0; i < nombre.length; i++) {
    if (nombre[i].toLowerCase() === vocal.toLowerCase()) {
      cv++;
    }
  }
  return cv;
}

// Invertir el nombre de una persona
function reverse(persona) {
  let nombre = persona.nombre;
  let invertido = "";
  for (let i = nombre.length - 1; i >= 0; i--) {
    invertido += nombre[i];
  }
  return invertido;
}

// Comparar longitudes de nombres entre dos empleados
function compararLongitudes(empl1, empl2) {
  let len1 = empl1.nombre.length;
  let len2 = empl2.nombre.length;

  if (len1 > len2) {
    console.log(`El empleado con el nombre más largo es '${empl1.nombre}' (${len1} letras).`);
  } else if (len2 > len1) {
    console.log(`El empleado con el nombre más largo es '${empl2.nombre}' (${len2} letras).`);
  } else {
    console.log(`Ambos empleados tienen nombres con la misma longitud (${len1} letras).`);
  }
}

// Obtener iniciales del cargo de un empleado
function obtenerIniciales(empleado) {
  let cargo = empleado.cargo;
  let palabras = cargo.split(" ");
  let iniciales = "";

  for (let i = 0; i < palabras.length; i++) {
    iniciales += palabras[i][0].toUpperCase() + ".";
  }
  return iniciales;
}

// Contar caracteres de varios empleados
function contarCaracteres(empleados) {
  for (let i = 0; i < empleados.length; i++) {
    let emp = empleados[i];
    console.log(`${emp.nombre} → ${emp.nombre.length} caracteres`);
  }
}

// Contar cuántas veces aparece una vocal en nombres de empleados
function contarVocalEnNombres(empleados, vocal) {
  for (let i = 0; i < empleados.length; i++) {
    let nombre = empleados[i].nombre.toLowerCase();
    let cont = 0;
    for (let j = 0; j < nombre.length; j++) {
      if (nombre[j] === vocal.toLowerCase()) {
        cont++;
      }
    }
    console.log(`${empleados[i].nombre} → ${cont} veces '${vocal}'`);
  }
}

// Invertir nombres de varios empleados
function invertirNombres(empleados) {
  for (let i = 0; i < empleados.length; i++) {
    let nombre = empleados[i].nombre;
    let invertido = "";
    for (let j = nombre.length - 1; j >= 0; j--) {
      invertido += nombre[j];
    }
    console.log(nombre + " → " + invertido);
  }
}

// Buscar la ciudad más larga
function contarCaracterCiudad(empleados) {
  let ciudadMasLarga = empleados[0].ciudad;
  let nombreEmpleado = empleados[0].nombre;

  for (let i = 1; i < empleados.length; i++) {
    let ciudadActual = empleados[i].ciudad;
    let nombreActual = empleados[i].nombre;

    if (ciudadActual.length > ciudadMasLarga.length) {
      ciudadMasLarga = ciudadActual;
      nombreEmpleado = nombreActual;
    } else if (ciudadActual.length === ciudadMasLarga.length) {
      console.log(`La ciudad ${ciudadActual} tiene la misma longitud que ${ciudadMasLarga}`);
    }
  }

  console.log(`La ciudad más larga es ${ciudadMasLarga}, donde vive ${nombreEmpleado}`);
}

// Obtener iniciales de cargos de varios empleados
function obtenerInicialesCargos(empleados) {
  for (let i = 0; i < empleados.length; i++) {
    let palabras = empleados[i].cargo.split(' ');
    let iniciales = "";
    for (let j = 0; j < palabras.length; j++) {
      if (palabras[j].length > 0) {
        iniciales += palabras[j][0].toUpperCase() + ".";
      }
    }
    console.log(empleados[i].cargo + " → " + iniciales);
  }
}

// Promedio de notas mayores o iguales a 70
function promedioMayores70(empleados) {
  let suma = 0;
  let cont = 0;

  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].nota >= 70) {
      suma += empleados[i].nota;
      cont++;
    }
  }

  let promedio = suma / cont;
  console.log("Promedio de notas ≥ 70:", promedio.toFixed(2));
}

// Contar edades inválidas (<=0)
function contarEdadesInvalidas(empleados) {
  let invalidas = 0;

  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].edad <= 0) {
      invalidas++;
    }
  }

  console.log("Cantidad de edades inválidas:", invalidas);
}

// Promedio de edades (mayores y menores de edad)
function promedioEdades(empleados) {
  let sumaMay = 0, contMay = 0;
  let sumaMen = 0, contMen = 0;

  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].edad >= 18) {
      sumaMay += empleados[i].edad;
      contMay++;
    } else {
      sumaMen += empleados[i].edad;
      contMen++;
    }
  }

  let promMay = sumaMay / contMay;
  let promMen = sumaMen / contMen;

  console.log("Promedio de mayores:", promMay.toFixed(2));
  console.log("Promedio de menores:", promMen.toFixed(2));
}

// Mostrar tabla del salario
function tablaSalario(empleado) {
  console.log("Tabla del salario (" + empleado.salario + "):");
  for (let i = 1; i <= 10; i++) {
    console.log(empleado.salario * i);
  }
}

// Promedio de salarios pares e impares
function promedioSalariosParImpar(empleados) {
  let sumaPar = 0, contPar = 0;
  let sumaImpar = 0, contImpar = 0;

  for (let i = 0; i < empleados.length; i++) {
    let salario = empleados[i].salario;
    if (salario % 2 === 0) {
      sumaPar += salario;
      contPar++;
    } else {
      sumaImpar += salario;
      contImpar++;
    }
  }

  let promPar = sumaPar / contPar;
  let promImpar = sumaImpar / contImpar;

  console.log("Promedio de salarios pares:", promPar.toFixed(2));
  console.log("Promedio de salarios impares:", promImpar.toFixed(2));
}


let emp1 = { nombre: "Ana", edad: 30 };
console.log("Longitud del nombre:", longitud(emp1));

let producto = { nombre: "Programador", precio: 100 };
console.log("Cantidad de 'o':", contadorVocal(producto, "o"));

let persona = { nombre: "Carlos", edad: 30 };
console.log("Nombre invertido:", reverse(persona));

let empl1 = { nombre: "Ana", edad: 25 };
let empl2 = { nombre: "Jorge", edad: 18 };
compararLongitudes(empl1, empl2);

let empleado = { cargo: "Director General Académico" };
console.log("Iniciales del cargo:", obtenerIniciales(empleado));

let empleados4 = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Santiago", edad: 30 },
  { nombre: "Rosa", edad: 27 }
];
contarCaracteres(empleados4);

let empleados6 = [
  { nombre: "Andrea" },
  { nombre: "Marcos" },
  { nombre: "Lucía" }
];
contarVocalEnNombres(empleados6, "a");

let empleados7 = [
  { nombre: "Luis" },
  { nombre: "Carmen" },
  { nombre: "Pedro" }
];
invertirNombres(empleados7);

let empleadosCiudad = [
  { nombre: "Carlos", ciudad: "Milagro" },
  { nombre: "Andrea", ciudad: "Guayaquil" },
  { nombre: "José", ciudad: "Quito" }
];
contarCaracterCiudad(empleadosCiudad);

let empleadosCargo = [
  { cargo: "Director General Académico" },
  { cargo: "Jefe de Laboratorio" },
  { cargo: "Asistente Administrativo" }
];
obtenerInicialesCargos(empleadosCargo);

let empleadosNotas = [
  { nombre: "Ana", nota: 65 },
  { nombre: "Luis", nota: 80 },
  { nombre: "Carla", nota: 90 },
  { nombre: "José", nota: 50 },
  { nombre: "Marta", nota: 75 }
];
promedioMayores70(empleadosNotas);

let empleadosEdad = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: -5 },
  { nombre: "Carla", edad: 0 }
];
contarEdadesInvalidas(empleadosEdad);

let empleados3 = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Carla", edad: 35 },
  { nombre: "José", edad: 15 },
  { nombre: "Marta", edad: 18 }
];
promedioEdades(empleados3);

let empleadoSalario = { nombre: "Luis", salario: 300 };
tablaSalario(empleadoSalario);

let empleadosSalarios = [
  { nombre: "Ana", salario: 450 },
  { nombre: "Luis", salario: 500 },
  { nombre: "Carla", salario: 625 },
  { nombre: "José", salario: 800 },
  { nombre: "Marta", salario: 705 }
];
promedioSalariosParImpar(empleadosSalarios);
