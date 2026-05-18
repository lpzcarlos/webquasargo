import { useEffect, useRef, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { CheckCircle2, Calendar, BookOpen, MessageSquare, Gamepad2, ChevronDown, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CHAT_DATA = {
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
};

const FAQ_DATA = [
  {
    q: "¿Necesito tener conocimientos técnicos para usar el chatbot?",
    a: "No. El panel está diseñado para ser usado sin formación técnica. Subir contenido, ver conversaciones y gestionar citas es tan sencillo como usar una app del móvil."
  },
  {
    q: "¿En qué canales funciona el chatbot?",
    a: "Actualmente funciona en WhatsApp y Telegram. Estamos trabajando en integración con web y otros canales."
  },
  {
    q: "¿Cuánto tiempo tarda en estar listo?",
    a: "El tiempo de configuración habitual es de 3 a 7 días laborables, dependiendo de la complejidad del negocio y el volumen de información a cargar."
  },
  {
    q: "¿Qué pasa si el bot no sabe responder algo?",
    a: "El bot puede reconocer sus propios límites e indicarle al usuario que le pondrá en contacto con una persona. Además, desde el panel puedes tomar el control en tiempo real."
  },
  {
    q: "¿El chatbot puede integrarse con mi sistema de reservas actual?",
    a: "Dependiendo del sistema, sí es posible. Contáctanos para valorar tu caso concreto."
  },
  {
    q: "¿Qué incluye el mantenimiento mensual?",
    a: "Incluye soporte técnico, actualizaciones del modelo, monitorización del servicio y una sesión mensual de revisión y mejora."
  }
];

export function Chatbot() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main className="w-full flex items-center flex-col relative bg-background text-[#E4ECFF] pt-24 overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: iPhone Mockup */}
          <div ref={mockupRef} className="flex justify-center relative z-10 lg:order-1 order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#00CFBF]/20 rounded-full blur-[100px] -z-10" />
            
            <div className="w-[320px] h-[650px] bg-[#0D1929] rounded-[3rem] border-[8px] border-[#162840] shadow-2xl relative flex flex-col overflow-hidden">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#162840] rounded-b-2xl z-20" />
              
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] pt-10 pb-3 px-4 flex items-center gap-3 shadow-md z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                  {CHAT_DATA.contactAvatar}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white leading-tight">{CHAT_DATA.contactName}</span>
                  <span className="text-xs text-white/80">en línea</span>
                </div>
              </div>

              {/* Chat Area */}
              <div 
                className="flex-1 overflow-y-scroll p-4 flex flex-col gap-3 relative"
                style={{ 
                  touchAction: 'pan-y', 
                  backgroundColor: '#efeae2',
                  backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                  backgroundBlendMode: 'multiply'
                }}
              >
                {CHAT_DATA.messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end' : 'self-start'}`}>
                    <div className={`p-3 rounded-2xl shadow-sm text-sm text-[#111] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-[#DCF8C6] rounded-tr-sm' : 'bg-white rounded-tl-sm'}`}>
                      {msg.text}
                    </div>
                    <span className={`text-[10px] text-gray-500 mt-1 ${msg.role === 'user' ? 'self-end' : 'self-start'}`}>
                      {msg.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fake Input */}
              <div className="bg-[#f0f0f0] p-2 flex items-center gap-2">
                <div className="bg-white flex-1 rounded-full px-4 py-2 text-sm text-gray-400">
                  Mensaje
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00CFBF] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div ref={heroRef} className="flex flex-col items-start lg:order-2 order-1 relative z-10">
            <span className="text-[#22D3EE] font-semibold tracking-wider text-sm uppercase mb-4">
              Automatización con IA para tu negocio
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-white leading-tight mb-6">
              Tu negocio atendiendo clientes y agendando citas, 24/7 — <span className="font-cormorant italic text-[#22D3EE] font-light">sin intervención humana</span>
            </h1>
            <p className="text-lg text-[#E4ECFF]/70 mb-8 max-w-xl">
              Un asistente inteligente que responde dudas, guía al cliente y rellena tu agenda mientras tú te dedicas a lo que importa.
            </p>
            
            <ul className="space-y-3 mb-10 text-[#E4ECFF]/90">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00CFBF] shrink-0 mt-0.5" /> Responde en segundos, a cualquier hora</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00CFBF] shrink-0 mt-0.5" /> Agenda citas directamente en WhatsApp</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00CFBF] shrink-0 mt-0.5" /> Aprende sobre tu negocio con tu propio contenido</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00CFBF] shrink-0 mt-0.5" /> Panel de control para gestionar todo desde un solo sitio</li>
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#contacto" className="bg-[#00CFBF] text-[#030A17] px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,207,191,0.3)] hover:shadow-[0_0_30px_rgba(0,207,191,0.5)]">
                Solicitar una demo
              </a>
              <a href="#como-funciona" className="text-[#E4ECFF] hover:text-[#22D3EE] font-medium transition-colors flex items-center gap-2">
                Ver cómo funciona <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="w-full py-24 px-6 bg-[#0a1220] relative">
          <div className="max-w-7xl mx-auto flex flex-col animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Así de <span className="font-cormorant italic text-[#22D3EE] font-light">simple</span></h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Sube tu conocimiento", desc: "Añade las preguntas frecuentes, servicios, precios y cualquier información de tu negocio. El chatbot aprende de ello." },
                { step: "02", title: "El bot atiende a tus clientes", desc: "Responde dudas, recomienda servicios y gestiona el proceso de reserva de forma autónoma y natural." },
                { step: "03", title: "Tú controlas todo desde el panel", desc: "Consulta citas en el calendario, revisa conversaciones, detecta mejoras y toma el control cuando lo necesites." }
              ].map((item, i) => (
                <div key={i} className="bg-[#0D1929] border border-[#162840] rounded-3xl p-8 relative overflow-hidden group hover:border-[#22D3EE]/50 transition-colors">
                  <div className="text-6xl font-black text-[#162840] mb-6 font-cormorant transition-colors group-hover:text-[#22D3EE]/20">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
                  <p className="text-[#E4ECFF]/70 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES PANEL */}
        <section className="w-full py-24 px-6 bg-background relative section-separator">
          <div className="max-w-7xl mx-auto animate-on-scroll">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Un panel de gestión <span className="font-cormorant italic text-[#22D3EE] font-light">completo</span> para tu equipo</h2>
              <p className="text-lg text-[#E4ECFF]/70">No solo un chatbot. Una herramienta de gestión que transforma cómo atiendes a tus clientes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Calendar className="w-8 h-8" />, title: "Calendario de citas", desc: "Visualiza todas tus reservas en una vista de calendario. Sin confusiones, sin papel." },
                { icon: <BookOpen className="w-8 h-8" />, title: "Base de conocimiento", desc: "Sube documentos, FAQs o textos y el chatbot los usa para responder con precisión." },
                { icon: <MessageSquare className="w-8 h-8" />, title: "Historial de conversaciones", desc: "Accede a cada conversación, detecta patrones, identifica fallos y mejora continuamente." },
                { icon: <Gamepad2 className="w-8 h-8" />, title: "Control manual", desc: "Intervén en cualquier conversación en tiempo real cuando lo necesites. El bot te cede el control con un clic." }
              ].map((f, i) => (
                <div key={i} className="bg-[#0D1929] border border-[#162840] rounded-3xl p-8 flex gap-6 group hover:bg-[#162840]/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-[#162840] flex items-center justify-center text-[#22D3EE] shrink-0 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-[#E4ECFF]/70">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUIÉN ES */}
        <section className="w-full py-24 px-6 bg-[#0a1220] relative">
          <div className="max-w-5xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Ideal para negocios que no pueden perderse <span className="text-[#00CFBF]">ni una consulta</span></h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "🦷 Clínicas y dentistas",
                "💅 Centros de estética y peluquerías",
                "📖 Academias y formación",
                "📋 Despachos y asesorías",
                "🍽️ Restaurantes y hostelería",
                "🔧 Talleres y servicios técnicos"
              ].map((sector, i) => (
                <div key={i} className="px-6 py-3 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#E4ECFF] font-medium hover:bg-[#22D3EE]/10 transition-colors cursor-default">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-24 px-6 bg-background relative section-separator">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Preguntas <span className="font-cormorant italic text-[#22D3EE] font-light">frecuentes</span></h2>
            
            <div className="space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="border border-[#162840] bg-[#0D1929] rounded-2xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#22D3EE] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[#E4ECFF]/70">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full py-32 px-6 bg-[#030A17] relative overflow-hidden flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#22D3EE]/10 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">¿Listo para automatizar la atención de tu negocio?</h2>
            <p className="text-xl text-[#E4ECFF]/70 mb-10 max-w-2xl mx-auto">Solicita una demo gratuita y te mostramos cómo funciona aplicado a tu sector en menos de 30 minutos.</p>
            <a href="#contacto" className="inline-block bg-[#00CFBF] text-[#030A17] px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,207,191,0.4)]">
              Quiero una demo gratuita
            </a>
          </div>
        </section>

        {/* FORMULARIO */}
        <div id="contacto">
          <Form />
        </div>
        
      </main>
      <Footer />
    </>
  );
}
