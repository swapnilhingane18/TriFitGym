import { FaWhatsapp } from 'react-icons/fa'
import { trackLeadEvent } from '../utils/analytics'

export default function WhatsAppButton() {
    const whatsappUrl = "https://wa.me/9107219256076?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20TRIFIT."

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadEvent('whatsapp_click', { location: 'floating_widget' })}
            className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[50] group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Pulse ring */}
                <span className="absolute inset-[-4px] rounded-full bg-green-500 animate-whatsapp-pulse opacity-0" />
                {/* Ping */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
                {/* Button */}
                <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:scale-110 group-hover:shadow-green-500/40 transition-all duration-300">
                    <FaWhatsapp className="text-white text-2xl" />
                </div>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-dark border border-border rounded-lg text-[11px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-xl">
                Chat with us
            </div>
        </a>
    )
}
