debugger
let inventario = [
     { productos: "Jabón", estado: true },
     { productos: "Agua", estado: true },
     { productos: "Cola", estado: true },
     { productos: "Gasolina", estado: true },
     { productos: "Arroz", estado: false }
]






function VentasSemanales() {
  let ventas = [];
  
 
    for (let i = 0; i < 7; i++) {
        let venta = prompt(`Ingresa la venta del día ${i + 1}`);
        ventas[i] = Number(venta); // Convertir a número
    }

    let totalVenta = 0;
    for (let i = 0; i < 7; i++) {
        totalVenta += ventas[i];
    }

    let promedio = totalVenta / 7;

    console.log(`La venta total es ${totalVenta}, el promedio de la venta es de ${promedio}`);
}

VentasSemanales();



function BuscarProducto() {
     let producto = prompt("Ingresa el nombre del producto");
     let encontrado = false;
     for (let i = 0; i < 5; i++){
          let product = inventario[i];
          let estate = product.estado === true ? "disponible" : "no disponible";
          if (producto == product.productos) {
               console.log(`El producto ${producto} y esta ${estate}`);
               encontrado = true;
               return;
          }
     }
     if (!encontrado) {
          console.log("El producto no se encuentra en la lista");
     }

}
BuscarProducto();


function PagarSueldo() {
     let horasTrabajadas = Number(prompt("Ingrese horas trabajadas"));
     let valorHoras = Number(prompt("Ingrese valor por hora"));
     let sueldo, horasExtras = 0, TotalExt = 0, TotalNorm = 0;

     if (horasTrabajadas > 40) {
          horasExtras = horasTrabajadas - 40;
          TotalExt = horasExtras * valorHoras * 1.5;
          TotalNorm = (horasTrabajadas - horasExtras) * valorHoras;
     } else {
          TotalNorm = horasTrabajadas * valorHoras;
     }

     sueldo = TotalNorm + TotalExt;

     console.log("Horas trabajadas: " + horasTrabajadas);
     console.log("Valor por hora: " + valorHoras);
     console.log("Valor horas extras: " + TotalExt);
     console.log("Horas extras: " + horasExtras);
     console.log("Sueldo total a pagar: " + sueldo);
}

PagarSueldo();
