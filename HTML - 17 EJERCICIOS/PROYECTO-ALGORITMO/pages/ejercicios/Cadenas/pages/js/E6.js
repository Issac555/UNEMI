function texto(){
    //Pedir un texto y reemplazar todas las "a" por "@"
    debugger
    let texto= document.getElementById("t").value;
    let textomin= texto.toLowerCase();
    let textonu= "";

    for(let i = 0; i < textomin.length; i++){
        if(textomin[i] === "a"){
            textonu += "@";
        } else {
            textonu += textomin[i];
        }
    }

    let resultado= document.getElementById("resultado");
    resultado.innerHTML=`<strong>Texto:</strong> ${texto}<br>
                         <strong>Texto nuevo:</strong> ${textonu}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}