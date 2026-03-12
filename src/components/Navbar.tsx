import { useEffect, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out",
        scrolled ? "bg-[#030A17]/85 backdrop-blur-md py-3 md:py-4" : "bg-transparent py-4 md:py-6"
      )}
    >
      {/* Línea divisoria azul inferior (sólo visible con scroll) */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Al ser ahora un fondo oscuro en ambos estados, usamos siempre los logos claros */}
          <img
            src="Logo_con_letras_color_claro.svg"
            alt="Quasar Go"
            className={cn(
              "w-auto transition-all duration-300 hidden md:block",
              scrolled ? "h-16" : "h-20"
            )}
          />
          <img
            src="Logo_color_claro.svg"
            alt="Quasar Go"
            className={cn(
              "w-auto transition-all duration-300 block md:hidden",
              scrolled ? "h-12" : "h-16"
            )}
          />
        </div>

        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-[#E4ECFF]">
          <a href="#soluciones" className="hover:text-[#22D3EE] transition-colors">Soluciones</a>
          <a href="#proceso" className="hover:text-[#22D3EE] transition-colors">Proceso</a>
        </div>

        <a
          href="#reserva"
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-sans font-semibold transition-all duration-300 hover:scale-105 active:scale-95",
            scrolled
              ? "bg-[#00CFBF] text-[#030A17] hover:shadow-lg hover:shadow-[#00CFBF]/20"
              : "bg-white text-[#030A17] hover:bg-white/90"
          )}
        >
          Agendar consultoría
        </a>
      </div>
    </nav>
  );
}
