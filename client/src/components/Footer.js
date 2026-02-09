import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Company Information */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '20px'
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
                                    color: 'white'
                                }}>
                                    Government e-Marketplace
                                </span>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: '#bdc3c7'
                                }}>
                                    Services & Tender Management
                                </span>
                            </div>
                        </div>

                        <p style={{
                            color: '#bdc3c7',
                            lineHeight: '1.6',
                            marginBottom: '20px',
                            fontSize: '0.9rem'
                        }}>
                            Your trusted partner for Government e-Marketplace services and tender management solutions.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '15px'
                        }}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                                width: '35px',
                                height: '35px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}>
                                <Facebook style={{ width: '18px', height: '18px' }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
                                width: '35px',
                                height: '35px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}>
                                <Twitter style={{ width: '18px', height: '18px' }} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                                width: '35px',
                                height: '35px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}>
                                <Linkedin style={{ width: '18px', height: '18px' }} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                                width: '35px',
                                height: '35px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}>
                                <Instagram style={{ width: '18px', height: '18px' }} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: 'white',
                            marginBottom: '20px',
                            paddingBottom: '10px',
                            borderBottom: '2px solid #007bff'
                        }}>
                            Quick Links
                        </h3>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Tenders', path: '/tenders' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Pricing', path: '/pricing' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.path} style={{ marginBottom: '12px' }}>
                                    <Link to={link.path} style={{
                                        color: '#bdc3c7',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: 'white',
                            marginBottom: '20px',
                            paddingBottom: '10px',
                            borderBottom: '2px solid #007bff'
                        }}>
                            Our Services
                        </h3>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {[
                                'GeM Registration',
                                'GeM Brand Approval',
                                'GeM Catalogue Upload',
                                'GeM Bid Participation',
                                'Tender Registration',
                                'MSME / Udyam',
                                'Startup India',
                                'ISO Certifications'
                            ].map((service) => (
                                <li key={service} style={{ marginBottom: '12px' }}>
                                    <a href="#" style={{
                                        color: '#bdc3c7',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: 'white',
                            marginBottom: '20px',
                            paddingBottom: '10px',
                            borderBottom: '2px solid #007bff'
                        }}>
                            Contact Us
                        </h3>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            <li style={{
                                display: 'flex',
                                alignItems: 'start',
                                gap: '10px',
                                marginBottom: '15px',
                                color: '#bdc3c7',
                                fontSize: '0.9rem'
                            }}>
                                <MapPin style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                                <span>123 Government Plaza, Sector 17,<br />New Delhi - 110001, India</span>
                            </li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '12px',
                                color: '#bdc3c7',
                                fontSize: '0.9rem'
                            }}>
                                <Phone style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                                <a href="tel:+919876543210" style={{
                                    color: '#bdc3c7',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}>
                                    +91 9876543210
                                </a>
                            </li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '12px',
                                color: '#bdc3c7',
                                fontSize: '0.9rem'
                            }}>
                                <Mail style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                                <a href="mailto:info@example.com" style={{
                                    color: '#bdc3c7',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}>
                                    info@example.com
                                </a>
                            </li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '12px',
                                color: '#bdc3c7',
                                fontSize: '0.9rem'
                            }}>
                                <Globe style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{
                                    color: '#bdc3c7',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}>
                                    WhatsApp: +91 9876543210
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '30px',
                    textAlign: 'center',
                    color: '#bdc3c7',
                    fontSize: '0.85rem'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '15px',
                        flexWrap: 'wrap'
                    }}>
                        <Link to="/privacy-policy" style={{
                            color: '#bdc3c7',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms-conditions" style={{
                            color: '#bdc3c7',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}>
                            Terms & Conditions
                        </Link>
                        <Link to="/refund-policy" style={{
                            color: '#bdc3c7',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}>
                            Refund Policy
                        </Link>
                        <Link to="/cancellation-policy" style={{
                            color: '#bdc3c7',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}>
                            Cancellation Policy
                        </Link>
                        <Link to="/disclaimer" style={{
                            color: '#bdc3c7',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}>
                            Disclaimer
                        </Link>
                        <Link to="/sitemap" style={{
                            color: '#bdc3c7',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}>
                            Sitemap
                        </Link>
                    </div>

                    <p style={{ marginBottom: '10px' }}>
                        © 2024 Government e-Marketplace Services. All rights reserved.
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#95a5a6' }}>
                        This website is not affiliated with or endorsed by the Government of India.
                    </p>
                </div>
            </div>

            {/* Mobile Bottom Bar */}
            <div style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: '#007bff',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px 0',
                boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
                zIndex: '1000'
            }}>
                <a href="tel:+919876543210" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.8rem'
                }}>
                    <Phone style={{ width: '20px', height: '20px' }} />
                    <span>Call</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.8rem'
                }}>
                    <Globe style={{ width: '20px', height: '20px' }} />
                    <span>WhatsApp</span>
                </a>
                <a href="/contact" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.8rem'
                }}>
                    <Mail style={{ width: '20px', height: '20px' }} />
                    <span>Enquiry</span>
                </a>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
        @media (min-width: 768px) {
          div[style*="position: fixed"] {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .footer {
            padding-bottom: 80px;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;