function textos(){
    //Pedir dos textos y decir cual tiene mas letras
    debugger
    let texto1= document.getElementById("t").value;
    let texto2= document.getElementById("t2").value;
    let texto= "";
    let letras1 = texto1.replace(/ /g, '').length;
    let letras2 = texto2.replace(/ /g, '').length;

    if(letras1 > letras2){
        texto = `"${texto1}" (${letras1} letras)`;
    } else if(letras2 > letras1){
        texto = `"${texto2}" (${letras2} letras)`;
    } else {
        texto = `"Ambos textos tienen la misma cantidad de letras" (${letras1} letras)`;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`<strong>Primer texto:</strong> ${texto1}<br>
                         <strong>Segundo texto:</strong> ${texto2}<br>
                         <strong>El texto con mas palabras es:</strong> ${texto}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}