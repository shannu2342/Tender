import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Download, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { tenderRecords } from '../data/siteContent';
import { tendersService } from '../services/api';
import { useSiteSettings } from '../hooks/useSiteSettings';

const TenderDetail = () => {
    const { id } = useParams();
    const site = useSiteSettings();
    const [remoteTender, setRemoteTender] = useState(null);

    useEffect(() => {
        const loadTender = async () => {
            try {
                const response = await tendersService.getTenderById(id);
                if (response.data) {
                    setRemoteTender(response.data);
                }
            } catch (error) {
                // Keep fallback record.
            }
        };

        loadTender();
    }, [id]);

    const tender = useMemo(() => {
        return remoteTender || tenderRecords.find((item) => item.id === id || item._id === id) || tenderRecords[0];
    }, [id, remoteTender]);

    const firstDoc = tender.documents?.find((doc) => doc.url && doc.url !== '#');
    const related = tenderRecords.filter((item) => (item.id || item._id) !== (tender.id || tender._id)).slice(0, 3);

    return (
        <div className="page">
            <div className="container">
                <div className="split-layout">
                    <article className="legal-card prose">
                        <div className="chip-row">
                            <span className={`chip ${tender.isPaidContent ? 'chip--premium' : 'chip--sky'}`}>
                                {tender.isPaidContent ? 'Premium' : 'Open'}
                            </span>
                            <span className="chip">{tender.governmentType || 'general'}</span>
                            <span className="chip">{tender.category || 'misc'}</span>
                        </div>

                        <h1 className="page__title mt-12">{tender.title}</h1>
                        <p className="page__lead">{tender.details || tender.description}</p>

                        <div className="table-like__meta mt-12">
                            <div>
                                <strong>Department</strong>
                                <span>{tender.department || 'Not specified'}</span>
                            </div>
                            <div>
                                <strong>Tender Number</strong>
                                <span>{tender.tenderNumber || '-'}</span>
                            </div>
                            <div>
                                <strong>Estimated Value</strong>
                                <span>{tender.currency || 'INR'} {Number(tender.estimatedValue || 0).toLocaleString()}</span>
                            </div>
                            <div>
                                <strong>Last Date</strong>
                                <span>{tender.lastDate ? new Date(tender.lastDate).toLocaleDateString() : '-'}</span>
                            </div>
                        </div>

                        <h2>Eligibility</h2>
                        <p>{tender.eligibilityCriteria || 'Eligibility details available in tender documents.'}</p>

                        <h2>Required Documents</h2>
                        <ul>
                            {(tender.documentsRequired || ['Valid business registration', 'Tax and statutory documents']).map((doc) => (
                                <li key={doc}>{doc}</li>
                            ))}
                        </ul>

                        <h2>Location</h2>
                        <p>
                            {tender.location?.address || ''} {[tender.location?.city || tender.city, tender.location?.state || tender.state, tender.location?.pinCode].filter(Boolean).join(', ')}
                        </p>

                        <h2>Tags</h2>
                        <div className="chip-row">
                            {(tender.tags || ['Government Tender']).map((tag) => (
                                <span key={tag} className="chip">{tag}</span>
                            ))}
                        </div>
                    </article>

                    <aside className="card">
                        <div className="card-body">
                            <h2 className="section-title title-sm">Quick Actions</h2>
                            <div className="cta-row">
                                <Link
                                    to={`/contact?subject=${encodeURIComponent(`Tender enquiry: ${tender.title}`)}`}
                                    className="btn btn-primary"
                                >
                                    Apply for Tender
                                </Link>
                                {firstDoc ? (
                                    <a href={firstDoc.url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                        <Download size={16} /> Download Documents
                                    </a>
                                ) : (
                                    <button type="button" className="btn btn-secondary" disabled title="No document available">
                                        <Download size={16} /> Documents Unavailable
                                    </button>
                                )}
                            </div>

                            <div className="notice mt-18">
                                <strong>Contact Authority</strong>
                                <p><Phone size={14} /> {tender.contact?.phone || site.contact.phoneDisplay}</p>
                                <p><Mail size={14} /> {tender.contact?.email || site.contact.email}</p>
                                <p><MapPin size={14} /> {[tender.state, tender.district].filter(Boolean).join(', ') || 'India'}</p>
                            </div>

                            <div className="cta-row mt-12">
                                <a href={`tel:${tender.contact?.phone || site.contact.phoneTel}`} className="btn btn-light"><Phone size={16} /> Call</a>
                                <a href={`mailto:${tender.contact?.email || site.contact.email}`} className="btn btn-light"><Mail size={16} /> Email</a>
                                {tender.contact?.whatsapp ? (
                                    <a href={`https://wa.me/${String(tender.contact.whatsapp).replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                        <MessageCircle size={16} /> WhatsApp
                                    </a>
                                ) : (
                                    <a href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                        <MessageCircle size={16} /> WhatsApp
                                    </a>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>

                <section className="page page--no-bottom">
                    <h2 className="section-title">Related Tenders</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {related.map((item) => (
                            <article key={item.id || item._id} className="card">
                                <div className="card-body">
                                    <h3 className="section-title title-sm">{item.title}</h3>
                                    <p className="section-subtitle">{item.department}</p>
                                    <div className="cta-row">
                                        <Link to={`/tenders/${item.id || item._id}`} className="btn btn-secondary">Open</Link>
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
