"use client";

import Image from "next/image";
import Link from "next/link";

export default function MisionVisionPage() {
  return (
    <main className="bg-[color:var(--background)] text-[color:var(--ink-900)]">
      <section className="relative overflow-hidden bg-[color:var(--background)] py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(201,166,107,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(231,222,208,0.45),transparent_42%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center xl:px-12 xl:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
              Clinica Alto Costanera
            </p>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">Misión y Visión</h1>
            <p className="mt-7 text-justify text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
              Nuestra mision es entregar atencion integral, personalizada y de alta calidad,
              combinando diagnostico clinico, tecnologia avanzada y protocolos seguros para
              mejorar el bienestar y la confianza de cada paciente.
            </p>
            <p className="mt-5 max-w-2xl text-justify text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
              Nuestra vision es consolidarnos como una clinica referente en Santiago por la
              excelencia clinica, la cercania en la atencion y resultados esteticos
              equilibrados en cada tratamiento.
            </p>

            <Link
              href="/contacto"
              className="mt-10 inline-flex rounded-full bg-[color:var(--gold-500)] px-7 py-3 text-sm font-medium text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-300)]"
            >
              Solicitar evaluacion
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[color:var(--gold-100)] bg-white shadow-[0_24px_70px_-38px_rgba(63,48,24,0.35)]">
            <Image
              src="/dr2.png"
              alt="Mision y vision clinica"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
