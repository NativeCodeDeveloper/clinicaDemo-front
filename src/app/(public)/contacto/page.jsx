"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Clock3, Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactCards = [
  {
    title: "Ubicación",
    value: "Costanera, Santiago de Chile",
    href: null,
    icon: MapPin,
  },
  {
    title: "WhatsApp",
    value: "+56 9 5606 6620",
    href: "https://wa.me/56956066620",
    icon: MessageCircle,
  },
  {
    title: "Email",
    value: "desarrollo.native.code@gmail.com",
    href: "mailto:desarrollo.native.code@gmail.com",
    icon: Mail,
  },
  {
    title: "Instagram",
    value: "@clinicaaltocostanera",
    href: "https://www.instagram.com/clinicaaltocostanera",
    icon: Instagram,
  },
];

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const API = process.env.NEXT_PUBLIC_API_URL;

  async function enviarCorreo() {
    try {
      if (!nombre || !email || !mensaje) {
        return toast.error("Completa todos los campos para enviar tu mensaje.");
      }

      const res = await fetch(`${API}/correo/contacto`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje }),
        mode: "cors",
        cache: "no-cache",
      });

      if (!res.ok) {
        return toast.error("No se pudo enviar tu solicitud. Intenta nuevamente.");
      }

      const respuestaBackend = await res.json();

      if (respuestaBackend.message === true) {
        setNombre("");
        setEmail("");
        setMensaje("");
        return toast.success("Tu consulta fue enviada correctamente.");
      }

      return toast.error("Correo no válido. Verifica e intenta otra vez.");
    } catch (error) {
      console.error(error);
      return toast.error("Ocurrió un error inesperado. Intenta nuevamente.");
    }
  }

  return (
    <main className="bg-[color:var(--background)] text-[color:var(--ink-900)]">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(201,166,107,0.18),transparent_35%),radial-gradient(circle_at_88%_2%,rgba(231,222,208,0.45),transparent_42%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.05fr] xl:px-12 xl:gap-14">
          <aside className="rounded-[2rem] border border-[color:var(--gold-100)] bg-white p-7 shadow-[0_24px_70px_-45px_rgba(63,48,24,0.35)] backdrop-blur md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
              Contacto
            </p>
            <h1 className="mt-4 text-4xl leading-[1.02] text-[color:var(--ink-900)] sm:text-5xl">
              Agenda tu evaluacion con atencion personalizada.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[color:var(--ink-700)]/80 sm:text-base">
              Escribenos y te ayudaremos a resolver tus dudas sobre procedimientos,
              evaluacion inicial y tiempos estimados.
            </p>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-[color:var(--ink-700)]/70 sm:text-sm">
              Para resguardar privacidad, la direccion exacta se entrega solo al confirmar
              la evaluacion.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--gold-500)] text-[color:var(--ink-900)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--gold-700)]/80">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[color:var(--ink-900)]">
                      {item.value}
                    </p>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="rounded-2xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--gold-300)]"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] p-5"
                  >
                    {content}
                  </article>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-[color:var(--gold-100)] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--gold-700)]/80">
                Horario de atención
              </p>
              <div className="mt-3 flex items-start gap-3 text-sm text-[color:var(--ink-700)]">
                <Clock3 className="mt-0.5 h-4 w-4 text-[color:var(--gold-700)]" />
                <div className="space-y-1.5">
                  <p>Lunes a Viernes: 9:00 a 19:00</p>
                  <p>Sábado: 10:00 a 14:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-[color:var(--gold-100)] bg-white p-7 shadow-[0_24px_70px_-45px_rgba(63,48,24,0.35)] md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]/80">
              Formulario de contacto
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-[color:var(--ink-900)] sm:text-4xl">
              Cuéntanos tu caso y te responderemos a la brevedad.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-700)]/80">
              Si prefieres, indicanos en tu mensaje si quieres respuesta por WhatsApp o
              llamada telefonica.
            </p>

            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                enviarCorreo();
              }}
            >
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium text-slate-700">
                  Nombre
                </label>
                <Input
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: Camila Pérez"
                  className="h-11 rounded-xl border-[color:var(--gold-100)] bg-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej: correo@ejemplo.com"
                  className="h-11 rounded-xl border-[color:var(--gold-100)] bg-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="min-h-[150px] rounded-xl border-[color:var(--gold-100)] bg-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold-500)] px-7 py-3 text-sm font-medium text-[color:var(--ink-900)] transition hover:bg-[color:var(--gold-300)]"
              >
                Enviar mensaje
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
