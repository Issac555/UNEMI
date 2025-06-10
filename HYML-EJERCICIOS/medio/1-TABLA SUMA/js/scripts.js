function mostrarTabla() {
    const x = parseInt(document.getElementById('base').value);
    let i = 1;
    let resultado = `Tabla de sumar del ${x}:\n======================\n`;
  
    while (i <= 12) {
      resultado += `${i} + ${x} = ${i + x}\n`;
      i++;
    }
  
    resultado += "======================\nTabla completada";
    document.getElementById('resultado6').textContent = resultado;
  }
  