// ===============================
// FUNCIONES REUTILIZABLES
// ===============================

// Mostrar resultado en el textarea
function mostrarResultado(texto) {
    document.getElementById("resultadoGeneral").value = texto;
}

// Positivo, negativo o cero
function analizarNumero(num) {
    if(num>0) return num + " es positivo";
    if(num<0) return num + " es negativo";
    return num + " es cero";
}

// Costo de lápices
function calcularCostoLapices(cantidad) {
    return cantidad >= 1000 ? (cantidad*0.85).toFixed(2) : (cantidad*0.9).toFixed(2);
}

// Descuento traje
function calcularDescuentoTraje(precio) {
    return precio > 2500 ? (precio*0.85).toFixed(2) : (precio*0.92).toFixed(2);
}

// Costo viaje
function calcularCostoViaje(tipo, km, personas) {
    if(personas<20) personas=20;
    let tarifa = {"A":2.0, "B":2.5, "C":3.0}[tipo.toUpperCase()];
    if(!tarifa) return null;
    let total = tarifa*km*personas;
    return {total: total.toFixed(2), porPersona: (total/personas).toFixed(2)};
}

// Costo cita consultorio
function costoCita(num) {
    if(num>=1 && num<=3) return 200;
    if(num>=4 && num<=5) return 150;
    if(num>=6 && num<=8) return 100;
    return 50;
}

// Precio venta Fábrica
function precioVentaFabrica(clave, mp) {
    let manoObra = mp*0.75;
    let gastos = mp*0.35;
    let costo = mp+manoObra+gastos;
    let precioVenta = costo*1.45;
    return {costo: costo.toFixed(2), precioVenta: precioVenta.toFixed(2)};
}

// Nuevo crédito banco
function nuevoCredito(tipo, credito) {
    let porcentaje = tipo==1?0.25:tipo==2?0.35:tipo==3?0.40:0.50;
    return (credito*(1+porcentaje)).toFixed(2);
}

// Costo envío paquetería
function costoEnvio(peso, zona) {
    if(peso>5) return "Error, excede 5 kg";
    let tarifa = {"América":50,"Europa":60,"Asia":80}[zona];
    if(!tarifa) return "Zona inválida";
    return (peso*tarifa).toFixed(2);
}

// Clasificación edades
function clasificarEdad(edad){
    if(edad>=1 && edad<=3) return "Infante";
    if(edad>=4 && edad<=13) return "Niño";
    if(edad>=14 && edad<=17) return "Adolescente";
    if(edad>=18 && edad<=35) return "Joven";
    if(edad>=36 && edad<=64) return "Adulto";
    if(edad>=65) return "Adulto mayor";
    return "Edad inválida";
}

// Día de la semana
function diaSemana(num){
    let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    return num>=1 && num<=7 ? dias[num-1] : "Error";
}

// ===============================
// BLOQUE A
// ===============================
function resA1()
{
  mostrarResultado(analizarNumero(parseFloat(document.getElementById("a1").value)));
}
function resA2()
{
  mostrarResultado("Total: $" + calcularCostoLapices(parseInt(document.getElementById("a2").value)));
}
function resA3()
{
  mostrarResultado("Precio final: $" + calcularDescuentoTraje(parseFloat(document.getElementById("a3").value)));
}
function resA4(){
    let r = calcularCostoViaje(document.getElementById("a4_tipo").value, parseFloat(document.getElementById("a4_km").value), parseInt(document.getElementById("a4_personas").value));
    mostrarResultado(r?`Total: $${r.total} – x persona: $${r.porPersona}`:"Tipo inválido");
}
function resA5(){
    let n = parseInt(document.getElementById("a5").value), acum=0;
    let costo = costoCita(n); acum += costo;
    mostrarResultado(`Costo cita ${n}: $${costo} – Acumulado: $${acum}`);
}
function resA6(){
    let r = precioVentaFabrica(parseInt(document.getElementById("a6_clave").value), parseFloat(document.getElementById("a6_mp").value));
    mostrarResultado(`Costo: $${r.costo} – Precio venta: $${r.precioVenta}`);
}
function resA7()
{
  mostrarResultado("Nuevo crédito: $" + nuevoCredito(parseInt(document.getElementById("a7_tipo").value), parseFloat(document.getElementById("a7_credito").value)));
}
function resA8() {
  mostrarResultado("Costo envío: $" + costoEnvio(parseFloat(document.getElementById("a8_peso").value), document.getElementById("a8_zona").value));
}
function resA9() {
  mostrarResultado(clasificarEdad(parseInt(document.getElementById("a9").value)));
}
function resA10() {
  mostrarResultado(diaSemana(parseInt(document.getElementById("a10").value)));
}

// ===============================
// BLOQUE B – CICLOS
// ===============================
function resB1(){
    let nums = document.getElementById("b1").value.split(",").map(Number);
    let salida = nums.map(n=>analizarNumero(n)).join("\n");
    mostrarResultado(salida);
}

function resB2(){
    let pedidos = document.getElementById("b2").value.split(",").map(Number);
    let salida = pedidos.map((p,i)=>`Pedido ${i+1}: $${calcularCostoLapices(p)}`).join("\n");
    mostrarResultado(salida);
}

