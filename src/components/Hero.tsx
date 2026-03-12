import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

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
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinematic background" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030A17] via-[#00CFBF]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030A17] via-[#030A17]/80 to-transparent opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center md:text-left flex flex-col items-center md:items-start pt-20">
        <h1 
          ref={text1Ref}
          className="text-white font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6"
          style={{ opacity: 0 }}
        >
          El trabajo que te roba tiempo, resolviéndose solo.
        </h1>
        
        <p 
          ref={subtextRef}
          className="text-[#E4ECFF]/80 font-cormorant italic text-2xl md:text-4xl font-light max-w-2xl mb-12 drop-shadow-sm"
          style={{ opacity: 0 }}
        >
          Agentes y sistemas para delegar tareas repetitivas y concentrarte en decisiones críticas.
        </p>

        <a 
          ref={ctaRef}
          href="#reserva" 
          className="inline-flex items-center justify-center bg-primary text-[#030A17] px-8 py-4 rounded-full font-sans font-semibold text-lg md:text-xl transition-transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,207,191,0.4)] active:scale-95"
          style={{ opacity: 0 }}
        >
          Agenda consultoria gratuita
        </a>
      </div>
    </section>
  );
}
