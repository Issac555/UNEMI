function presentarTabla(){
     debugger
     let tab = 0, c = 1, res = 0;

     tab = parseInt(document.getElementById("tabla").value);
     r = document.getElementById("resultado-tabla");
     r.innerHTML = "Tabla del" + tab  + "<br>"

     while (c <= 12) {
          res = c + tab
          r.innerHTML = r.innerHTML + c + "+" + tab + "=" + res + "<br>"
          c = c + 1
     }
}   