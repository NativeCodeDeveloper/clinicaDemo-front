"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppButton() {
    return (
        <FloatingWhatsApp
            phoneNumber="+56956066620" // tu número con código de país
            accountName="Clinica Alto Costanera"
            avatar="/logodifort.png" // opcional: logo o imagen en public/
            statusMessage=""
            chatMessage="Hola, queremos ayudarte. ¿En que podemos asesorarte?"
            placeholder="Escribe tu mensaje..."
            notification
            notificationSound
        />
    );
}
