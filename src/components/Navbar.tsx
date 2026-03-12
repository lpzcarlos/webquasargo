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
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-in-out w-full max-w-5xl border",
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-white/20 text-[#00CFBF]"
            : "bg-transparent text-white border-transparent"
        )}
      >
        <div className="flex items-center gap-3">
          <img
            src={scrolled ? "Logo_color_oscuro.svg" : "Logo_con_letras_color_claro.svg"}
            alt="Quasar Go"
            className="h-20 w-auto transition-opacity duration-300 hidden md:block"
          />
          <img
            src={scrolled ? "Logo_color_oscuro.svg" : "Logo_color_claro.svg"}
            alt="Quasar Go"
            className="h-16 w-auto transition-opacity duration-300 block md:hidden"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          <a href="#soluciones" className="hover:opacity-70 transition-opacity">Soluciones</a>
          <a href="#proceso" className="hover:opacity-70 transition-opacity">Proceso</a>
        </div>

        <a
          href="#reserva"
          className={cn(
            "rounded-full px-5 py-2 text-sm font-sans font-semibold transition-all duration-300 hover:scale-105 active:scale-95",
            scrolled
              ? "bg-[#00CFBF] text-white hover:shadow-lg hover:shadow-[#00CFBF]/20"
              : "bg-white text-background hover:bg-white/90"
          )}
        >
          Agendar consultoría
        </a>
      </div>
    </nav>
  );
}
