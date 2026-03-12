import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    num: "01",
    title: "Consultoría Estratégica",
    copy: "Analizamos las necesidades de tu negocio y detectamos cuellos de botella."
  },
  {
    num: "02",
    title: "Implementación",
    copy: "Testeamos e implementamos las soluciones adaptadas a tus procesos."
  },
  {
    num: "03",
    title: "Optimización Continua",
    copy: "Mantenemos, actualizamos y optimizamos los sistemas para máximo rendimiento."
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line connecting phases animation
      gsap.fromTo('.process-line',
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: '.process-wrapper',
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      // Fade up rows
      gsap.fromTo('.process-row', 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.4, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" ref={containerRef} className="w-full relative py-32 px-6 lg:px-20 section-separator">
      <div className="max-w-4xl mx-auto flex flex-col">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-6 text-white text-center">
            Nuestra Metodología
          </h2>
          <p className="text-xl font-cormorant italic text-[#E4ECFF]/70 text-center">
            La ingeniería aplicada al crecimiento orgánico de tu negocio.
          </p>
        </div>

        <div className="process-wrapper relative pl-8 md:pl-16">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-0 md:left-8 w-px bg-border">
             <div className="process-line w-full h-full bg-accent-cyan shadow-[0_0_10px_#22D3EE]" />
          </div>

          <div className="flex flex-col gap-16">
            {phases.map((phase, i) => (
              <div 
                key={i} 
                className="process-row relative flex flex-col md:flex-row gap-6 md:gap-12 items-start opacity-0"
              >
                {/* Node marker */}
                <div className="absolute -left-[37px] md:-left-[69px] top-1 w-5 h-5 rounded-full bg-background border-2 border-accent-cyan flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                </div>
                
                <span className="font-mono text-4xl md:text-5xl font-bold text-white/5 w-16 -mt-2">
                  {phase.num}
                </span>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl font-sans font-medium text-white">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-lg text-[#E4ECFF]/60 max-w-lg leading-relaxed">
                    {phase.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
