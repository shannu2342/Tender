import { Link, useParams } from 'react-router-dom';
import { Download, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { tenderRecords } from '../data/siteContent';

const TenderDetail = () => {
    const { id } = useParams();
    const tender = tenderRecords.find((item) => item.id === id) || tenderRecords[0];

    return (
        <div className="page">
            <div className="container">
                <div className="split-layout">
                    <article className="legal-card prose">
                        <div className="chip-row">
                            <span className={`chip ${tender.isPaidContent ? 'chip--premium' : 'chip--sky'}`}>
                                {tender.isPaidContent ? 'Premium' : 'Open'}
                            </span>
                            <span className="chip">{tender.governmentType}</span>
                            <span className="chip">{tender.category}</span>
                        </div>

                        <h1 className="page__title mt-12">{tender.title}</h1>
                        <p className="page__lead">{tender.details}</p>

                        <div className="table-like__meta mt-12">
                            <div>
                                <strong>Department</strong>
                                <span>{tender.department}</span>
                            </div>
                            <div>
                                <strong>Tender Number</strong>
                                <span>{tender.tenderNumber}</span>
                            </div>
                            <div>
                                <strong>Estimated Value</strong>
                                <span>{tender.currency} {tender.estimatedValue.toLocaleString()}</span>
                            </div>
                            <div>
                                <strong>Last Date</strong>
                                <span>{new Date(tender.lastDate).toLocaleDateString()}</span>
                            </div>
                        </div>

                        <h2>Eligibility</h2>
                        <p>{tender.eligibilityCriteria}</p>

                        <h2>Required Documents</h2>
                        <ul>
                            {tender.documentsRequired.map((doc) => (
                                <li key={doc}>{doc}</li>
                            ))}
                        </ul>

                        <h2>Location</h2>
                        <p>
                            {tender.location.address}, {tender.location.city}, {tender.location.state} - {tender.location.pinCode}
                        </p>

                        <h2>Tags</h2>
                        <div className="chip-row">
                            {tender.tags.map((tag) => (
                                <span key={tag} className="chip">{tag}</span>
                            ))}
                        </div>
                    </article>

                    <aside className="card">
                        <div className="card-body">
                            <h2 className="section-title title-sm">Quick Actions</h2>
                            <div className="cta-row">
                                <button type="button" className="btn btn-primary">Apply for Tender</button>
                                <button type="button" className="btn btn-secondary">
                                    <Download size={16} /> Download Documents
                                </button>
                            </div>

                            <div className="notice mt-18">
                                <strong>Contact Authority</strong>
                                <p><Phone size={14} /> {tender.contact.phone}</p>
                                <p><Mail size={14} /> {tender.contact.email}</p>
                                <p><MapPin size={14} /> {tender.state}, {tender.district}</p>
                            </div>

                            <div className="cta-row mt-12">
                                <a href={`tel:${tender.contact.phone}`} className="btn btn-light"><Phone size={16} /> Call</a>
                                <a href={`mailto:${tender.contact.email}`} className="btn btn-light"><Mail size={16} /> Email</a>
                                <a href={`https://wa.me/${tender.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                    <MessageCircle size={16} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

                <section className="page page--no-bottom">
                    <h2 className="section-title">Related Tenders</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {tenderRecords.filter((item) => item.id !== tender.id).slice(0, 3).map((item) => (
                            <article key={item.id} className="card">
                                <div className="card-body">
                                    <h3 className="section-title title-sm">{item.title}</h3>
                                    <p className="section-subtitle">{item.department}</p>
                                    <div className="cta-row">
                                        <Link to={`/tenders/${item.id}`} className="btn btn-secondary">Open</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TenderDetail;
