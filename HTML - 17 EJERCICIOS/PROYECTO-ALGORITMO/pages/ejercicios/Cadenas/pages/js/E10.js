function oracion(){
    //Dividir una oracion en palabras y mostrarlas una por una
    debugger
    let oracion= document.getElementById("o").value;
    let odiv= "";
    let palabras = oracion.split(' ');

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].trim() !== ''){
            odiv += `${i + 1}. ${palabras[i]}<br>`;
        }
    }

    let resultado= document.getElementById("resultado");
    resultado.innerHTML=`<strong>Oracion:</strong> ${oracion}<br>
                         <strong>Oracion dividida en palabras:</strong><br>
                         ${odiv}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}