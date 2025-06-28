function palabra(){
    //Contar cuantas veces aparece una letra especifica
    debugger
    let palabra= document.getElementById("p").value;
    let letra= document.getElementById("l").value;
    let veces= 0;
    let palabramin = palabra.toLowerCase();
    let letramin = letra.toLowerCase();

    for(let i = 0; i < palabramin.length; i++){
        if(palabramin[i] === letramin){
            veces++;
        }
    }

    let resultado= document.getElementById("resultado");
    resultado.innerHTML=`<strong>Palabra:</strong> ${palabra}<br>
                         <strong>La letra</strong> ${letra} <strong>aparece</strong> ${veces} <strong>veces</strong>`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML="<strong>Resultado:</strong>";
}