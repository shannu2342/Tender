import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Tenders', path: '/tenders' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
];

const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Cancellation Policy', path: '/cancellation-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Sitemap', path: '/sitemap' }
];

const enterpriseServices = [
    'GeM Registration',
    'Catalogue Enablement',
    'Bid Participation',
    'Tender Tracking',
    'Compliance Support',
    'Enterprise SLA Desk'
];

const Footer = () => {
    const site = useSiteSettings();

    return (
        <footer className="site-footer">
            <div className="container site-footer__grid">
                <section>
                    <div className="brand brand--footer">
                        <span className="brand__badge">G</span>
                        <span className="brand__text">
                            <strong>{site.name}</strong>
                            <small>{site.tagline}</small>
                        </span>
                    </div>
                    <p className="site-footer__text">
                        Enterprise procurement execution for teams that need compliance, speed, and clear ownership from onboarding to award.
                    </p>
                    <div className="site-footer__socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={16} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={16} />
                        </a>
                    </div>
                </section>

                <section>
                    <h3 className="site-footer__title">Navigation</h3>
                    <ul className="site-footer__list">
                        {quickLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="site-footer__title">Core Solutions</h3>
                    <ul className="site-footer__list">
                        {enterpriseServices.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="site-footer__title">Contact</h3>
                    <ul className="site-footer__contact-list">
                        <li>
                            <MapPin size={16} />
                            <span>{site.contact.addressLine}</span>
                        </li>
                        <li>
                            <Phone size={16} />
                            <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
                        </li>
                        <li>
                            <Mail size={16} />
                            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                        </li>
                        <li>
                            <MessageCircle size={16} />
                            <a href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                WhatsApp Support
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="container site-footer__bottom">
                <div className="site-footer__legal-links">
                    {legalLinks.map((item) => (
                        <Link key={item.path} to={item.path}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
                <p>This website is not affiliated with or endorsed by the Government of India.</p>
            </div>

            <div className="mobile-action-bar">
                <a href={`tel:${site.contact.phoneTel}`}>
                    <Phone size={16} />
                    Call
                </a>
                <a href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} />
                    WhatsApp
                </a>
                <Link to="/contact">
                    <Mail size={16} />
                    Enquiry
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
