import "./globals.css";
import { AnimatedLayout } from "@/Componentes/AnimatedLayout";
import AgendaProvider from "@/ContextosGlobales/AgendaContext";
import { Inter, Lato, Michroma, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const michroma = Michroma({
  subsets: ["latin"],
  variable: "--font-michroma",
  weight: ["400"],
});

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicaaltocostanera.cl"
);

export const metadata = {
  title: {
    default: "Clinica Alto Costanera | Clinica Estetica Premium",
    template: "%s | Clinica Alto Costanera",
  },
  description:
    "Clinica Alto Costanera. Medicina estetica y odontologia integral con tecnologia avanzada y protocolos personalizados.",
  keywords: [
    "Clinica Alto Costanera",
    "clinica estetica",
    "odontologia integral",
    "medicina estetica",
    "diseno de sonrisa",
    "armonizacion facial",
    "clinica premium",
  ],
  authors: [{ name: "Clinica Alto Costanera", url: metadataBase.href }],
  publisher: "Clinica Alto Costanera",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: metadataBase.href,
  },
  icons: {
    icon: "/logopng.png",
    shortcut: "/logopng.png",
    apple: "/logopng.png",
  },
  openGraph: {
    title: "Clinica Alto Costanera | Clinica Estetica Premium",
    description:
      "Experiencia premium en medicina estetica y odontologia integral.",
    url: metadataBase.href,
    siteName: "Clinica Alto Costanera",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinica Alto Costanera",
    description:
      "Medicina estetica y odontologia premium con protocolos personalizados.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${lato.variable} ${inter.variable} ${michroma.variable}`}>
      <body className="min-h-screen bg-white">
        <AnimatedLayout>
          <AgendaProvider>{children}</AgendaProvider>
        </AnimatedLayout>
      </body>
    </html>
  );
}
