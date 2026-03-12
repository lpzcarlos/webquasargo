import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BotMessageSquare, Zap, Network } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Chatbot de atención al cliente",
    copy: "Atiende consultas 24/7 sin que intervenga tu equipo.",
    icon: <BotMessageSquare className="w-10 h-10 text-primary" />,
    color: "#00CFBF",
  },
  {
    title: "Automatización de tareas",
    copy: "Elimina el trabajo repetitivo: citas, presupuestos, seguimientos.",
    icon: <Zap className="w-10 h-10 text-accent-cyan" />,
    color: "#22D3EE",
  },
  {
    title: "Integración con tus herramientas",
    copy: "Funciona con WhatsApp, Instagram, tu web y tu CRM.",
    icon: <Network className="w-10 h-10 text-accent-purple" />,
    color: "#6D28D9",
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="soluciones" ref={containerRef} className="w-full relative py-32 px-6 lg:px-20 section-separator">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold mb-4 text-white">Soluciones Optimizadas</h2>
          <p className="text-lg text-[#E4ECFF]/60 font-sans max-w-2xl mx-auto">
            Sistemas construidos para destruir la fricción operativa y escalar sin aumentar personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="service-card flex flex-col items-start p-8 rounded-3xl bg-card border border-border shadow-lg transition-transform hover:-translate-y-2 hover:border-white/10"
              style={{ opacity: 0 }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${svc.color}15` }}
              >
                {svc.icon}
              </div>
              <h3 className="text-2xl font-sans font-semibold text-white mb-3">
                {svc.title}
              </h3>
              <p className="font-sans text-[#E4ECFF]/70 text-base leading-relaxed">
                {svc.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
