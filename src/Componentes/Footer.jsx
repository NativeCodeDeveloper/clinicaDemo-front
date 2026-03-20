import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Casos clinicos", href: "/#casos-clinicos" },
  { label: "Agenda", href: "/reserva-hora" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/clinicaaltocostanera",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/56956066620",
    icon: MessageCircle,
  },
  {
    label: "Ubicacion",
    href: "https://maps.google.com/?q=Costanera+Center,+Providencia,+Santiago,+Chile",
    icon: MapPin,
  },
];

export default function FooterPremiumMedico() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[color:var(--gold-100)] bg-[color:var(--background)] text-[color:var(--ink-900)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,242,232,0.8)_38%,rgba(255,255,255,0.98)_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
          <div className="rounded-[1.8rem] border border-[color:var(--gold-100)] bg-white p-6 shadow-[0_24px_60px_-50px_rgba(63,48,24,0.35)] sm:p-7">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-15 p-1.5">
                <Image
                  src="/logopng.png"
                  alt="Clinica Alto Costanera"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="min-w-0">
                  <p className="truncate text-ml font-medium uppercase tracking-[0.28em] text-[color:var(--ink-900)] sm:text-m">
                    Clinica Alto Costanera
                  </p>
                  <p className="truncate text-[8px] uppercase tracking-[0.2em] text-[color:var(--ink-700)]/70 sm:text-[9px]">
                    Medicina Estetica y Odontologia.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 tracking-[0.02em] text-[color:var(--ink-700)]/80">
              Clinica especializada en armonizacion facial y odontologia estetica, con
              protocolos personalizados para resultados naturales, seguros y elegantes.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:+56956066620"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] px-4 py-2 text-xs tracking-[0.1em] text-[color:var(--ink-700)] transition hover:border-[color:var(--gold-300)] hover:text-[color:var(--ink-900)]"
              >
                <Phone className="h-4 w-4" />
                +56 9 5606 6620
              </a>
              <a
                href="https://wa.me/56956066620"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] px-4 py-2 text-xs tracking-[0.1em] text-[color:var(--ink-700)] transition hover:border-[color:var(--gold-300)] hover:text-[color:var(--ink-900)]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp directo
              </a>
            </div>

            <div className="mt-8 border-t border-[color:var(--gold-100)] pt-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-700)]/60">Navegacion</p>
              <nav aria-label="Links del pie de pagina" className="mt-4">
                <ul className="flex flex-wrap gap-3">
                  {footerLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full border border-[color:var(--gold-100)] px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[color:var(--ink-700)]/80 transition hover:border-[color:var(--gold-300)] hover:text-[color:var(--ink-900)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] text-[color:var(--ink-700)] transition hover:scale-105 hover:border-[color:var(--gold-300)] hover:text-[color:var(--ink-900)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[1.8rem] border border-[color:var(--gold-100)] bg-white p-4 shadow-[0_24px_60px_-50px_rgba(63,48,24,0.3)] sm:p-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-700)]/60">Ubicacion</p>
            <h4 className="mt-3 text-xl font-light tracking-[0.02em] text-[color:var(--ink-900)]">
              Costanera, Santiago de Chile
            </h4>
            <p className="mt-3 text-sm leading-7 text-[color:var(--ink-700)]/80">
              Atencion con agenda previa. Estamos ubicados junto al polo empresarial de
              Costanera.
            </p>

            <a
              href="https://maps.google.com/?q=Costanera+Center,+Providencia,+Santiago,+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[color:var(--gold-300)] bg-[color:var(--gold-500)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-300)]"
            >
              <MapPin className="h-4 w-4" />
              Abrir en Google Maps
            </a>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[color:var(--gold-100)]">
              <iframe
                title="Mapa ubicacion Clinica Alto Costanera"
                src="https://www.google.com/maps?q=Costanera%20Center%2C%20Providencia%2C%20Santiago%2C%20Chile&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[240px] w-full"
              />
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-3 border-t border-[color:var(--gold-100)] py-6 text-[11px] text-[color:var(--ink-700)]/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Clinica Alto Costanera. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://www.nativecode.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--ink-700)]/80 transition hover:text-[color:var(--ink-900)]"
            >
              NativeCode.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
