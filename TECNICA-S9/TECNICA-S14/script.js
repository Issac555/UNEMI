
        // 1. Contar palabras
        function contarPalabras(texto) {
            let count = 0;
            let enPalabra = false;

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let esEspacio = (char === ' ' || char === '\n' || char === '\t' || char === '\r');

                if (!esEspacio) {
                    if (!enPalabra) {
                        count++;
                        enPalabra = true;
                    }
                } else {
                    enPalabra = false;
                }
            }
            return count;
        }

        // 2. Contar signos de puntuación
        function contarSignosPuntuacion(texto) {
            let count = 0;
            let signos = ['.', ',', ';', ':', '!', '?', '¿', '¡', '"'];

            for (let i = 0; i < texto.length; i++) {
                for (let j = 0; j < signos.length; j++) {
                    if (texto[i] === signos[j]) {
                        count++;
                        break;
                    }
                }
            }
            return count;
        }

        // 3. Contar vocales
        function contarVocales(texto) {
            let count = 0;
            let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

            for (let i = 0; i < texto.length; i++) {
                for (let j = 0; j < vocales.length; j++) {
                    if (texto[i] === vocales[j]) {
                        count++;
                        break;
                    }
                }
            }
            return count;
        }

        // 4. Contar consonantes
        function contarConsonantes(texto) {
            let count = 0;
            let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let esLetra = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

                if (esLetra) {
                    let esVocal = false;
                    for (let j = 0; j < vocales.length; j++) {
                        if (char === vocales[j]) {
                            esVocal = true;
                            break;
                        }
                    }
                    if (!esVocal) {
                        count++;
                    }
                }
            }
            return count;
        }

        // 5. Contar dígitos
        function contarDigitos(texto) {
            let count = 0;

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                if (char >= '0' && char <= '9') {
                    count++;
                }
            }
            return count;
        }

        // 6. Contar palabras con mayúscula inicial
        function contarPalabrasMayuscula(texto) {
            let count = 0;
            let inicialePalabra = true;

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let esEspacio = (char === ' ' || char === '\n' || char === '\t' || char === '\r');

                if (!esEspacio) {
                    if (inicialePalabra) {
                        let esMayuscula = (char >= 'A' && char <= 'Z');
                        if (esMayuscula) {
                            count++;
                        }
                        inicialePalabra = false;
                    }
                } else {
                    inicialePalabra = true;
                }
            }
            return count;
        }

        // 7. Contar palabras con minúscula inicial
        function contarPalabrasMinuscula(texto) {
            let count = 0;
            let inicialePalabra = true;

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let esEspacio = (char === ' ' || char === '\n' || char === '\t' || char === '\r');

                if (!esEspacio) {
                    if (inicialePalabra) {
                        let esMinuscula = (char >= 'a' && char <= 'z');
                        if (esMinuscula) {
                            count++;
                        }
                        inicialePalabra = false;
                    }
                } else {
                    inicialePalabra = true;
                }
            }
            return count;
        }

        // 8. Contar párrafos
        function contarParrafos(texto) {
            if (texto.length === 0) return 0;

            let count = 1;
            let hayContenido = false;

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let esEspacio = (char === ' ' || char === '\n' || char === '\t' || char === '\r');

                if (!esEspacio) {
                    hayContenido = true;
                } else if (char === '\n' && hayContenido) {
                    count++;
                    hayContenido = false;
                }
            }
            return count;
        }

        // 9. Invertir el texto completo
        function invertirTexto(texto) {
            let resultado = '';

            for (let i = texto.length - 1; i >= 0; i--) {
                resultado += texto[i];
            }
            return resultado;
        }

        // 10. Contar todos los caracteres
        function contarCaracteres(texto) {
            return texto.length;
        }

        // 11. Buscar una palabra en el texto
        function buscarPalabra() {
            let palabra = document.getElementById('searchWord').value;
            let texto = document.getElementById('textarea').value;

            if (palabra.length === 0) {
                document.getElementById('searchResult').innerHTML = '<div class="search-result not-found">Por favor ingrese una palabra</div>';
                return;
            }

            let palabrasTexto = [];
            let palabraActual = '';

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let esEspacio = (char === ' ' || char === '\n' || char === '\t' || char === '\r');

                if (!esEspacio) {
                    palabraActual += char;
                } else {
                    if (palabraActual.length > 0) {
                        palabrasTexto.push(palabraActual);
                        palabraActual = '';
                    }
                }
            }
            if (palabraActual.length > 0) {
                palabrasTexto.push(palabraActual);
            }

            let encontrada = false;
            for (let i = 0; i < palabrasTexto.length; i++) {
                if (palabrasTexto[i] === palabra) {
                    encontrada = true;
                    break;
                }
            }

            let resultado = encontrada
                ? `✓ La palabra '${palabra}' sí se encuentra en el texto.`
                : `✗ La palabra '${palabra}' no se encuentra en el texto.`;

            let clase = encontrada ? 'found' : 'not-found';
            document.getElementById('searchResult').innerHTML = `<div class="search-result ${clase}">${resultado}</div>`;
        }

        // 12. Contar un carácter en el texto
        function contarCaracter() {
            let char = document.getElementById('charToCount').value;
            let texto = document.getElementById('textarea').value;

            if (char.length === 0) {
                document.getElementById('charResult').innerHTML = '<div class="search-result not-found">Por favor ingrese un carácter</div>';
                return;
            }

            let count = 0;
            for (let i = 0; i < texto.length; i++) {
                if (texto[i] === char) {
                    count++;
                }
            }

            let resultado = `El carácter '${char}' aparece ${count} veces.`;
            document.getElementById('charResult').innerHTML = `<div class="search-result found">${resultado}</div>`;
        }

        // 13. Contar caracteres en posiciones pares
        function contarPosicionesPares(texto) {
            let count = 0;

            for (let i = 0; i < texto.length; i += 2) {
                count++;
            }
            return count;
        }

        // 14. Contar caracteres en posiciones impares
        function contarPosicionesImpares(texto) {
            let count = 0;

            for (let i = 1; i < texto.length; i += 2) {
                count++;
            }
            return count;
        }

        // 15. Añadir fragmento al inicio y al final
        function anadirFragmento() {
            let fragmento = document.getElementById('fragment').value;
            let texto = document.getElementById('textarea').value;

            if (fragmento.length === 0) {
                document.getElementById('fragmentResult').innerHTML = '<div class="search-result not-found">Por favor ingrese un fragmento</div>';
                return;
            }

            let alInicio = fragmento + ' ' + texto;
            let alFinal = texto + ' ' + fragmento;

            let resultado = `
                <div style="margin-bottom: 12px;">
                    <strong>Al inicio:</strong>
                    <div class="text-output">${alInicio}</div>
                </div>
                <div>
                    <strong>Al final:</strong>
                    <div class="text-output">${alFinal}</div>
                </div>
            `;

            document.getElementById('fragmentResult').innerHTML = resultado;
        }

        // ==================== ACTUALIZACIÓN EN TIEMPO REAL ====================

        const textarea = document.getElementById('textarea');

        textarea.addEventListener('input', function() {
            actualizarAnalisis();
        });

        function actualizarAnalisis() {
            let texto = document.getElementById('textarea').value;

            // Cálculos
            let palabras = contarPalabras(texto);
            let signos = contarSignosPuntuacion(texto);
            let vocales = contarVocales(texto);
            let consonantes = contarConsonantes(texto);
            let digitos = contarDigitos(texto);
            let mayusculas = contarPalabrasMayuscula(texto);
            let minusculas = contarPalabrasMinuscula(texto);
            let parrafos = contarParrafos(texto);
            let caracteres = contarCaracteres(texto);
            let pares = contarPosicionesPares(texto);
            let impares = contarPosicionesImpares(texto);
            let invertido = invertirTexto(texto);

            // Tab 0: Básico
            document.getElementById('basicResults').innerHTML = `
                <div class="result-card">
                    <div class="result-value">${caracteres}</div>
                    <div class="result-label">Total de Caracteres</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${palabras}</div>
                    <div class="result-label">Palabras</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${vocales}</div>
                    <div class="result-label">Vocales</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${consonantes}</div>
                    <div class="result-label">Consonantes</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${digitos}</div>
                    <div class="result-label">Dígitos</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${parrafos}</div>
                    <div class="result-label">Párrafos</div>
                </div>
            `;

            // Tab 1: Puntuación
            document.getElementById('punctuationResults').innerHTML = `
                <div class="result-card">
                    <div class="result-value">${signos}</div>
                    <div class="result-label">Signos de Puntuación</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${caracteres - signos}</div>
                    <div class="result-label">Sin Puntuación</div>
                </div>
            `;

            // Tab 2: Mayúsculas/Minúsculas
            document.getElementById('caseResults').innerHTML = `
                <div class="result-card">
                    <div class="result-value">${mayusculas}</div>
                    <div class="result-label">Palabras con Mayúscula Inicial</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${minusculas}</div>
                    <div class="result-label">Palabras con Minúscula Inicial</div>
                </div>
            `;

            // Tab 3: Posiciones
            document.getElementById('positionResults').innerHTML = `
                <div class="result-card">
                    <div class="result-value">${pares}</div>
                    <div class="result-label">Caracteres en Posiciones Pares</div>
                </div>
                <div class="result-card">
                    <div class="result-value">${impares}</div>
                    <div class="result-label">Caracteres en Posiciones Impares</div>
                </div>
            `;

            // Tab 4: Invertido
            document.getElementById('invertedText').textContent = invertido || '(vacío)';
        }

        function switchTab(index) {
            // Ocultar todos los tabs
            for (let i = 0; i < 5; i++) {
                document.getElementById('tab' + i).classList.remove('active');
            }

            // Mostrar el tab seleccionado
            document.getElementById('tab' + index).classList.add('active');

            // Actualizar botones
            let btns = document.querySelectorAll('.tab-btn');
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
            }
            btns[index].classList.add('active');
        }

        // Inicialización
        actualizarAnalisis();