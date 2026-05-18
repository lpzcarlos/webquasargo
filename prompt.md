# Prompt Antigravity — Landing `/chatbot`

---

## CONTEXTO DEL PROYECTO

Esta página es una nueva ruta (`/chatbot`) del sitio web principal de Quasar Go (quasargo.com). Debe heredar completamente los estilos, tipografía, paleta de colores, componentes y sistema de diseño del proyecto existente. No crear un estilo propio: usar las variables CSS, clases, fuentes y tokens del proyecto base.

---

## OBJETIVO DE LA PÁGINA

Landing page de producto para el **Chatbot con IA de Quasar Go**: un asistente conversacional para empresas que resuelve dudas de clientes, mantiene conversaciones naturales y agenda citas automáticamente. Incluye un panel de gestión para la empresa.

---

## DATOS DE LA CONVERSACIÓN (JSON editable)

Los mensajes que aparecen dentro del mockup del iPhone deben cargarse desde el siguiente objeto JSON, definido como constante al inicio del componente o archivo. Esto permite modificar la conversación fácilmente sin tocar el código de renderizado.

```json
{
  "contactName": "Clínica Sonrisa",
  "contactAvatar": "🦷",
  "messages": [
    {
      "id": 1,
      "role": "bot",
      "text": "👋 Hola! Soy el asistente de Clínica Sonrisa. ¿En qué puedo ayudarte hoy?",
      "time": "10:01"
    },
    {
      "id": 2,
      "role": "user",
      "text": "Hola, quería saber el precio de una limpieza dental",
      "time": "10:02"
    },
    {
      "id": 3,
      "role": "bot",
      "text": "¡Claro! Una limpieza dental profesional tiene un precio de 60€ e incluye revisión, eliminación de sarro y pulido. ¿Te gustaría reservar una cita?",
      "time": "10:02"
    },
    {
      "id": 4,
      "role": "user",
      "text": "Sí, me interesa. ¿Tenéis disponibilidad esta semana?",
      "time": "10:03"
    },
    {
      "id": 5,
      "role": "bot",
      "text": "🗓️ ¡Perfecto! Tenemos huecos disponibles:\n• Miércoles 22 — 10:00h o 17:30h\n• Jueves 23 — 11:00h\n• Viernes 24 — 09:30h\n¿Cuál te viene mejor?",
      "time": "10:03"
    },
    {
      "id": 6,
      "role": "user",
      "text": "El jueves a las 11",
      "time": "10:04"
    },
    {
      "id": 7,
      "role": "bot",
      "text": "Genial 👌 Voy a reservarte el jueves 23 a las 11:00h. ¿Me confirmas tu nombre completo?",
      "time": "10:04"
    },
    {
      "id": 8,
      "role": "user",
      "text": "Laura Martínez",
      "time": "10:05"
    },
    {
      "id": 9,
      "role": "bot",
      "text": "Perfecto, Laura. ✅ Cita confirmada para el jueves 23 a las 11:00h. Recibirás un recordatorio 24h antes. ¿Tienes alguna otra pregunta?",
      "time": "10:05"
    },
    {
      "id": 10,
      "role": "user",
      "text": "¿Hacéis blanqueamiento también?",
      "time": "10:06"
    },
    {
      "id": 11,
      "role": "bot",
      "text": "Sí, ofrecemos blanqueamiento dental profesional en clínica desde 180€. Tenemos dos modalidades: sesión única de 1h o tratamiento mixto (clínica + férula para casa). ¿Quieres más información sobre alguna?",
      "time": "10:06"
    },
    {
      "id": 12,
      "role": "user",
      "text": "No, con esto está bien. Muchas gracias!",
      "time": "10:07"
    },
    {
      "id": 13,
      "role": "bot",
      "text": "¡A ti! 😊 Te esperamos el jueves. Si necesitas cambiar la cita, escríbenos aquí mismo. ¡Hasta pronto!",
      "time": "10:07"
    }
  ]
}
```