function resB3(){
    let trajes = document.getElementById("b3").value.split(",").map(Number);
    let salida = trajes.map((t,i)=>`Traje ${i+1}: $${calcularDescuentoTraje(t)}`).join("\n");
    mostrarResultado(salida);
}

function resB4(){
    let viajes = document.getElementById("b4").value.split(";").map(v=>v.split(","));
    let salida = viajes.map((v,i)=>{
        let r = calcularCostoViaje(v[0], parseFloat(v[1]), parseInt(v[2]));
        return r?`Viaje ${i+1}: Total $${r.total} – x persona $${r.porPersona}`:`Viaje ${i+1}: Tipo inválido`;
    }).join("\n");
    mostrarResultado(salida);
}

function resB5(){
    let citas = document.getElementById("b5").value.split(",").map(Number);
    let acum = 0;
    let salida = citas.map((c,i)=>{
        let costo = costoCita(c);
        acum += costo;
        return `Cita ${c}: $${costo} – Acumulado: $${acum}`;
    }).join("\n");
    mostrarResultado(salida);
}

function resB6(){
    let articulos = document.getElementById("b6").value.split(";").map(a=>a.split(","));
    let salida = articulos.map((a,i)=>{
        let r = precioVentaFabrica(parseInt(a[0]), parseFloat(a[1]));
        return `Artículo ${i+1}: PV $${r.precioVenta}`;
    }).join("\n");
    mostrarResultado(salida);
}

function resB7(){
    let clientes = document.getElementById("b7").value.split(";").map(c=>c.split(","));
    let salida = clientes.map((c,i)=>`Cliente ${i+1}: Nuevo crédito $${nuevoCredito(parseInt(c[0]), parseFloat(c[1]))}`).join("\n");
    mostrarResultado(salida);
}

function resB8(){
    let paquetes = document.getElementById("b8").value.split(";").map(p=>p.split(","));
    let salida = paquetes.map((p,i)=>`Paquete ${i+1}: ${costoEnvio(parseFloat(p[0]), p[1])}`).join("\n");
    mostrarResultado(salida);
}

function resB9(){
    let edades = document.getElementById("b9").value.split(",").map(Number);
    let salida = edades.map(e=>`${e} → ${clasificarEdad(e)}`).join("\n");
    mostrarResultado(salida);
}

function resB10(){
    let nums = document.getElementById("b10").value.split(",").map(Number);
    let salida = nums.map(n=>`${n} → ${diaSemana(n)}`).join("\n");
    mostrarResultado(salida);
}

// ================================
// FUNCIONES BLOQUE C – HTML
// ================================

function resC1() {
    const numeros = document.getElementById("c1").value.split(",").map(Number);
    mostrarResultado(numeros.map(analizarNumero).join("\n"));
}

function resC2() {
    const pedidos = document.getElementById("c2").value.split(",").map(Number);
    mostrarResultado(pedidos.map((cant, i) => `Pedido ${i + 1}: $${calcularCostoLapices(cant).toFixed(2)}`).join("\n"));
}

function resC3() {
    const precios = document.getElementById("c3").value.split(",").map(Number);
    mostrarResultado(precios.map((precio, i) => `Traje ${i + 1}: $${calcularPrecioTraje(precio).toFixed(2)}`).join("\n"));
}

function resC4() {
    const viajes = document.getElementById("c4").value.split(";");
    mostrarResultado(viajes.map((v, i) => {
        const [tipo, km, personas] = v.split(",");
        return `Viaje ${i + 1}: ${calcularCostoViaje(tipo, Number(km), Number(personas))}`;
    }).join("\n"));
}

function resC5() {
    const citas = document.getElementById("c5").value.split(",").map(Number);
    let acumulado = 0;
    mostrarResultado(citas.map(cita => {
        const costo = calcularCostoCita(cita);
        acumulado += costo;
        return `Cita ${cita}: $${costo} – Acumulado: $${acumulado}`;
    }).join("\n"));
}

function resC6() {
    const articulos = document.getElementById("c6").value.split(";");
    mostrarResultado(articulos.map((a, i) => {
        const [clave, mp] = a.split(",");
        return `Artículo ${i + 1}: PV = $${calcularPrecioVenta(Number(clave), Number(mp))}`;
    }).join("\n"));
}

function resC7() {
    const clientes = document.getElementById("c7").value.split(";");
    mostrarResultado(clientes.map((c, i) => {
        const [tipo, credito] = c.split(",");
        return `Cliente ${i + 1}: Nuevo crédito $${calcularNuevoCredito(Number(tipo), Number(credito))}`;
    }).join("\n"));
}

function resC8() {
    const paquetes = document.getElementById("c8").value.split(";");
    mostrarResultado(paquetes.map((p, i) => {
        const [peso, zona] = p.split(",");
        return `Paquete ${i + 1}: ${calcularEnvio(Number(peso), zona)}`;
    }).join("\n"));
}

function resC9() {
    const edades = document.getElementById("c9").value.split(",").map(Number);
    mostrarResultado(edades.map(e => `${e} → ${clasificarEdad(e)}`).join("\n"));
}

function resC10() {
    const numeros = document.getElementById("c10").value.split(",").map(Number);
    mostrarResultado(numeros.map(n => `${n} → ${diaSemana(n)}`).join("\n"));
}|