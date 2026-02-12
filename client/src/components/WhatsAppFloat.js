import { MessageCircle } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

const WhatsAppFloat = () => {
    const site = useSiteSettings();

    return (
        <a
            className="wa-float"
            href={`https://wa.me/${site.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
        </a>
    );
};

export default WhatsAppFloat;
