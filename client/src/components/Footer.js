
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { site } from '../config/site';

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Tenders', path: '/tenders' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
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

const services = [
    'GeM Registration',
    'GeM Brand Approval',
    'GeM Catalogue Upload',
    'GeM Bid Participation',
    'Tender Registration',
    'MSME / Udyam',
    'Startup India',
    'ISO Certifications'
];

const Footer = () => {
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
                        Your trusted partner for GeM services and tender management solutions.
                    </p>

                    <div className="site-footer__socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
                    </div>
                </section>

                <section>
                    <h3 className="site-footer__title">Quick Links</h3>
                    <ul className="site-footer__list">
                        {quickLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="site-footer__title">Our Services</h3>
                    <ul className="site-footer__list">
                        {services.map((service) => (
                            <li key={service}>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="site-footer__title">Contact Us</h3>
                    <ul className="site-footer__contact-list">
                        <li>
                            <MapPin size={18} />
                            <span>{site.contact.addressLine}</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
                        </li>
                        <li>
                            <Mail size={18} />
                            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                        </li>
                        <li>
                            <Globe size={18} />
                            <a
                                href={`https://wa.me/${site.contact.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp Support
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="container site-footer__bottom">
                <div className="site-footer__legal-links">
                    {legalLinks.map((link) => (
                        <Link key={link.path} to={link.path}>{link.name}</Link>
                    ))}
                </div>
                <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
                <p>This website is not affiliated with or endorsed by the Government of India.</p>
            </div>

            <div className="mobile-action-bar">
                <a href={`tel:${site.contact.phoneTel}`}>
                    <Phone size={18} />
                    <span>Call</span>
                </a>
                <a href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Globe size={18} />
                    <span>WhatsApp</span>
                </a>
                <Link to="/contact">
                    <Mail size={18} />
                    <span>Enquiry</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
