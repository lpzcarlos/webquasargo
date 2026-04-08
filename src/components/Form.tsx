import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Send, User, Mail, Phone, MessageSquare, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  consulta: string;
  aceptaPrivacidad: boolean;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  consulta?: string;
  aceptaPrivacidad?: string;
}

export function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    consulta: '',
    aceptaPrivacidad: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
      ).fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.5'
      );
    });

    return () => ctx.revert();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Introduce un correo válido.';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El número de teléfono es obligatorio.';
    } else if (!/^[\d\s+\-().]{7,20}$/.test(formData.telefono)) {
      newErrors.telefono = 'Introduce un número válido.';
    }

    if (!formData.consulta.trim()) {
      newErrors.consulta = 'Escribe tu consulta.';
    }

    if (!formData.aceptaPrivacidad) {
      newErrors.aceptaPrivacidad = 'Debes aceptar la política de privacidad.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="w-full relative py-32 px-6 lg:px-20 bg-background overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero text */}
        <div ref={heroRef} style={{ opacity: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Hablemos de tu{' '}
            <span className="font-cormorant italic font-light text-[#22D3EE]">
              proyecto
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#E4ECFF]/60 max-w-2xl mb-16 leading-relaxed">
            Rellena el formulario y nos pondremos en contacto contigo lo antes
            posible. Sin compromisos, solo soluciones.
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={cardRef}
          style={{ opacity: 0 }}
          className="bg-card/60 backdrop-blur-xl border border-border rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          {/* Decorative gradient line at top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE]/60 to-transparent" />

          {isSubmitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-8 animate-pulse">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¡Mensaje enviado!
              </h2>
              <p className="text-[#E4ECFF]/60 text-lg max-w-md mb-8">
                Hemos recibido tu consulta. Nuestro equipo se pondrá en contacto
                contigo en las próximas 24 horas.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-[#00CFBF] text-[#030A17] px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,207,191,0.4)] active:scale-95"
              >
                Volver al inicio
              </Link>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-8"
            >
              {/* Name & Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-nombre"
                    className="flex items-center gap-2 text-sm font-medium text-[#E4ECFF]/80"
                  >
                    <User className="w-4 h-4 text-[#22D3EE]/70" />
                    Nombre completo
                  </label>
                  <input
                    id="contact-nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full bg-[#0D1929]/80 border rounded-xl px-5 py-3.5 text-white placeholder:text-[#E4ECFF]/30 font-sans outline-none transition-all duration-300 focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE]/60 ${
                      errors.nombre
                        ? 'border-red-500/70'
                        : 'border-border hover:border-[#22D3EE]/30'
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>
                  )}
                </div>

                {/* Correo */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-correo"
                    className="flex items-center gap-2 text-sm font-medium text-[#E4ECFF]/80"
                  >
                    <Mail className="w-4 h-4 text-[#22D3EE]/70" />
                    Correo electrónico
                  </label>
                  <input
                    id="contact-correo"
                    name="correo"
                    type="email"
                    placeholder="tu@empresa.com"
                    value={formData.correo}
                    onChange={handleChange}
                    className={`w-full bg-[#0D1929]/80 border rounded-xl px-5 py-3.5 text-white placeholder:text-[#E4ECFF]/30 font-sans outline-none transition-all duration-300 focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE]/60 ${
                      errors.correo
                        ? 'border-red-500/70'
                        : 'border-border hover:border-[#22D3EE]/30'
                    }`}
                  />
                  {errors.correo && (
                    <p className="text-red-400 text-xs mt-1">{errors.correo}</p>
                  )}
                </div>
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-telefono"
                  className="flex items-center gap-2 text-sm font-medium text-[#E4ECFF]/80"
                >
                  <Phone className="w-4 h-4 text-[#22D3EE]/70" />
                  Número de teléfono
                </label>
                <input
                  id="contact-telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full bg-[#0D1929]/80 border rounded-xl px-5 py-3.5 text-white placeholder:text-[#E4ECFF]/30 font-sans outline-none transition-all duration-300 focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE]/60 md:max-w-md ${
                    errors.telefono
                      ? 'border-red-500/70'
                      : 'border-border hover:border-[#22D3EE]/30'
                  }`}
                />
                {errors.telefono && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.telefono}
                  </p>
                )}
              </div>

              {/* Consulta */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-consulta"
                  className="flex items-center gap-2 text-sm font-medium text-[#E4ECFF]/80"
                >
                  <MessageSquare className="w-4 h-4 text-[#22D3EE]/70" />
                  ¿En qué podemos ayudarte?
                </label>
                <textarea
                  id="contact-consulta"
                  name="consulta"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto o necesidad de automatización..."
                  value={formData.consulta}
                  onChange={handleChange}
                  className={`w-full bg-[#0D1929]/80 border rounded-xl px-5 py-3.5 text-white placeholder:text-[#E4ECFF]/30 font-sans outline-none transition-all duration-300 focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE]/60 resize-none ${
                    errors.consulta
                      ? 'border-red-500/70'
                      : 'border-border hover:border-[#22D3EE]/30'
                  }`}
                />
                {errors.consulta && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.consulta}
                  </p>
                )}
              </div>

              {/* Privacy checkbox */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-privacidad"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      id="contact-privacidad"
                      name="aceptaPrivacidad"
                      type="checkbox"
                      checked={formData.aceptaPrivacidad}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                        formData.aceptaPrivacidad
                          ? 'bg-[#22D3EE] border-[#22D3EE]'
                          : errors.aceptaPrivacidad
                          ? 'border-red-500/70 bg-transparent'
                          : 'border-[#E4ECFF]/30 bg-transparent group-hover:border-[#22D3EE]/50'
                      }`}
                    >
                      {formData.aceptaPrivacidad && (
                        <svg
                          className="w-3.5 h-3.5 text-[#030A17]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-[#E4ECFF]/60 leading-relaxed">
                    Acepto la{' '}
                    <Link
                      to="/privacidad"
                      className="text-[#22D3EE] underline underline-offset-2 hover:opacity-80 transition-opacity"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Política de Privacidad
                    </Link>{' '}
                    y consiento el tratamiento de mis datos personales para la
                    gestión de mi consulta.
                  </span>
                </label>
                {errors.aceptaPrivacidad && (
                  <p className="text-red-400 text-xs ml-8">
                    {errors.aceptaPrivacidad}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 bg-[#00CFBF] text-[#030A17] px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,207,191,0.35)] active:scale-95 disabled:opacity-60 disabled:pointer-events-none w-full sm:w-auto min-w-[260px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                      Enviar consulta
                    </>
                  )}
                </button>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-2 pt-2 text-[#E4ECFF]/30 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  Tus datos están protegidos con encriptación de extremo a
                  extremo.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