**Instrucción de implementación:** leer este JSON y renderizar cada mensaje con `role: "bot"` como burbuja izquierda (fondo gris claro) y `role: "user"` como burbuja derecha (fondo verde WhatsApp `#DCF8C6`). Mostrar el campo `time` debajo de cada burbuja en texto pequeño y gris. El campo `text` debe respetar saltos de línea (`\n`).

---

## SECCIÓN 1 — HERO (dos columnas)

### Columna izquierda — Mockup interactivo de iPhone

Renderizar un mockup de iPhone en tamaño prominente (aprox. 320px de ancho). Dentro de la pantalla del teléfono, mostrar una interfaz que imite WhatsApp:

- Barra superior con avatar del contacto, nombre (`contactName`) y estado "en línea"
- Fondo de pantalla: patrón sutil gris claro típico de WhatsApp
- Burbujas de chat renderizadas desde el JSON descrito arriba
- La conversación debe ser **scrolleable con ratón y con dedo (touch)**
- El scroll debe funcionar **solo dentro del área de la pantalla del teléfono**, sin afectar al scroll de la página
- Implementar con `overflow-y: scroll` y `touch-action: pan-y` en el contenedor interno de mensajes
- Barra inferior de input de WhatsApp (decorativa, no funcional): icono de emoji, campo de texto con placeholder "Mensaje", icono de micrófono

### Columna derecha — Copy del hero

- **Tag/eyebrow**: `Automatización con IA para tu negocio`
- **H1**: `Tu negocio atendiendo clientes y agendando citas, 24/7 — sin intervención humana`
- **Subtítulo**: Un asistente inteligente que responde dudas, guía al cliente y rellena tu agenda mientras tú te dedicas a lo que importa.
- **Lista de puntos fuertes** (4 ítems con checkmark o icono):
  - ✅ Responde en segundos, a cualquier hora
  - ✅ Agenda citas directamente en WhatsApp
  - ✅ Aprende sobre tu negocio con tu propio contenido
  - ✅ Panel de control para gestionar todo desde un solo sitio
- **CTA primario**: Botón `Solicitar una demo` → ancla `#contacto`
- **CTA secundario**: Texto link `Ver cómo funciona ↓` → ancla `#como-funciona`

---

## SECCIÓN 2 — CÓMO FUNCIONA (id="como-funciona")

**Título de sección:** `Así de simple`

Tres pasos en layout horizontal (cards o timeline visual):

| Paso | Título | Descripción |
|------|--------|-------------|
| 01 | Sube tu conocimiento | Añade las preguntas frecuentes, servicios, precios y cualquier información de tu negocio. El chatbot aprende de ello. |
| 02 | El bot atiende a tus clientes | Responde dudas, recomienda servicios y gestiona el proceso de reserva de forma autónoma y natural. |
| 03 | Tú controlas todo desde el panel | Consulta citas en el calendario, revisa conversaciones, detecta mejoras y toma el control cuando lo necesites. |

---

## SECCIÓN 3 — FUNCIONALIDADES DEL PANEL

**Título:** `Un panel de gestión completo para tu equipo`

**Subtítulo:** No solo un chatbot. Una herramienta de gestión que transforma cómo atiendes a tus clientes.

Cuatro cards con icono grande, título y descripción:

| Icono | Título | Descripción |
|-------|--------|-------------|
| 📅 | Calendario de citas | Visualiza todas tus reservas en una vista de calendario. Sin confusiones, sin papel. |
| 📚 | Base de conocimiento | Sube documentos, FAQs o textos y el chatbot los usa para responder con precisión. |
| 💬 | Historial de conversaciones | Accede a cada conversación, detecta patrones, identifica fallos y mejora continuamente. |
| 🎮 | Control manual | Intervén en cualquier conversación en tiempo real cuando lo necesites. El bot te cede el control con un clic. |

