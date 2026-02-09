import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        tenderId: '',
        serviceId: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                serviceType: '',
                tenderId: '',
                serviceId: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Contact Us</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Get in touch with us for any questions or assistance.
            </p>

            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#2d3748' }}>Contact Information</h2>

                    <div style={{ marginBottom: '30px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px',
                            color: '#718096'
                        }}>
                            <MapPin style={{ width: '20px', height: '20px', marginRight: '15px', color: '#3182ce' }} />
                            <span>123 Business Park, Sector 18, Noida, Uttar Pradesh 201301</span>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px',
                            color: '#718096'
                        }}>
                            <Phone style={{ width: '20px', height: '20px', marginRight: '15px', color: '#3182ce' }} />
                            <a href="tel:+919876543210" style={{ color: '#718096', textDecoration: 'none' }}>
                                +91 9876543210
                            </a>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px',
                            color: '#718096'
                        }}>
                            <Mail style={{ width: '20px', height: '20px', marginRight: '15px', color: '#3182ce' }} />
                            <a href="mailto:info@example.com" style={{ color: '#718096', textDecoration: 'none' }}>
                                info@example.com
                            </a>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px',
                            color: '#718096'
                        }}>
                            <Globe style={{ width: '20px', height: '20px', marginRight: '15px', color: '#3182ce' }} />
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ color: '#718096', textDecoration: 'none' }}>
                                WhatsApp: +91 9876543210
                            </a>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#718096'
                        }}>
                            <Clock style={{ width: '20px', height: '20px', marginRight: '15px', color: '#3182ce' }} />
                            <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#2d3748' }}>Follow Us</h3>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#f7fafc',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3182ce',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                F
                            </button>
                            <button style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#f7fafc',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3182ce',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                T
                            </button>
                            <button style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#f7fafc',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3182ce',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                L
                            </button>
                            <button style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#f7fafc',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3182ce',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                I
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#2d3748' }}>Send Us a Message</h2>

                    {status === 'success' && (
                        <div style={{
                            backgroundColor: '#d4edda',
                            border: '1px solid #c3e6cb',
                            color: '#155724',
                            padding: '15px',
                            borderRadius: '5px',
                            marginBottom: '20px'
                        }}>
                            Thank you for your message! We will get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ maxWidth: '100%' }}>
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
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
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
                                Service Type
                            </label>
                            <select
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Select service type</option>
                                <option value="gem-registration">GeM Registration</option>
                                <option value="catalog-management">Catalog Management</option>
                                <option value="tender-participation">Tender Participation</option>
                                <option value="bid-preparation">Bid Preparation</option>
                                <option value="consulting">Consulting</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#2d3748'
                            }}>
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
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
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
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
                            disabled={status === 'submitting'}
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: status === 'submitting' ? '#cbd5e0' : '#3182ce',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;