import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-[#08101C] px-8 py-16 relative z-20 border-t border-accent-cyan/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="Logo_con_letras_color_claro.svg" alt="Quasar Go" className="h-24 opacity-90" />
          <p className="text-sm text-[#E4ECFF]/50 font-sans max-w-xs text-center md:text-left">
            Diseñando los asistentes y agentes del mañana. Eficiencia por algoritmo.
          </p>
        </div>

        <div className="flex gap-12 font-sans text-sm text-center md:text-left">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <Link to="/terminos" className="text-[#E4ECFF]/60 hover:text-primary transition-colors">Términos y Condiciones</Link>
            <Link to="/privacidad" className="text-[#E4ECFF]/60 hover:text-primary transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-sans text-[#E4ECFF]/40">
        <p>© {new Date().getFullYear()} Quasar Go. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
