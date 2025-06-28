function palabra(){
    //Pedir una palabra y mostrar cuantas letras tiene
    debugger
    let palabra= document.getElementById("p").value;
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`<strong>Palabra:</strong> ${palabra}<br>
                         <strong>Cantidad de letras:</strong> ${palabra.length}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}