import { Braces, HeartPulse, ScanLine, Stethoscope } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

const pillars = [
  {
    title: "Tecnologia avanzada",
    text: "Equipos de ultima generacion para diagnosticos precisos y resultados medibles.",
    icon: ScanLine,
  },
  {
    title: "Profesionales especializados",
    text: "Equipo clinico con formacion continua y estandares internacionales.",
    icon: Stethoscope,
  },
  {
    title: "Enfoque estetico de alta calidad",
    text: "Armonia, naturalidad y elegancia con una planificacion individual.",
    icon: Braces,
  },
  {
    title: "Atencion personalizada",
    text: "Acompanamiento cercano antes, durante y despues de cada tratamiento.",
    icon: HeartPulse,
  },
];

export default function Seccion1() {
  return (
    <section
      id="porque-elegirnos"
      className="scroll-mt-24 bg-[color:var(--background)] py-20 text-[color:var(--ink-900)] sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold-700)]/80">Por que elegirnos</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-light leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
            Una experiencia que busca la mejor y mas alta calidad de atencion, que une ciencia, estetica y bienestar.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <RevealOnScroll
                key={item.title}
                className="h-full"
                delayClass={
                  index === 0
                    ? "delay-75"
                    : index === 1
                    ? "delay-100"
                    : index === 2
                    ? "delay-150"
                    : "delay-200"
                }
              >
                <article className="h-full rounded-3xl border border-[color:var(--gold-100)] bg-white p-6 shadow-[0_18px_50px_-40px_rgba(63,48,24,0.25)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[color:var(--gold-300)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)]">
                    <Icon className="h-6 w-6 text-[color:var(--gold-700)]" />
                  </div>
                  <h3 className="mt-5 text-xl font-light tracking-[0.01em] text-[color:var(--ink-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 tracking-[0.02em] text-[color:var(--ink-700)]/80">
                    {item.text}
                  </p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
