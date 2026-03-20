"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";


/*
  {
    id: "hero-1",
    image: "/fondo2.png",
    alt: "Clinica premium Clinica Alto Costanera",
    badge: "Experiencia premium",
    title: "Diseño clínico de alta precisión.",
    text: "Protocolos personalizados para resultados naturales en odontología integral.",
  },
* */




export default function Portada() {

    const [dataPortada, setDataPortada] = useState([]);
    const API = process.env.NEXT_PUBLIC_API_URL;

    async function cargarPortada() {
        try {
            const res = await fetch(`${API}/carruselPortada/seleccionarCarruselPortada`, {
                method: "GET",
                headers: {Accept: "application/json"},
                mode: "cors"
            });

            const data = await res.json();

            if(Array.isArray(data) && data.length > 0) {
                setDataPortada(data);
            }else{
                setDataPortada([]);
            }

        }catch(err) {
            return toast.error("No se ha podido cargar portada, contacte al administrador del sistema.")
        }
    }

    useEffect(() => {
        cargarPortada()
    },[])

    let defaultHeroSlides = dataPortada.map((portada) => {
        return{
            id: portada.tituloPortadaCarrusel,
            image: `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${portada.imagenPortada}/portada`,
            alt: portada.tituloPortadaCarrusel,
            badge: "Clinica Alto Costanera",
            title: portada.tituloPortadaCarrusel,
            text: portada.descripcionPublicacionesPortada,
        }
    })

    let slides = defaultHeroSlides;


  const safeSlides = useMemo(
    () => (slides.length > 0 ? slides : defaultHeroSlides),
    [slides]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (safeSlides.length <= 1) return undefined;

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, 5200);

    return () => clearInterval(intervalId);
  }, [safeSlides.length]);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + safeSlides.length) % safeSlides.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % safeSlides.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current == null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;

    if (Math.abs(distance) > 45) {
      if (distance > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[color:var(--background)] text-[color:var(--ink-900)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(201,166,107,0.16),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(231,222,208,0.45),transparent_38%)]"/>

      <div className="mx-auto flex min-h-screen w-full max-w-none items-start px-2 pt-0 pb-4 sm:px-4 sm:pb-8 md:px-8 lg:px-10">
        <div className="relative w-full overflow-hidden rounded-b-[2rem] border border-t-0 border-[color:var(--gold-100)] bg-white shadow-[0_34px_90px_-56px_rgba(63,48,24,0.35)]">
          <div
            className="relative min-h-[78svh] sm:min-h-[84svh] lg:min-h-[88svh]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {safeSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  key={slide.id}
                  className={[
                    "absolute inset-0 transition-opacity duration-700 ease-out",
                    isActive ? "opacity-100" : "pointer-events-none opacity-0",
                  ].join(" ")}
                >
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />


                    <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.02)_100%)]" />

                  <div className="absolute inset-x-0 bottom-0 top-0 flex items-end px-6 pb-10 pt-28 sm:px-10 sm:pb-12 md:px-14 md:pt-32">
                    <div className="max-w-2xl">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--gold-700)]/80">
                        {slide.badge}
                      </p>
                      <h1 className="mt-4 text-balance text-4xl font-light leading-tight tracking-[0.02em] text-[color:var(--ink-900)] sm:text-5xl lg:text-6xl">
                        Estetica avanzada con sello premium
                      </h1>
                      <h2 className="mt-4 text-balance text-2xl font-light leading-tight tracking-[0.02em] text-[color:var(--ink-700)] sm:text-3xl lg:text-4xl">
                        {slide.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-sm leading-8 tracking-[0.02em] text-[color:var(--ink-700)]/80 sm:text-base">
                        {slide.text}
                      </p>

                      <div className="mt-8 mb-3.5 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                          href="/agendaProfesionales"
                          aria-label="Agendar hora"
                          className="inline-flex w-full justify-center rounded-full border border-[color:var(--gold-300)] bg-[color:var(--gold-500)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)] transition duration-300 ease-out hover:bg-[color:var(--gold-300)] sm:w-auto"
                        >
                          Agendar hora
                        </Link>
                        <Link
                          href="/agendaProfesionales"
                          aria-label="Ir a servicios"
                          className="inline-flex w-full justify-center rounded-full border border-[color:var(--gold-300)] bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-900)] transition duration-300 ease-out hover:bg-[color:var(--gold-50)] sm:w-auto"
                        >
                          Conoce nuestros servicios
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-2">
                {safeSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Mostrar slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "h-2.5 rounded-full transition-all duration-300",
                      activeIndex === index
                        ? "w-8 bg-[color:var(--gold-500)]"
                        : "w-2.5 bg-[color:var(--gold-300)]/60 hover:bg-[color:var(--gold-500)]",
                    ].join(" ")}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Slide anterior"
                  onClick={goPrev}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--gold-300)] bg-white text-[color:var(--ink-900)] transition duration-300 hover:bg-[color:var(--gold-50)]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Siguiente slide"
                  onClick={goNext}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--gold-300)] bg-white text-[color:var(--ink-900)] transition duration-300 hover:bg-[color:var(--gold-50)]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
