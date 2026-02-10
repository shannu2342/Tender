import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
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
                    <a
                        href={`https://wa.me/${site.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-header__contact-link site-header__contact-link--cta"
                    >
                        <Globe size={14} />
                        <span>WhatsApp Support</span>
                    </a>
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
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`site-nav__link ${isActive(item.path) ? 'is-active' : ''}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <button
                    type="button"
                    className="site-header__menu-btn"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <div className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
                <div className="container mobile-nav__inner">
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
        </header>
    );
};

export default Header;