---

## SECCIÓN 4 — PARA QUIÉN ES

**Título:** `Ideal para negocios que no pueden perderse ni una consulta`

Mostrar los siguientes sectores como pills, iconos o cards pequeñas:

- 🦷 Clínicas y dentistas
- 💅 Centros de estética y peluquerías
- 📖 Academias y formación
- 📋 Despachos y asesorías
- 🍽️ Restaurantes y hostelería
- 🔧 Talleres y servicios técnicos

---

## SECCIÓN 5 — FAQ

**Título:** `Preguntas frecuentes`

Implementar como acordeón (solo una pregunta abierta a la vez):

**1. ¿Necesito tener conocimientos técnicos para usar el chatbot?**
No. El panel está diseñado para ser usado sin formación técnica. Subir contenido, ver conversaciones y gestionar citas es tan sencillo como usar una app del móvil.

**2. ¿En qué canales funciona el chatbot?**
Actualmente funciona en WhatsApp y Telegram. Estamos trabajando en integración con web y otros canales.

**3. ¿Cuánto tiempo tarda en estar listo?**
El tiempo de configuración habitual es de 3 a 7 días laborables, dependiendo de la complejidad del negocio y el volumen de información a cargar.

**4. ¿Qué pasa si el bot no sabe responder algo?**
El bot puede reconocer sus propios límites e indicarle al usuario que le pondrá en contacto con una persona. Además, desde el panel puedes tomar el control en tiempo real.

**5. ¿El chatbot puede integrarse con mi sistema de reservas actual?**
Dependiendo del sistema, sí es posible. Contáctanos para valorar tu caso concreto.

**6. ¿Qué incluye el mantenimiento mensual?**
Incluye soporte técnico, actualizaciones del modelo, monitorización del servicio y una sesión mensual de revisión y mejora.

---

## SECCIÓN 6 — CTA FINAL

Fondo con el color de acento principal del proyecto.

- **Título:** `¿Listo para automatizar la atención de tu negocio?`
- **Subtítulo:** Solicita una demo gratuita y te mostramos cómo funciona aplicado a tu sector en menos de 30 minutos.
- **Botón CTA:** `Quiero una demo gratuita` → ancla `#contacto`

---

## SECCIÓN 7 — FORMULARIO DE CONTACTO (id="contacto")

Si el proyecto ya tiene un componente de formulario de contacto reutilizable, usarlo aquí. Si no, crear un formulario con los siguientes campos:

- Nombre *(requerido)*
- Email *(requerido)*
- Teléfono
- Sector / tipo de negocio *(select)*: Clínica/Salud · Estética/Peluquería · Academia/Formación · Asesoría/Despacho · Restauración · Taller/Servicios · Otro
- Mensaje *(opcional)*
- Botón de envío: `Solicitar demo gratuita`

---

## NOTAS TÉCNICAS

- **Ruta:** `/chatbot` dentro del proyecto existente
- **Herencia de estilos:** usar el layout general, navbar, footer, fuentes, variables CSS de color, botones y sistema de espaciado del proyecto. No crear una identidad visual nueva.
- **Mockup iPhone:** es el elemento más importante del hero. Debe sentirse premium y realista. El scroll de la conversación es independiente del scroll de la página.
- **JSON de mensajes:** definir el objeto JSON de la conversación como constante separada al inicio del archivo/componente, no inline en el JSX/HTML. Esto facilita su edición sin tocar el código de renderizado.
- **Responsive:** en móvil, el mockup del iPhone se coloca encima y el copy debajo. Las cards de las secciones 2, 3 y 4 pasan a una columna.
- **Animaciones:** usar las transiciones y animaciones ya existentes en el proyecto para cards, acordeón y aparición de secciones. No inventar nuevas librerías.
- **Accesibilidad:** el acordeón del FAQ debe ser navegable por teclado (`aria-expanded`, `aria-controls`).