"use client";

import Image from "next/image";
import Link from "next/link";

const beneficios = [
  "Diagnóstico más preciso en menos tiempo",
  "Planificación digital de tratamientos",
  "Imágenes de alta definición",
  "Mayor seguridad clínica",
  "Mejor comunicación paciente-clínica",
  "Seguimiento objetivo de avances",
];

export default function UltraformerPage() {
  return (
    <main className="bg-[color:var(--background)] text-[color:var(--ink-900)]">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-24 md:px-10 md:pb-24 md:pt-28 lg:grid-cols-[1.15fr_1fr] lg:items-center xl:px-12 xl:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
            Tecnología clínica
          </p>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">Odontología digital</h1>
          <p className="mt-7 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
            En Clinica Alto Costanera incorporamos tecnología digital para elevar la precisión
            diagnóstica y optimizar cada etapa del tratamiento odontológico.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
            Utilizamos herramientas de imagen y planificación clínica que permiten decisiones
            más seguras, tiempos más eficientes y una mejor experiencia para cada paciente.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
            Cada evaluación se ajusta al caso clínico para definir objetivos realistas y un
            plan de tratamiento totalmente personalizado.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex rounded-full bg-[color:var(--gold-500)] px-7 py-3 text-sm font-medium text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-300)]"
          >
            Solicitar evaluación tecnológica
          </Link>
        </div>

        <div className="relative aspect-[6/5] overflow-hidden rounded-[2rem] border border-[color:var(--gold-100)] bg-white shadow-[0_24px_70px_-38px_rgba(63,48,24,0.3)]">
          <Image
            src="/ultraformer.avif"
            alt="Tecnología odontológica digital"
            fill
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1611]/55 to-transparent" />
        </div>
      </section>

      <section className="border-t border-[color:var(--gold-100)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24 xl:px-12">
          <h2 className="text-3xl leading-tight text-[color:var(--ink-900)] sm:text-4xl">Beneficios clave</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] px-5 py-4 text-sm text-[color:var(--ink-700)]"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
