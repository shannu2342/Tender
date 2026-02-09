import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Phone, Mail, Globe, Clock, CheckCircle, Award } from 'lucide-react';
import { servicesService, tendersService } from '../services/api';

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #e0e0e0',
                        borderTop: '2px solid #007bff',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                backgroundColor: '#2c3e50',
                color: 'white',
                padding: '80px 0 60px',
                backgroundImage: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>
                            Government e-Marketplace Services
                        </h1>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            marginBottom: '40px',
                            color: '#bdc3c7'
                        }}>
                            Simplify your GeM registration, tender participation, and government procurement processes
                            with our expert services. Get access to live tenders, GeM portal assistance, and compliance solutions.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <Link to="/services" className="btn btn-primary">
                                Our Services <ArrowRight style={{ width: '16px', height: '16px' }} />
                            </Link>
                            <Link to="/tenders" className="btn btn-secondary">
                                View Tenders <Clock style={{ width: '16px', height: '16px' }} />
                            </Link>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                WhatsApp Us <Globe style={{ width: '16px', height: '16px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '15px',
                            color: '#2c3e50'
                        }}>
                            Our Services
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#6c757d',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Comprehensive solutions for your government procurement needs
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px'
                    }}>
                        {services.map((service) => (
                            <div key={service._id} className="card">
                                <div className="card-body">
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: '#e3f2fd',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <CheckCircle style={{ width: '30px', height: '30px', color: '#007bff' }} />
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        marginBottom: '15px',
                                        color: '#2c3e50'
                                    }}>
                                        {service.title}
                                    </h3>
                                    <p style={{
                                        color: '#6c757d',
                                        marginBottom: '20px',
                                        lineHeight: '1.6'
                                    }}>
                                        {service.description}
                                    </p>
                                    <Link to={`/services/${service.slug}`} style={{
                                        color: '#007bff',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        Learn More <ChevronRight style={{ width: '16px', height: '16px' }} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/services" className="btn btn-primary">
                            View All Services <ArrowRight style={{ width: '16px', height: '16px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tenders Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '15px',
                            color: '#2c3e50'
                        }}>
                            Latest Tenders
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#6c757d',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Get access to live tenders from various government departments
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {tenders.map((tender) => (
                            <div key={tender._id} className="card">
                                <div className="card-header">
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '10px'
                                    }}>
                                        <span style={{
                                            backgroundColor: tender.isPaidContent ? '#ffc107' : '#28a745',
                                            color: tender.isPaidContent ? '#212529' : 'white',
                                            padding: '4px 12px',
                                            borderRadius: '4px',
                                            fontSize: '0.8rem',
                                            fontWeight: '500'
                                        }}>
                                            {tender.isPaidContent ? 'Premium' : 'Free'}
                                        </span>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: '#6c757d'
                                        }}>
                                            {new Date(tender.lastDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        marginBottom: '10px',
                                        color: '#2c3e50'
                                    }}>
                                        {tender.title}
                                    </h3>
                                    <p style={{
                                        color: '#6c757d',
                                        marginBottom: '15px',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5'
                                    }}>
                                        {tender.department}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '15px'
                                    }}>
                                        <span style={{
                                            backgroundColor: '#f8f9fa',
                                            padding: '4px 10px',
                                            borderRadius: '4px',
                                            fontSize: '0.85rem',
                                            color: '#6c757d'
                                        }}>
                                            {tender.governmentType === 'central' ? 'Central Govt' : 'State Govt'}
                                        </span>
                                        {tender.state && (
                                            <span style={{
                                                fontSize: '0.85rem',
                                                color: '#6c757d'
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

                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/tenders" className="btn btn-primary">
                            View All Tenders <ArrowRight style={{ width: '16px', height: '16px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '15px',
                            color: '#2c3e50'
                        }}>
                            Why Choose Us
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#6c757d',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Your trusted partner for government procurement solutions
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '40px'
                    }}>
                        {[
                            {
                                icon: <Award style={{ width: '40px', height: '40px', color: '#007bff' }} />,
                                title: '10+ Years Experience',
                                description: 'Trusted by thousands of businesses for their government procurement needs'
                            },
                            {
                                icon: <CheckCircle style={{ width: '40px', height: '40px', color: '#007bff' }} />,
                                title: '100% Satisfaction',
                                description: 'Dedicated support and guidance throughout your procurement journey'
                            },
                            {
                                icon: <Clock style={{ width: '40px', height: '40px', color: '#007bff' }} />,
                                title: 'Timely Updates',
                                description: 'Real-time tender alerts and notifications for government opportunities'
                            },
                            {
                                icon: <CheckCircle style={{ width: '40px', height: '40px', color: '#007bff' }} />,
                                title: 'Compliance Guaranteed',
                                description: 'Ensure adherence to government regulations and procurement norms'
                            }
                        ].map((feature, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#e3f2fd',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    marginBottom: '15px',
                                    color: '#2c3e50'
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    color: '#6c757d',
                                    lineHeight: '1.6'
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{
                padding: '80px 0',
                backgroundColor: '#007bff',
                color: 'white'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '20px'
                        }}>
                            Ready to Get Started?
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            Join thousands of businesses already benefiting from our Government e-Marketplace services
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <Link to="/contact" className="btn btn-light" style={{
                                backgroundColor: 'white',
                                color: '#007bff'
                            }}>
                                Get a Free Consultation <ArrowRight style={{ width: '16px', height: '16px' }} />
                            </Link>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-success">
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