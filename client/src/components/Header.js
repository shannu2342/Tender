import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { site } from '../config/site';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 32);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const menuItems = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Why Choose Us', path: '/why-choose-us' },
        { title: 'How It Works', path: '/how-it-works' },
        { title: 'Services', path: '/services' },
        { title: 'Tenders', path: '/tenders' },
        { title: 'Blog', path: '/blog' },
        { title: 'Pricing', path: '/pricing' },
        { title: 'Testimonials', path: '/testimonials' },
        { title: 'FAQ', path: '/faq' },
        { title: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
            <div className="site-header__topbar">
                <div className="container site-header__topbar-inner">
                    <div className="site-header__contact-group">
                        <a href={`tel:${site.contact.phoneTel}`} className="site-header__contact-link">
                            <Phone size={14} />
                            <span>{site.contact.phoneDisplay}</span>
                        </a>
                        <a href={`mailto:${site.contact.email}`} className="site-header__contact-link">
                            <Mail size={14} />
                            <span>{site.contact.email}</span>
                        </a>
                    </div>

                    <div className="site-header__top-actions">
                        <Link to="/contact" className="site-header__top-cta">
                            Get a quote <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container site-header__main">
                <Link to="/" className="brand" aria-label="Go to home page">
                    <span className="brand__badge">G</span>
                    <span className="brand__text">
                        <strong>{site.name}</strong>
                        <small>{site.tagline}</small>
                    </span>
                </Link>

                <nav className="site-nav" aria-label="Main navigation">
                    <div className="site-nav__tray">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`site-nav__link ${isActive(item.path) ? 'is-active' : ''}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>

                <button
                    type="button"
                    className="site-header__menu-btn"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <div
                id="mobile-nav"
                className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <button
                    type="button"
                    className="mobile-nav__backdrop"
                    aria-label="Close navigation"
                    onClick={() => setIsMenuOpen(false)}
                />

                <div className="mobile-nav__panel">
                    <div className="mobile-nav__head">
                        <Link to="/" className="brand mobile-nav__brand" aria-label="Go to home page">
                            <span className="brand__badge">G</span>
                            <span className="brand__text">
                                <strong>{site.name}</strong>
                                <small>{site.tagline}</small>
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="mobile-nav__close"
                            aria-label="Close menu"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="mobile-nav__quick" aria-label="Quick actions">
                        <a className="mobile-nav__quick-btn" href={`tel:${site.contact.phoneTel}`}>
                            <Phone size={18} />
                            <span>Call</span>
                        </a>
                        <a
                            className="mobile-nav__quick-btn"
                            href={`https://wa.me/${site.contact.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Globe size={18} />
                            <span>WhatsApp</span>
                        </a>
                        <Link className="mobile-nav__quick-btn mobile-nav__quick-btn--primary" to="/contact">
                            Get Quote <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    <div className="mobile-nav__links" aria-label="Navigation links">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`mobile-nav__link ${isActive(item.path) ? 'is-active' : ''}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
