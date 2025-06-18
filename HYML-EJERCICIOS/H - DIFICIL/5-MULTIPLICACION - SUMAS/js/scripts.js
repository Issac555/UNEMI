function botoningresar() {
     const a = parseInt(document.getElementById("n").value);
     const b = parseInt(document.getElementById("n2").value);
     let mensaje = document.getElementById("resultado");

     if (isNaN(a) || isNaN(b)) {
         mensaje.innerText = "Por favor, ingresa dos números válidos.";
         return;
     }

     let resultado = 0;
     let proceso = `Simulación de ${a} x ${b}:\n\n`;

     for (let i = 1; i <= b; i++) {
         let antes = resultado;
         resultado += a;
         proceso += `Repetición ${i}: ${antes} + ${a} = ${resultado}\n`;
     }

     proceso += `\nResultado final: ${a} x ${b} = ${resultado}`;
     mensaje.innerText = proceso;
 }