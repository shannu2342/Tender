import { Link } from 'react-router-dom';
import { serviceCatalog } from '../data/siteContent';

const Services = () => {
    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">Our Services</h1>
                    <p className="page__lead">
                        Enterprise-grade services for GeM onboarding, catalogue quality, bid participation, and tender operations.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {serviceCatalog.map((service) => (
                        <article key={service.slug} className="card">
                            <div className="card-body">
                                <span className="chip chip--sky">{service.price}</span>
                                <h2 className="section-title title-md mt-12">{service.title}</h2>
                                <p className="section-subtitle">{service.shortDescription}</p>
                                <ul className="list-clean list-check mt-14">
                                    {service.features.slice(0, 3).map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="cta-row">
                                    <Link to={`/services/${service.slug}`} className="btn btn-primary">Explore Service</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="hero-panel mt-30">
                    <h2 className="section-title">Need a Custom Engagement?</h2>
                    <p className="section-subtitle">We can design a blended support model based on your volume, team structure, and SLA expectations.</p>
                    <div className="cta-row">
                        <Link to="/contact" className="btn btn-primary">Talk to Our Team</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
