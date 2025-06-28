function nombre(){
    //Pedir un nombre completo y mostrar solo las iniciales
    debugger
    let nombre= document.getElementById("n").value;
    let palabras = nombre.split(' ');
    let iniciales = '';

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i] !== ''){
            iniciales += palabras[i][0].toUpperCase();
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`<strong>Nombre completo:</strong> ${nombre}<br>
                         <strong>Iniciales:</strong> ${iniciales}`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}