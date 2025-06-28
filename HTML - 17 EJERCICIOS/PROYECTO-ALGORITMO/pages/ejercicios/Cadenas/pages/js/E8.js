function frases(){
    //Pedir dos frases e indicar cual tiene mayor cantidad de caracteres
    debugger
    let frase= document.getElementById("f").value;
    let frase2= document.getElementById("f2").value;
    let f="";
    let ca1 = frase.replace(/ /g, '').length;
    let ca2 = frase2.replace(/ /g, '').length;

    if(ca1 > ca2){
        f = `"${frase}" (${ca1} caracteres)`;
    } else if(ca2 > ca1){
        f = `"${frase2}" (${ca2} caracteres)`;
    } else {
        f = `"Ambas frases tienen la misma cantidad de caracteres" (${ca1} letras)`;
    }

    let resultado= document.getElementById("resultado");
    resultado.innerHTML=`<strong>Primera frase:</strong> ${frase}<br>
                         <strong>Segunda frase:</strong> ${frase2}<br>
                         <strong>La frase con mayor cantidad de caracteres es:</strong> ${f}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}