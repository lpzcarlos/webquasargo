import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030A17] text-[#E4ECFF] font-sans selection:bg-[#6D28D9]/30">
      <div className="noise-overlay opacity-[0.03]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#22D3EE] hover:opacity-80 transition-opacity mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <ShieldCheck className="text-[#22D3EE] w-8 h-8" />
          <span className="text-[#22D3EE] font-mono tracking-widest text-sm uppercase">Seguridad de Datos</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Política de <span className="font-cormorant italic font-light text-[#22D3EE]">Privacidad</span>
        </h1>
        
        <div className="space-y-12 text-[#E4ECFF]/70 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Recopilación de Información</h2>
            <p>
              En Quasar Go, nos tomamos muy en serio la privacidad de sus datos. Recopilamos información personal solo cuando es estrictamente necesario para proporcionar nuestros servicios de consultoría o implementación de IA, principalmente a través de nuestros formularios de contacto y reserva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso de los Datos</h2>
            <p>
              Su información se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-[#E4ECFF]/60">
              <li>Gestionar sus citas y consultas de automatización.</li>
              <li>Personalizar las soluciones tecnológicas que diseñamos para su negocio.</li>
              <li>Comunicar actualizaciones importantes sobre nuestros protocolos y sistemas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Protección y Almacenamiento</h2>
            <p>
              Implementamos medidas de seguridad de grado industrial para proteger sus datos contra acceso no autorizado, alteración o divulgación. No vendemos ni compartimos su información personal con terceros para fines publicitarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, corregir o eliminar sus datos personales en cualquier momento. Nuestro sistema operativo interno está diseñado para ser transparente y respetar la soberanía de sus datos corporativos.
            </p>
          </section>

          <section className="pt-12 border-t border-white/10">
            <p className="text-sm">
              Última actualización: Marzo 2026. Quasar Go se reserva el derecho de actualizar esta política para reflejar cambios en nuestras prácticas tecnológicas.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
