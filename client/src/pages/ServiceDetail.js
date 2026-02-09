
import { useParams } from 'react-router-dom';
import { Phone, Mail, Globe } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();

    const service = {
        id,
        title: 'GeM Registration',
        description: 'Complete assistance for registering your business on the Government e-Marketplace.',
        longDescription: `The Government e-Marketplace (GeM) is an online platform for government procurement in India. Registering on GeM opens up opportunities for businesses to participate in government tenders, which can significantly boost their revenue. Our expert team provides complete assistance for GeM registration, ensuring that your business profile is attractive to government buyers.`,
        image: 'https://picsum.photos/seed/service1/800/500',
        icon: '📝',
        price: '₹999',
        features: [
            'Business verification',
            'Document preparation',
            'Profile creation',
            'Verification support'
        ],
        process: [
            {
                step: 1,
                title: 'Business Verification',
                description: 'We verify your business details and ensure all necessary documents are in order.'
            },
            {
                step: 2,
                title: 'Document Preparation',
                description: 'Our team helps you prepare all the required documents for GeM registration.'
            },
            {
                step: 3,
                title: 'Profile Creation',
                description: 'We create a professional business profile on the GeM portal that attracts government buyers.'
            },
            {
                step: 4,
                title: 'Verification Support',
                description: 'We assist with the verification process and ensure your application is approved quickly.'
            }
        ],
        benefits: [
            'Access to government tenders',
            'Transparent and competitive bidding process',
            'Quick payment processing',
            'Reduced paperwork and bureaucracy',
            'Expanded market reach'
        ]
    };

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <div style={{
                        backgroundColor: '#e6f4ff',
                        color: '#3182ce',
                        padding: '10px 15px',
                        borderRadius: '3px',
                        display: 'inline-block',
                        fontSize: '0.9rem',
                        marginBottom: '20px'
                    }}>
                        {service.price}
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c' }}>
                        {service.title}
                    </h1>
                    <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                        {service.longDescription}
                    </p>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2d3748' }}>Features</h3>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {service.features.map((feature, index) => (
                                <li key={index} style={{
                                    color: '#4a5568',
                                    marginBottom: '10px',
                                    paddingLeft: '25px',
                                    position: 'relative',
                                    fontSize: '1rem'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        color: '#3182ce',
                                        fontSize: '1.2rem'
                                    }}>✅</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2d3748' }}>Benefits</h3>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {service.benefits.map((benefit, index) => (
                                <li key={index} style={{
                                    color: '#4a5568',
                                    marginBottom: '10px',
                                    paddingLeft: '25px',
                                    position: 'relative',
                                    fontSize: '1rem'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        color: '#38a169',
                                        fontSize: '1.2rem'
                                    }}>📈</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2d3748' }}>Process</h3>
                        {service.process.map((step, index) => (
                            <div key={index} style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f7fafc', borderRadius: '5px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    backgroundColor: '#3182ce',
                                    color: 'white',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    marginRight: '15px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold'
                                }}>
                                    {step.step}
                                </div>
                                <strong style={{ color: '#2d3748' }}>{step.title}</strong>
                                <p style={{ color: '#718096', marginTop: '10px', paddingLeft: '45px' }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <a href="tel:+919876543210" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#3182ce',
                            color: 'white',
                            padding: '12px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}>
                            <Phone style={{ width: '20px', height: '20px' }} />
                            Call Us
                        </a>

                        <a href="mailto:info@example.com" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#38a169',
                            color: 'white',
                            padding: '12px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}>
                            <Mail style={{ width: '20px', height: '20px' }} />
                            Email Us
                        </a>

                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#2d3748',
                            color: 'white',
                            padding: '12px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}>
                            <Globe style={{ width: '20px', height: '20px' }} />
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div>
                    <div style={{ marginBottom: '40px' }}>
                        <img
                            src={service.image}
                            alt={service.title}
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
                        />
                    </div>

                    <div style={{ backgroundColor: '#f7fafc', padding: '30px', borderRadius: '5px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#2d3748' }}>Get a Quote</h3>
                        <form>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '5px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: '#2d3748'
                                }}>
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '5px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '5px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: '#2d3748'
                                }}>
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '5px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '5px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: '#2d3748'
                                }}>
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '5px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '5px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: '#2d3748'
                                }}>
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '5px',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#3182ce',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;