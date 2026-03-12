import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(text1Ref.current, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
      .fromTo(subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden px-6 lg:px-20 pb-20 lg:pb-0 section-separator"
    >
      <div className="absolute inset-0 z-0 bg-[#030A17]">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop" 
          alt="Abstract automation and network background" 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030A17] via-[#00CFBF]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030A17] via-[#030A17]/80 to-transparent opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center pt-20">
        <h1 
          ref={text1Ref}
          className="text-white font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] tracking-tight leading-tight mb-6 max-w-4xl"
          style={{ opacity: 0 }}
        >
          El trabajo que te roba tiempo, resolviéndose solo.
        </h1>
        
        <p 
          ref={subtextRef}
          className="text-[#E4ECFF]/80 font-cormorant italic text-xl md:text-3xl lg:text-4xl font-light max-w-2xl mb-12 drop-shadow-sm"
          style={{ opacity: 0 }}
        >
          Agentes y sistemas para delegar tareas repetitivas y concentrarte en decisiones críticas.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4"
          style={{ opacity: 0 }}
        >
          <a 
            href="#reserva" 
            className="inline-flex items-center justify-center bg-[#00CFBF] text-[#030A17] px-8 py-4 rounded-full font-sans font-semibold text-lg md:text-xl transition-transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,207,191,0.4)] active:scale-95 w-full sm:w-auto min-w-[260px]"
          >
            Agenda consultoría gratuita
          </a>
          
          <a 
            href="#demo"
            className="inline-flex items-center justify-center gap-3 bg-[#030A17]/80 backdrop-blur-md border border-[#22D3EE]/60 text-[#E4ECFF] px-8 py-4 rounded-full font-sans font-semibold text-lg md:text-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#22D3EE] hover:bg-[#030A17] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95 w-full sm:w-auto min-w-[260px] group"
          >
            <Play className="w-5 h-5 text-[#22D3EE] fill-transparent group-hover:fill-[#22D3EE]/20 transition-all duration-300" />
            <span>Ver Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
