import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030A17] text-[#E4ECFF] font-sans selection:bg-[#00CFBF]/30">
      <div className="noise-overlay opacity-[0.03]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#00CFBF] hover:opacity-80 transition-opacity mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Términos y <span className="font-cormorant italic font-light text-[#00CFBF]">Condiciones</span>
        </h1>
        
        <div className="space-y-12 text-[#E4ECFF]/70 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introducción</h2>
            <p>
              Bienvenido a Quasar Go. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Los servicios proporcionados por Quasar Go están diseñados para la automatización y mejora de procesos mediante inteligencia artificial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso del Servicio</h2>
            <p>
              Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos Términos. Queda estrictamente prohibido el uso de nuestros sistemas para cualquier actividad que pueda dañar, sobrecargar o interferir con la funcionalidad de los mismos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos, diseños, algoritmos y software utilizados en este sitio son propiedad exclusiva de Quasar Go o han sido licenciados para su uso. No se permite la reproducción, distribución o modificación de ningún material sin nuestro consentimiento expreso por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              Quasar Go no será responsable de ningún daño indirecto, incidental o consecuente que surja del uso o la imposibilidad de uso de nuestros servicios. Nos esforzamos por proporcionar sistemas de alta fidelidad, pero no garantizamos resultados específicos comerciales derivados de la automatización.
            </p>
          </section>

          <section className="pt-12 border-t border-white/10">
            <p className="text-sm">
              Última actualización: Marzo 2026. Si tiene alguna duda sobre estos términos, por favor contáctenos a través de nuestro formulario de reserva.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
