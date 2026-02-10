import { Globe } from 'lucide-react';
import { site } from '../config/site';

const WhatsAppFloat = () => {
    return (
        <a
            className="wa-float"
            href={`https://wa.me/${site.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            <Globe size={18} />
            <span>WhatsApp</span>
        </a>
    );
};

export default WhatsAppFloat;

