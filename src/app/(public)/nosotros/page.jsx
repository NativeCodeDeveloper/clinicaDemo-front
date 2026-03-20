"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

const valores = [
  {
    title: "Atencion personalizada",
    text: "Cada plan es unico. Escuchamos, diagnosticamos y acompanamos con detalle.",
  },
  {
    title: "Tecnologia de vanguardia",
    text: "Equipos de alto estandar para resultados precisos, seguros y predecibles.",
  },
  {
    title: "Estetica elegante",
    text: "Buscamos armonia y naturalidad, respetando la identidad de cada paciente.",
  },
];

const especialidades = [
  "Armonizacion facial",
  "Bioestimulacion avanzada",
  "Odontologia estetica",
  "Rehabilitacion oral",
  "Laser dermatologico",
  "Protocolos anti-age",
];

const testimonios = [
  {
    name: "Maria Isabel",
    text: "Me senti acompanada en todo momento y el resultado fue natural y delicado.",
  },
  {
    name: "Karina",
    text: "Profesionales muy cercanos, todo fue claro y el plan se adapto a mi.",
  },
  {
    name: "Francisca",
    text: "Atencion impecable y un ambiente elegante. Recomiendo totalmente.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-[color:var(--background)] text-[color:var(--ink-900)]">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(201,166,107,0.2),transparent_38%),radial-gradient(circle_at_90%_8%,rgba(231,222,208,0.5),transparent_40%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-700)]/80">
              Conocenos
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Clinica Alto Costanera
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
              Creamos un espacio sofisticado para la medicina estetica y la odontologia
              integral, donde cada detalle esta pensado para brindar confianza, calma y
              resultados armoniosos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="rounded-full bg-[color:var(--gold-500)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-300)]"
              >
                Agenda una evaluacion
              </Link>
              <Link
                href="/#servicios"
                className="rounded-full border border-[color:var(--gold-300)] bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-50)]"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--gold-100)] bg-white shadow-[0_30px_80px_-50px_rgba(63,48,24,0.35)]">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_45%,rgba(246,239,227,0.2)_100%)]" />
            <Image
              src="/boxpsicodemo.png"
              alt="Equipo Clinica Alto Costanera"
              width={900}
              height={720}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <RevealOnScroll>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-700)]/80">
                Nuestra historia
              </p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                Una clinica creada para una experiencia elegante y cercana.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
                Clinica Alto Costanera nacio con el objetivo de ofrecer medicina estetica y
                odontologia integral en un entorno premium. Nuestro enfoque combina calidez,
                precision clinica y tecnologia de ultima generacion para brindar resultados
                armoniosos y seguros.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
                Cada tratamiento es guiado por profesionales especializados y protocolos
                personalizados, priorizando la seguridad, la naturalidad y el bienestar.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="rounded-[2rem] border border-[color:var(--gold-100)] bg-white p-8 shadow-[0_20px_60px_-45px_rgba(63,48,24,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-700)]/80">
                Quienes somos
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
                Somos un equipo multidisciplinario especializado en armonizacion facial,
                rejuvenecimiento y rehabilitacion oral. Trabajamos con insumos certificados
                y tecnologia avanzada para garantizar resultados predecibles y elegantes.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {valores.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] p-4"
                  >
                    <h3 className="text-sm font-semibold text-[color:var(--ink-900)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-700)]/80">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24 xl:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <RevealOnScroll>
              <div className="rounded-[2rem] border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
                  Mision
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
                  Brindar un servicio medico estetico y odontologico de excelencia, con
                  procesos personalizados, tecnologia avanzada y un trato humano impecable.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="rounded-[2rem] border border-[color:var(--gold-100)] bg-white p-7 shadow-[0_18px_50px_-40px_rgba(63,48,24,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
                  Vision
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
                  Ser referentes en medicina estetica y odontologia premium por nuestra
                  innovacion, etica profesional y resultados naturalmente elegantes.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="rounded-[2rem] border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
                  Especialidades
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-700)]/80">
                  {especialidades.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold-500)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <RevealOnScroll>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-700)]/80">
                Fundadores
              </p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                Profesionales con mirada estetica y rigor clinico.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
                Nuestro equipo fundador combina experiencia clinica y sensibilidad estetica.
                Lideran protocolos seguros y resultados de alto nivel con un trato cercano.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Dra. Valeria Costa", "Dr. Ignacio Rivas"].map((name) => (
                <article
                  key={name}
                  className="rounded-[1.8rem] border border-[color:var(--gold-100)] bg-white p-5 shadow-[0_18px_50px_-42px_rgba(63,48,24,0.24)]"
                >
                  <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-[color:var(--gold-50)]">
                    <Image
                      src="/ac3.png"
                      alt={name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-[color:var(--ink-900)]">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs text-[color:var(--ink-700)]/80">
                    Especialista en armonizacion y estetica avanzada.
                  </p>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-[color:var(--gold-100)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24 xl:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
                Opinan nuestros pacientes
              </p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                Experiencias que reflejan confianza.
              </h2>
            </div>
            <div className="rounded-full border border-[color:var(--gold-300)] bg-[color:var(--gold-50)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-700)]">
              5 estrellas en Google
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonios.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-700)]/80">
                  5/5
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-700)]/80">
                  {item.text}
                </p>
                <p className="mt-5 text-sm font-semibold text-[color:var(--ink-900)]">
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
