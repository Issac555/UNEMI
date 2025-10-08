debugger

let libros = [
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 },
  { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", anio: 1967 },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 },
]



function mostrarLibros() {
  for (let i = 0; i < libros.length; i++){
    let libro = libros[i];
    console.log(`El libro ${libro.titulo}, fue escrito por ${libro.autor} en el año ${libro.anio}`);
  }
}
mostrarLibros();

console.log("---------------------------------------------------------------");

function BuscarLibro(nombre) {
  for (let i = 0; i < libros.length; i++) {
    let libro = libros[i];
    if (libro.titulo == nombre) {
      console.log(`El libro ${libro.titulo}, fue escrito por ${libro.autor} en el año ${libro.anio}`);
      return;
    }
    else {
      console.log("El libro no se encuentra en la lista");
    }
  }
}
BuscarLibro("El EK");

console.log("---------------------------------------------------------------");
function UpdateYear(nombre, year) { 
  for ( let i = 0; i < libros.length; i++)
  {
    let libro = libros[i];
    if (libro.titulo == nombre) {
      libro.anio = year;
      console.log(`El libro ${libro.titulo}, fue actualizado, año ${libro.anio}`);
      return;
    }
  }
}

UpdateYear("El Principito", 1950);

console.log("---------------------------------------------------------------");

function ConcatenarTitulo() {
  let titulos = "";
  for (let i = 0; i < libros.length; i++){
    let libro = libros[i];
    titulos += libro.titulo + ", ";
  }
  console.log(titulos);
}

ConcatenarTitulo();
///ARREGLO DE LIBROS


console.log("---------------------------------------------------------------");
// Agregar libros
AgregarLibro("Nuevo libro 1", "Sin autor", 1950);
AgregarLibro("Nuevo libro 2", "Sin autor", 1960);
AgregarLibro("Nuevo libro 3", "Sin autor", 1956);

function AgregarLibro(titulo, autor, year) {
  libros.push({ titulo, autor, anio: year });
}
//
mostrarLibros();

console.log("---------------------------------------------------------------");

// Eliminar libro
function EliminarUltimoLibro() {
 
  if (libros.length > 0) {
    let eliminado = libros.pop(); // ← elimina y devuelve el último libro
    console.log(`Se eliminó el libro "${eliminado.titulo}".`);
  } else {
    console.log("No hay libros para eliminar.");
  }
}

EliminarUltimoLibro();
console.log("---------------------------------------------------------------");
mostrarLibros();

function MostraUltimoLibro() {
  
  if (libros.length > 0) {
    libro = (libros[libros.length - 1]);
    console.log(`El último libro es "${libro.titulo}", escrito por ${libro.autor} en el año ${libro.anio}.`);
   }
}

MostraUltimoLibro();
console.log("---------------------------------------------------------------");

VerificarPila();

function VerificarPila() {
  if (libros.length === 0) {
    console.log("La pila está vacía.");
  } else {
    console.log(`La pila tiene ${libros.length} libros.`);
  }
}
console.log("---------------------------------------------------------------");

function VaciarPila() {
  while (libros.length > 0) {   // Mientras la pila tenga elementos
    let eliminado = libros.pop(); // Elimina el último libro
    console.log(`Se eliminó: ${eliminado.titulo}`);
  }
  console.log("La pila ha sido vaciada.");
}
VaciarPila();