'use client'

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/Componentes/RevealOnScroll";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";


export default function Seccion2() {

    const API = process.env.NEXT_PUBLIC_API_URL;
    const [infoData, setInfoData] = useState([]);
    const services = infoData.map((item) => {
        return{
            id: item.id_publicacionesTituloDescripcion,
            name: item.publicacionesTitulo,
            description: item.publicacionesDescripcion,
            image:`https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${item.publicacionesTituloDescripcionImagen}/card` ,
        }
    })

async function loadServices() {
        try {
            const res = await  fetch(`${API}/publicacionesTituloDetalle/seleccionarPublicacionesTituloDetalle`, {
                method: "GET",
                headers: {Accept: "application/json"},
                mode: "cors"
            });

            if(!res.ok) {
                return toast.error(`No ha sido posible cargar las imagenes del sistema contacte a soporte de NativeCode`)
            }else {

                const data = await res.json();
                setInfoData(data);
            }
        }catch{
            return toast.error(`No ha sido posible cargar las imagenes del sistema contacte a soporte de NativeCode`)
        }
}

useEffect(() => {
    loadServices();
})



    return (
    <section id="servicios" className="scroll-mt-24 bg-[color:var(--background)] py-20 text-[color:var(--ink-900)] sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold-700)]/80">Servicios</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-light leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
            Tratamientos creados para realzar tu bienestar con precision clinica.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll
              key={service.name}
              delayClass={index % 2 === 0 ? "delay-100" : "delay-150"}
              className="h-full"
            >
              <Link
                href="/reserva-hora"
                aria-label={`Agendar para ${service.name}`}
                className="group block h-full overflow-hidden rounded-3xl border border-[color:var(--gold-100)] bg-white transition duration-300 ease-out hover:-translate-y-1 hover:border-[color:var(--gold-300)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img

                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(19,15,12,0.55)_100%)]" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-light tracking-[0.02em] text-[color:var(--ink-900)]">{service.name}</h3>
                  <p className="mt-2 text-sm leading-7 tracking-[0.02em] text-[color:var(--ink-700)]/80">
                    Evaluacion personalizada y plan clinico premium para resultados funcionales y naturales.
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
