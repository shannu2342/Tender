import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <header style={{
            backgroundColor: scrolled ? '#ffffff' : '#f8f9fa',
            boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            {/* Top Bar */}
            <div style={{
                backgroundColor: '#2c3e50',
                color: 'white',
                padding: '10px 0',
                fontSize: '0.9rem'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            flexWrap: 'wrap'
                        }}>
                            <a href="tel:+919876543210" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}>
                                <Phone style={{ width: '16px', height: '16px' }} />
                                <span>+91 9876543210</span>
                            </a>
                            <a href="mailto:info@example.com" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}>
                                <Mail style={{ width: '16px', height: '16px' }} />
                                <span>info@example.com</span>
                            </a>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}>
                                <Globe style={{ width: '16px', height: '16px' }} />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px 0'
                }}>
                    {/* Logo */}
                    <Link to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        textDecoration: 'none'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#007bff',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                        }}>
                            G
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                color: '#2c3e50'
                            }}>
                                Government e-Marketplace
                            </span>
                            <span style={{
                                fontSize: '0.8rem',
                                color: '#6c757d'
                            }}>
                                Services & Tender Management
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav style={{ display: 'none', alignItems: 'center', gap: '30px' }}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    color: isActive(item.path) ? '#007bff' : '#2c3e50',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    fontSize: '0.95rem',
                                    transition: 'color 0.3s ease',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive(item.path)) {
                                        e.target.style.color = '#007bff';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive(item.path)) {
                                        e.target.style.color = '#2c3e50';
                                    }
                                }}
                            >
                                {item.title}
                                {isActive(item.path) && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-5px',
                                        left: '0',
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: '#007bff'
                                    }} />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '10px'
                        }}
                    >
                        {isMenuOpen ? (
                            <X style={{ width: '24px', height: '24px', color: '#2c3e50' }} />
                        ) : (
                            <Menu style={{ width: '24px', height: '24px', color: '#2c3e50' }} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    right: '0',
                    zIndex: '999'
                }}>
                    <div className="container">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            padding: '15px 0'
                        }}>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        color: isActive(item.path) ? '#007bff' : '#2c3e50',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        padding: '10px 15px',
                                        borderRadius: '6px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive(item.path)) {
                                            e.target.style.backgroundColor = '#f8f9fa';
                                            e.target.style.color = '#007bff';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive(item.path)) {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#2c3e50';
                                        }
                                    }}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Responsive Styles */}
            <style jsx>{`
        @media (min-width: 768px) {
          nav {
            display: flex !important;
          }
          
          button[style*="flex-direction: column"] {
            display: none !important;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;