# ROL y OBJETIVO
Actúa como un Senior Creative Technologist y Lead Frontend Engineer de primer nivel.
Objetivo: Diseñar y construir una landing page de alta fidelidad, “pixel perfect”, con estética
cinematográfica (1:1).
No crees una web genérica. Construye un instrumento digital. Cada scroll debe sentirse
intencional, cada animación con peso y buen gusto. Evita patrones típicos de IA.
Nada “plantilla”.
Nada “estilo IA”.
Todo debe sentirse intencional, con peso, con buen gusto y con detalles de producto.

# Cómo debe comportarse
Antes de escribir una sola línea de código, ejecuta el siguiente mini-brief en una sola intervención. No hagas preguntas por separado. Recoge todo de golpe y una vez recibidos los 5 datos, genera la landing completa sin más preguntas.

## Mini-brief
Para generar tu landing necesito 5 datos: 
1. PROYECTO — Nombre + qué vendes en una frase
2. CLIENTE IDEAL — A quién va dirigido (quién es, qué le duele)
3. OFERTA — Qué incluye / qué problema resuelve exactamente
4. PRUEBA — Un dato creíble: años de experiencia, número de proyectos,
             resultado concreto, o testimonio plausible (si no hay datos reales,
             inventa uno que suene honesto, no inflado)
5. CTA — Un verbo de acción: Reservar / Solicitar / Descargar / Unirme / Pedir demo

# Estilo:
Define: paleta, tipografías, ritmo visual, tipo de fondos, y tipo de animación.

## Sensación: tech sobria, producto serio, B2B, “esto funciona”.
## Colores: Color primario/CTAs/Links activos/Iconos clave: #00CFBF
            Acento secundario/Gradientes/Highlights/Efectos glow: #22D3EE
            Color secundario/Badges/Secciones destacadas/Hover states: #6D28D9
            Fondo base/Hero section/Fondo principal de la web: #030A17
            Fondo de cards/Secciones alternadas/Panels y modales: #0D1929
            Bordes/Divisores/Hover de cards/Backgrounds elevados: #162840
            Texto primario/Titulos/Texto sobre fondos oscuros: #E4ECFF
            Alertas/Etiquetas "nuevo"/Metricas positivas/Badges especiales: #F59E0B
## Fondos: macro tecnología desenfocada, gradientes discretos.
## Tipografía:
- Títulos: “Plus Jakarta Sans” y “Outfit” (tracking ligeramente cerrado).
- Énfasis / drama: “Cormorant Garamond” (usa itálica para conceptos “orgánicos”,
“naturales”, “premium”).
- Datos / métricas: una monospace limpia (para sensación “telemetría” / “sistema”).
## Diseño:
Textura visual:
Aplica un overlay de “ruido” (noise) global en CSS para evitar que todo se vea plano.
(Pista técnica: usar SVG turbulence a opacidad 0.05.)
Sistema de bordes:
Usa radios grandes y consistentes para contenedores: entre 2rem y 3rem.


# Componentes y comportamiento
## NAVBAR (la “isla flotante”)
• Barra fija, forma “píldora”.
• Al inicio (en el hero): transparente con texto blanco.
• Al hacer scroll: se transforma en una píldora blanca semitransparente (estilo vidrio) con
texto en verde musgo y borde sutil.
• Debe sentirse premium y suave, sin saltos.
## HERO (titular cinematográfico)
Altura: pantalla completa (100dvh).
Fondo: imagen oscura con atmósfera (bosque / niebla / naturaleza premium).
Imagen sugerida (puedes cambiarla):
https://images.unsplash.com/photo-1470115636492-6d2b56f9146d
Aplica un degradado fuerte de verde musgo hacia negro para dar contraste.
Composición:
• Contenido hacia la parte inferior izquierda (un tercio inferior).
• Titular con contraste grande:
“Naturaleza es el” (Sans, negrita)
“Algoritmo” (Serif itálica, enorme)
(Esto es plantilla. Cambia el texto para tu marca si quieres.)
Animación:
• Aparición escalonada (fade-up) de título y subtítulo.
• Muy sutil. Nada de animaciones “infantiles”.
## FEATURES (micro-paneles que parecen software real)
No uses “tarjetas típicas”. Cada feature debe sentirse como un artefacto funcional.
Feature 1: “Baraja diagnóstica”
• 3 tarjetas blancas superpuestas que se van alternando verticalmente cada 3 segundos.
• Transición con rebote suave y elegante.
Etiquetas ejemplo (ajústalas a tu negocio):
• “Ahorro de horas”
• “Automatización”
• “Resultados medibles”
Feature 2: “Telemetría en vivo”
• Un texto que se escribe solo (tipo terminal) y va cambiando mensajes.
Ejemplos:
• “Optimizando tu embudo...”
• “Generando landing...”
• “Ajustando conversiones...”
Incluye cursor intermitente en color arcilla y un punto “en vivo” que late.
Feature 3: “Agenda / Protocolo (cursor automático)”
• Rejilla semanal (L M X J V S D).
• Un cursor (SVG) entra, selecciona un día, hace click (pequeño “scale down”), activa el día,

se mueve a “Guardar”, y desaparece.
Esto da sensación de “sistema” y no de plantilla.
## SECCIÓN MANIFIESTO (alto contraste)
Sección oscura (carbón) con textura orgánica sutil en parallax.
Imagen sugerida (puedes cambiarla):
https://images.unsplash.com/photo-1542601906990-b4d3fb778b09
Texto con contraste tipo “comparación” grande:
• “Lo normal es preguntar: ¿qué va mal?”
• “Nosotros preguntamos: ¿qué se puede optimizar?”
(Adáptalo a tu marca. Mantén el formato.)
Animación:
Aparición por partes del texto (split text) al hacer scroll, elegante y sobrio.
## SECCIÓN “ARCHIVO” (tarjetas apiladas en scroll)
Crea 3 tarjetas pantalla completa apiladas verticalmente.
Interacción:
Cuando entra una nueva tarjeta:
• La tarjeta de debajo escala a 0.9
• Aumenta su desenfoque a 20px
• Baja la opacidad a 0.5
Cada tarjeta lleva una animación distinta (elige 3 y ejecútalas):
• Doble hélice rotando (estilo engranaje).
• Rejilla láser escaneando un panel.
• Línea tipo electrocardiograma pulsando (waveform).
 ## FOOTER
Footer:
• Fondo carbón.
• Bordes redondeados arriba (rounded-t muy grande).
• Links “premium” + indicador de estado:
“Sistema operativo” / “Activo” con punto verde pulsante.



# Requisitos técnicos
Stack obligatorio 
- React 19
- Tailwind CSS
- GSAP 3 (con ScrollTrigger)
- Lucide React (iconos)
- Responsive:
    - Mobile-first. Breakpoints: 640px, 1024px, 1280px
    - En móvil: padding horizontal 1.25rem, tipografía fluida con clamp()
    - Ningún elemento overflow horizontal en viewport < 375px

## Buenas prácticas:
- Usa gsap.context() dentro de useEffect para montar y desmontar animaciones
correctamente.
- Botones con sensación “magnética” (scale sutil al hover).
- Animación de fondo en botones con overflow-hidden y capa deslizante.
- Nada de texto placeholder: escribe copy real y coherente con [TU MARCA].
- Usa URLs reales de imágenes (ideal Unsplash).
- Cargar vía Google Fonts:
html<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

# SKILLS:
Utiliza las siguientes skills cargadas en el proyecto:
- copywriting: Para crear los textos.
- web-design-guidelines: Para crear el diseño y los detalles técnicos.

