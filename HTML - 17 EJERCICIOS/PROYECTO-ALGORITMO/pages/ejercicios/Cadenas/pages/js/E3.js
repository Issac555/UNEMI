function cadena(){
    //Invertir una cadena ingresada
    debugger
    let cadena= document.getElementById("c").value;
    let cadenain = '';

    for(let i = cadena.length - 1; i >= 0; i--){
        cadenain += cadena[i];
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`<strong>cadena:</strong> ${cadena}<br>
                         <strong>Cadena invertida:</strong> ${cadenain}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}