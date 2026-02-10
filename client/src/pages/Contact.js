import { useMemo, useState } from 'react';
import { Mail, MapPin, Phone, Clock, Globe, MessageSquareText } from 'lucide-react';
import { enquiriesService } from '../services/api';
import { site } from '../config/site';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ kind: 'idle', message: '' });

    const serviceOptions = useMemo(
        () => [
            { value: '', label: 'Select a service (optional)' },
            { value: 'GeM Registration', label: 'GeM Registration' },
            { value: 'Brand Approval', label: 'Brand Approval' },
            { value: 'Catalogue Upload', label: 'Catalogue Upload' },
            { value: 'Bid Participation', label: 'Bid Participation' },
            { value: 'Tender Participation', label: 'Tender Participation' },
            { value: 'Compliance & Documentation', label: 'Compliance & Documentation' },
            { value: 'Enterprise Support', label: 'Enterprise Support' },
            { value: 'Other', label: 'Other' }
        ],
        []
    );

    const handleChange = (e) => {
        if (status.kind !== 'idle') setStatus({ kind: 'idle', message: '' });
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setStatus({ kind: 'loading', message: '' });

            await enquiriesService.createEnquiry({
                name: formData.name.trim(),
                email: formData.email.trim(),
                mobile: formData.phone.trim(),
                service: formData.serviceType || 'General enquiry',
                subject: formData.subject.trim(),
                message: formData.message.trim(),
                source: 'contact_form',
                website: site.domain
            });

            setStatus({
                kind: 'success',
                message: 'Thanks. Your enquiry has been received. We will reach out shortly.'
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                serviceType: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus({
                kind: 'error',
                message:
                    error?.response?.data?.message ||
                    'Something went wrong while sending your message. Please try again or reach us via phone/email.'
            });
        }
    };

    return (
        <div className="contact-page">
            <div className="container contact-hero">
                <section className="contact-hero__inner" aria-label="Contact hero">
                    <div className="contact-hero__content">
                        <span className="contact-kicker">
                            <MessageSquareText size={16} />
                            Contact {site.domain}
                        </span>
                        <h1 className="contact-title">Talk to our team</h1>
                        <p className="contact-subtitle">
                            Enterprise-ready support for GeM onboarding, catalogue enablement, bid participation, and tender workflows.
                            Send an enquiry and we will respond with next steps.
                        </p>
                        <div className="contact-hero__meta">
                            <span className="contact-pill">
                                <Clock size={16} />
                                Response within business hours
                            </span>
                            <span className="contact-pill">
                                <Globe size={16} />
                                Pan-India support
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container contact-grid">
                <aside className="contact-stack" aria-label="Contact details">
                    <section className="card">
                        <div className="card-body">
                            <h2 className="contact-card__title">Contact details</h2>
                            <ul className="contact-list">
                                <li className="contact-list__item">
                                    <span className="contact-list__icon" aria-hidden="true">
                                        <Phone size={18} />
                                    </span>
                                    <span className="contact-list__lines">
                                        <strong>Call</strong>
                                        <span>
                                            <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
                                        </span>
                                    </span>
                                </li>
                                <li className="contact-list__item">
                                    <span className="contact-list__icon" aria-hidden="true">
                                        <Mail size={18} />
                                    </span>
                                    <span className="contact-list__lines">
                                        <strong>Email</strong>
                                        <span>
                                            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                                        </span>
                                    </span>
                                </li>
                                <li className="contact-list__item">
                                    <span className="contact-list__icon" aria-hidden="true">
                                        <Globe size={18} />
                                    </span>
                                    <span className="contact-list__lines">
                                        <strong>WhatsApp</strong>
                                        <span>
                                            <a
                                                href={`https://wa.me/${site.contact.whatsappNumber}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Chat on WhatsApp
                                            </a>
                                        </span>
                                    </span>
                                </li>
                                <li className="contact-list__item">
                                    <span className="contact-list__icon" aria-hidden="true">
                                        <MapPin size={18} />
                                    </span>
                                    <span className="contact-list__lines">
                                        <strong>Office</strong>
                                        <span>{site.contact.addressLine}</span>
                                    </span>
                                </li>
                                <li className="contact-list__item">
                                    <span className="contact-list__icon" aria-hidden="true">
                                        <Clock size={18} />
                                    </span>
                                    <span className="contact-list__lines">
                                        <strong>Hours</strong>
                                        <span>{site.contact.hours}</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="card">
                        <div className="card-body">
                            <h3 className="contact-card__title">For enterprises</h3>
                            <p className="text-secondary" style={{ marginTop: 10 }}>
                                For multi-location onboarding, SLA support, or custom procurement workflows, mention "Enterprise Support" in the form.
                            </p>
                            <div className="contact-actions">
                                <a className="btn btn-secondary" href={`mailto:${site.contact.email}`}>
                                    Email sales
                                </a>
                                <a
                                    className="btn btn-quiet"
                                    href={`https://wa.me/${site.contact.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </section>
                </aside>

                <section className="card" aria-label="Contact form">
                    <div className="card-body">
                        <h2 className="contact-card__title">Send an enquiry</h2>
                        <p className="text-secondary" style={{ marginTop: 10 }}>
                            Share your requirement and our team will get back with a clear plan, timeline, and documentation checklist.
                        </p>

                        {status.kind === 'success' ? (
                            <div className="contact-alert contact-alert--success" role="status" aria-live="polite">
                                {status.message}
                            </div>
                        ) : null}

                        {status.kind === 'error' ? (
                            <div className="contact-alert contact-alert--error" role="alert">
                                {status.message}
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} style={{ marginTop: 18 }}>
                            <div className="form-group">
                                <label htmlFor="contact-name">Name *</label>
                                <input
                                    id="contact-name"
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email">Email *</label>
                                <input
                                    id="contact-email"
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-phone">Phone *</label>
                                <input
                                    id="contact-phone"
                                    className="form-control"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                    placeholder="+91 9XXXXXXXXX"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-service">Service</label>
                                <select
                                    id="contact-service"
                                    className="form-control"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                >
                                    {serviceOptions.map((opt) => (
                                        <option key={opt.value || 'blank'} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-subject">Subject</label>
                                <input
                                    id="contact-subject"
                                    className="form-control"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Short summary (optional)"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message">Message *</label>
                                <textarea
                                    id="contact-message"
                                    className="form-control"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Tell us what you are trying to achieve, current status, and any deadlines."
                                    style={{ resize: 'vertical' }}
                                />
                                <p className="contact-note">
                                    By submitting, you agree that we may contact you back regarding your enquiry. We do not sell personal data.
                                </p>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={status.kind === 'loading'}>
                                {status.kind === 'loading' ? (
                                    <span className="btn-loading">
                                        <span className="spinner" />
                                        Sending...
                                    </span>
                                ) : (
                                    'Send enquiry'
                                )}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
