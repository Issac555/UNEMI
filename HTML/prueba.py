from fpdf import FPDF

# Crear un nuevo PDF con notación clara y explicaciones detalladas
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", 'B', 14)
pdf.cell(200, 10, "Solución de Límites – Paso a Paso", ln=True, align='C')
pdf.ln(5)
pdf.set_font("Arial", size=11)

# Lista de procedimientos con buena redacción
procedimientos_claros = [
    "a) lim(x → 2) [3x³ - 2x - 1]",
    "   Sustituimos directamente: 3(2)^3 - 2(2) - 1 = 24 - 4 - 1 = 19",
    "",
    "b) lim(x → 0) [(x² + 3)/(x - 2)]",
    "   Sustituimos directamente: (0² + 3)/(0 - 2) = 3 / (-2) = -3/2",
    "",
    "c) lim(x → pi) cos(9x - pi)",
    "   Sustituimos directamente: cos(9pi - pi) = cos(8pi) = 1",
    "   (Porque cos(2nπ) = 1 para cualquier entero n)",
    "",
    "d) lim(x → 3pi/2) [(cos(x) + 1)/sen(x)]",
    "   cos(3pi/2) = 0 y sen(3pi/2) = -1 → (0 + 1)/(-1) = -1",
    "",
    "i) lim(x → 2) ∛(x² - 31)",
    "   Sustituyendo: ∛(2² - 31) = ∛(-27) = -3",
    "",
    "j) lim(x → 3) [(x + 3)/(x³ - 1)]",
    "   Numerador: 3 + 3 = 6",
    "   Denominador: 3³ - 1 = 27 - 1 = 26",
    "   Resultado: 6 / 26 = 3/13",
    "",
    "k) lim(x → 1) [ln(x)/(3x + 1)]",
    "   ln(1) = 0 y 3(1) + 1 = 4 → Resultado: 0 / 4 = 0",
    "",
    "l) lim(x → 0) [sen(ax) + 1]",
    "   Cuando x → 0, sen(ax) → 0 ⇒ sen(ax) + 1 → 1",
    ""
]

for linea in procedimientos_claros:
    pdf.multi_cell(0, 8, linea)

# Guardar el PDF
pdf_final_path = "/mnt/data/Limites_Paso_a_Paso.pdf"
pdf.output(pdf_final_path)
