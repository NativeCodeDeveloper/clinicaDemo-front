"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Inicio", href: "/#inicio" },
  { title: "Nosotros", href: "/nosotros" },
  { title: "Especialidades", href: "/#servicios" },
  { title: "Casos clinicos", href: "/#casos-clinicos" },
  { title: "Agenda", href: "/reserva-hora" },
  { title: "Contacto", href: "/contacto" },
];

export function ShadcnNavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="w-full bg-white/85 text-[color:var(--ink-900)] backdrop-blur-2xl shadow-[0_16px_40px_-30px_rgba(63,48,24,0.25)]">
      <div className="mx-auto flex h-[82px] w-full max-w-7xl items-center justify-between px-5 md:h-[90px] md:px-10 xl:px-12">
        <Link href="/#inicio" className="flex min-w-0 items-center gap-3" aria-label="Inicio">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dashed border-[color:var(--gold-300)] bg-[color:var(--gold-50)]">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]">
              Logo
            </span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-900)]">
              Clinica Alto Costanera
            </p>
            <p className="truncate text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-700)]/70">
              Medicina estetica integral
            </p>
          </div>
        </Link>

        <nav className="hidden lg:block" aria-label="Navegacion principal">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)]/80 transition hover:text-[color:var(--gold-700)]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reserva-hora"
            className="hidden rounded-full border border-[color:var(--gold-300)] bg-[color:var(--gold-500)] px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-300)] sm:inline-flex"
          >
            Agendar evaluacion
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold-100)] bg-white text-[color:var(--ink-900)] lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden bg-white/90 text-[color:var(--ink-900)] lg:hidden",
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          "transition-all duration-300",
        ].join(" ")}
      >
        <div className="space-y-2 px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-700)] transition hover:bg-[color:var(--gold-50)]"
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/reserva-hora"
            className="mt-2 inline-flex rounded-full border border-[color:var(--gold-300)] bg-[color:var(--gold-500)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)]"
            onClick={() => setMobileOpen(false)}
          >
            Agendar evaluacion
          </Link>
        </div>
      </div>
    </header>
  );
}
