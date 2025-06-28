function palabra(){
    //Verificar si una palabra es un palindromo
    debugger
    let palabra= document.getElementById("p").value;
    let pa= "";
    let palabralim = palabra.toLowerCase();
    let palabrain = '';
    
    for(let i = palabralim.length - 1; i >= 0; i--){
        palabrain += palabralim[i];
    }

    if(palabralim === palabrain){
        pa = "SÍ es un palíndromo";
    } else {
        pa = "NO es un palíndromo";
    }

    let resultado= document.getElementById("resultado");
    resultado.innerHTML=`<strong>Palabra:</strong> ${palabra}<br>
                         <strong>La palabra</strong> ${palabra} ${pa}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}