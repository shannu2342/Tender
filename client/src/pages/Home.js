import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Globe, Clock, CheckCircle, Award } from 'lucide-react';
import { servicesService, tendersService } from '../services/api';
import { site } from '../config/site';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const [tenders, setTenders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [servicesRes, tendersRes] = await Promise.all([
                    servicesService.getServices({ limit: 6 }),
                    tendersService.getTenders({ limit: 3, featured: true })
                ]);

                setServices(servicesRes.data);
                setTenders(tendersRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="btn-loading">
                    <span className="spinner" />
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="home-hero">
                <div className="container">
                    <div className="home-hero__inner">
                        <h1 className="home-hero__title">{site.name}</h1>
                        <p className="home-hero__subtitle">
                            Enterprise-grade GeM onboarding, catalogue enablement, bid participation, and tender workflows.
                            Get support, documentation, and timelines from a team that knows government procurement.
                        </p>
                        <div className="home-hero__actions">
                            <Link to="/services" className="btn btn-primary">
                                Our Services <ArrowRight style={{ width: '16px', height: '16px' }} />
                            </Link>
                            <Link to="/tenders" className="btn btn-secondary">
                                View Tenders <Clock style={{ width: '16px', height: '16px' }} />
                            </Link>
                            <a
                                href={`https://wa.me/${site.contact.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success"
                            >
                                WhatsApp Us <Globe style={{ width: '16px', height: '16px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="home-section home-section--alt">
                <div className="container">
                    <div className="home-section__head">
                        <h2 className="home-section__title">Our Services</h2>
                        <p className="home-section__desc">
                            Practical, compliant support designed for real procurement timelines. Pick a service and we will guide you end-to-end.
                        </p>
                    </div>

                    <div className="home-grid">
                        {services.map((service) => (
                            <div key={service._id} className="card">
                                <div className="card-body">
                                    <div className="home-card__icon" aria-hidden="true">
                                        <CheckCircle style={{ width: '28px', height: '28px' }} />
                                    </div>
                                    <h3 className="home-card__title">
                                        {service.title}
                                    </h3>
                                    <p className="home-card__text">
                                        {service.description}
                                    </p>
                                    <Link to={`/services/${service.slug}`} className="home-card__link">
                                        Learn More <ChevronRight style={{ width: '16px', height: '16px' }} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="home-center">
                        <Link to="/services" className="btn btn-primary">
                            View All Services <ArrowRight style={{ width: '16px', height: '16px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tenders Section */}
            <section className="home-section">
                <div className="container">
                    <div className="home-section__head">
                        <h2 className="home-section__title">Latest Tenders</h2>
                        <p className="home-section__desc">
                            Browse current opportunities from government departments. Filter, evaluate, and participate with confidence.
                        </p>
                    </div>

                    <div className="home-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {tenders.map((tender) => (
                            <div key={tender._id} className="card">
                                <div className="card-header">
                                    <div className="home-tender-meta">
                                        <span
                                            className={`home-badge ${tender.isPaidContent ? 'home-badge--premium' : 'home-badge--free'}`}
                                        >
                                            {tender.isPaidContent ? 'Premium' : 'Free'}
                                        </span>
                                        <span className="home-date">
                                            {new Date(tender.lastDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: 10 }}>
                                        {tender.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: 14, fontSize: '0.92rem', lineHeight: 1.55 }}>
                                        {tender.department}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: 14
                                    }}>
                                        <span className="home-badge">
                                            {tender.governmentType === 'central' ? 'Central Govt' : 'State Govt'}
                                        </span>
                                        {tender.state && (
                                            <span style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-muted)'
                                            }}>
                                                {tender.state}
                                            </span>
                                        )}
                                    </div>
                                    <Link to={`/tenders/${tender._id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="home-center">
                        <Link to="/tenders" className="btn btn-primary">
                            View All Tenders <ArrowRight style={{ width: '16px', height: '16px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="home-section home-section--alt">
                <div className="container">
                    <div className="home-section__head">
                        <h2 className="home-section__title">Why Choose Us</h2>
                        <p className="home-section__desc">
                            Clear deliverables, compliant documentation, and responsive support designed for procurement timelines.
                        </p>
                    </div>

                    <div className="home-features">
                        {[
                            {
                                icon: <Award style={{ width: '36px', height: '36px' }} />,
                                title: '10+ Years Experience',
                                description: 'Trusted by thousands of businesses for their government procurement needs'
                            },
                            {
                                icon: <CheckCircle style={{ width: '36px', height: '36px' }} />,
                                title: '100% Satisfaction',
                                description: 'Dedicated support and guidance throughout your procurement journey'
                            },
                            {
                                icon: <Clock style={{ width: '36px', height: '36px' }} />,
                                title: 'Timely Updates',
                                description: 'Real-time tender alerts and notifications for government opportunities'
                            },
                            {
                                icon: <CheckCircle style={{ width: '36px', height: '36px' }} />,
                                title: 'Compliance Guaranteed',
                                description: 'Ensure adherence to government regulations and procurement norms'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="home-feature">
                                <div className="home-feature__icon" aria-hidden="true">
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.08rem', fontWeight: 900, marginBottom: 10 }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="home-cta">
                <div className="container">
                    <div className="home-cta__inner">
                        <h2>Ready to get started?</h2>
                        <p>
                            Join thousands of businesses already benefiting from our Government e-Marketplace services
                        </p>
                        <div className="home-cta__actions">
                            <Link to="/contact" className="btn btn-light">
                                Get a Free Consultation <ArrowRight style={{ width: '16px', height: '16px' }} />
                            </Link>
                            <a
                                href={`https://wa.me/${site.contact.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success"
                            >
                                WhatsApp Us <Globe style={{ width: '16px', height: '16px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
