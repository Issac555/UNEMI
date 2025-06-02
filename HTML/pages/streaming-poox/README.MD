# 🎧 POOX - Cálculo de descuento para compra de canciones

Este proyecto implementa un algoritmo que ajusta el descuento aplicado a la compra de canciones, dependiendo del tipo de suscripción y edad del usuario. El monto final incluye el IVA del 12%.

## 💻 Tecnologías usadas

- HTML5
- CSS3
- JavaScript

## 🎯 Reglas del negocio

- Todos los usuarios inician con 0% de descuento.
- Aumentos:
  - Suscriptor premium y menor de edad ➜ +15%
  - Suscriptor regular o mayor de edad ➜ +10%
  - No suscriptor ➜ 0%

## 📌 Funcionalidades

- Entrada del tipo de usuario (`premium`, `regular`, `ninguno`).
- Entrada de edad del usuario.
- Entrada del total de la compra.
- Cálculo:
  - Porcentaje de descuento
  - Valor del descuento
  - IVA del 12%
  - Total a pagar

## 🧪 Ejemplo de uso

- Usuario: `premium`, Edad: `15`, Compra: `$20`
- Descuento aplicado: `15% ➜ $3`
- IVA: `12% de $17 ➜ $2.04`
- **Total a pagar:** `$19.04`

## 📂 Estructura

