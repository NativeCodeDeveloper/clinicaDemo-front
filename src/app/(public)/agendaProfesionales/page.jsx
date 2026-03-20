'use client'
import {useState, useEffect} from "react";
import {router} from "next/client";
import {ButtonDinamic} from "@/Componentes/ButtonDinamic";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";



export default function AgendaProfesionales() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const [listaProfesionales, setListaProfesionales] = useState([]);
    
    function irAgendaProfesional(id_profesional) {
        router.push(`/agendaEspecificaProfersional/${id_profesional}`);
    }

    async function seleccionarProfesionales() {
        try {
            const res = await fetch(`${API}/profesionales/seleccionarTodosProfesionales`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                mode: "cors",
            });

            const dataProfesionales = await res.json();
            setListaProfesionales(dataProfesionales);

        }catch(err) {
            return toast.error('No ha sido posible listar profesionales, contacte a soporte IT');
        }
    }

    useEffect(() => {
        seleccionarProfesionales()
    },[])

    return (
<div className="relative min-h-screen overflow-hidden bg-[color:var(--background)] px-4 py-24 text-[color:var(--ink-900)] sm:px-6 sm:py-32 lg:px-8">

    {/* Glow de fondo */}
    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[color:var(--gold-500)]/10 blur-[120px]"></div>

    <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="animate-reveal-up text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-700)]/80">
                Agenda premium
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--ink-900)] sm:text-5xl lg:text-6xl">
                Agenda con nuestro equipo
            </h1>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--ink-700)]/70">
                Elige al especialista ideal y revisa horarios disponibles en segundos.
            </p>
            <div className="mx-auto mt-6 flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[color:var(--gold-500)]/60"></div>
                <div className="h-1 w-1 rounded-full bg-[color:var(--gold-500)]/70"></div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[color:var(--gold-500)]/60"></div>
            </div>
        </div>

        {/* Cards */}
        <div className="animate-reveal-up-delay mt-16 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listaProfesionales.map((profesional, index) => (
                <button
                    key={profesional.id_profesional}
                    style={{animationDelay: `${index * 150}ms`}}
                    onClick={() => irAgendaProfesional(profesional.id_profesional)}
                    className="animate-reveal-up group relative flex w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--gold-100)] bg-white p-7 opacity-0 text-left shadow-[0_18px_50px_-42px_rgba(63,48,24,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--gold-300)] hover:shadow-[0_26px_60px_-32px_rgba(63,48,24,0.24)] sm:p-8"
                >
                    {/* Glow hover */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--gold-500)]/0 blur-3xl transition-all duration-500 group-hover:bg-[color:var(--gold-500)]/10"></div>

                    {/* Línea superior decorativa */}
                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[color:var(--gold-500)]/80 to-[color:var(--gold-300)]/40 transition-all duration-500 group-hover:w-full"></div>

                    {/* Inicial */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] text-base font-bold text-[color:var(--gold-700)] transition-all duration-500 group-hover:border-[color:var(--gold-300)] group-hover:bg-[color:var(--gold-100)] group-hover:text-[color:var(--gold-700)] group-hover:shadow-[0_0_20px_-4px_rgba(201,166,107,0.25)]">
                        {profesional.nombreProfesional?.charAt(0)}
                    </div>

                    {/* Contenido */}
                    <h2 className="mt-5 text-base font-semibold tracking-wide text-[color:var(--ink-900)] transition-colors duration-300 group-hover:text-[color:var(--ink-900)]">
                        {profesional.nombreProfesional}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-[color:var(--ink-700)]/70 transition-colors duration-300 group-hover:text-[color:var(--ink-700)]">
                        {profesional.descripcionProfesional}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex w-full items-center justify-between border-t border-[color:var(--gold-100)] pt-5">
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-700)]/60 transition-colors duration-300 group-hover:text-[color:var(--gold-700)]">
                            Ver disponibilidad
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--gold-100)] bg-[color:var(--gold-50)] transition-all duration-300 group-hover:border-[color:var(--gold-300)] group-hover:bg-[color:var(--gold-100)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[color:var(--gold-700)] transition-all duration-300 group-hover:translate-x-px group-hover:text-[color:var(--gold-700)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </div>
                </button>
            ))}
        </div>

    </div>
</div>
    )
}
