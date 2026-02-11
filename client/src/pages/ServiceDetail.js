import { Link, useParams } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { site } from '../config/site';
import { serviceCatalog } from '../data/siteContent';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = serviceCatalog.find((item) => item.slug === slug) || serviceCatalog[0];

    return (
        <div className="page">
            <div className="container">
                <div className="split-layout">
                    <article className="legal-card prose">
                        <span className="chip chip--sky">{service.price}</span>
                        <h1 className="page__title mt-14">{service.title}</h1>
                        <p className="page__lead mt-12">{service.longDescription}</p>

                        <h2>Key Features</h2>
                        <ul>
                            {service.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <h2>Business Benefits</h2>
                        <ul>
                            {service.benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                            ))}
                        </ul>

                        <h2>Delivery Workflow</h2>
                        {service.process.map((step) => (
                            <div key={step.step} className="notice">
                                <strong>{step.step} - {step.title}</strong>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </article>

                    <aside className="card">
                        <div className="card-body">
                            <h2 className="section-title title-sm">Get Expert Assistance</h2>
                            <p className="section-subtitle">Connect with our team for timeline, scope, and pricing discussion.</p>

                            <div className="cta-row mt-16">
                                <a href={`tel:${site.contact.phoneTel}`} className="btn btn-primary">
                                    <Phone size={16} /> Call Us
                                </a>
                                <a href={`mailto:${site.contact.email}`} className="btn btn-secondary">
                                    <Mail size={16} /> Email
                                </a>
                                <a
                                    href={`https://wa.me/${site.contact.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success"
                                >
                                    <MessageCircle size={16} /> WhatsApp
                                </a>
                            </div>

                            <div className="notice mt-18">
                                <strong>Prefer bundled support?</strong>
                                <p>We can combine this with bid participation and compliance workflows in one engagement.</p>
                            </div>

                            <div className="cta-row mt-14">
                                <Link to="/contact" className="btn btn-light">Request Proposal</Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
