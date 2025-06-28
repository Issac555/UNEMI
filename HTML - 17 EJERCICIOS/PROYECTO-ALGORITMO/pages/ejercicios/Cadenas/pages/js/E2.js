function texto(){
    //Pedir un texto y mostrar cuantas veces se repite la letra "a"
    debugger
    let texto= document.getElementById("t").value;
    let c= 0;
    let textomin= texto.toLowerCase();

    for(let i = 0; i < textomin.length; i++){
        if(textomin[i] === 'a'){
            c++;
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`<strong>Texto:</strong> ${texto}<br>
                         <strong>Veces que se repite la letra "a":</strong> ${c}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}