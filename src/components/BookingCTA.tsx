import { Calendar } from 'lucide-react';

export function BookingCTA() {
  return (
    <section id="reserva" className="w-full relative py-32 px-6 lg:px-20 bg-background overflow-hidden section-separator">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6">
          ¿Listo para automatizar?
        </h2>
        <p className="text-lg md:text-xl text-[#E4ECFF]/70 font-sans max-w-2xl mb-16">
          Elige el horario que mejor te venga. Tendremos una consultoría sin coste donde evaluaremos qué procesos se pueden delegar hoy mismo a sistemas de IA.
        </p>

        <div className="w-full max-w-3xl bg-card border border-border rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
          {/* Calendly / Cal.com placeholder */}
          <div className="w-16 h-16 rounded-full bg-border flex items-center justify-center mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-white font-sans">Agenda tu Consultoría Gratuita</h3>
          <p className="text-[#E4ECFF]/50 mb-8 max-w-md font-sans">
            (Espacio reservado para incrustar el widget de Calendly o Cal.com. Una vez que tengas tu cuenta, reemplaza este cuadro por el código de inserción).
          </p>
          
          <button className="bg-primary hover:bg-primary/90 text-[#030A17] px-8 py-3 rounded-xl font-bold font-sans transition-all active:scale-95">
            Reservar 30 Minutos Reales
          </button>
        </div>
      </div>
    </section>
  );
}
