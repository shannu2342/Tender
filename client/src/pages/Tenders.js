import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { tenderRecords } from '../data/siteContent';

const Tenders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [governmentType, setGovernmentType] = useState('all');
    const [category, setCategory] = useState('all');

    const categories = useMemo(() => ['all', ...new Set(tenderRecords.map((item) => item.category))], []);

    const filtered = tenderRecords.filter((tender) => {
        const matchesSearch =
            tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tender.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tender.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGov = governmentType === 'all' || tender.governmentType === governmentType;
        const matchesCategory = category === 'all' || tender.category === category;
        return matchesSearch && matchesGov && matchesCategory;
    });

    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">Tenders</h1>
                    <p className="page__lead">
                        Search and evaluate government opportunities with structured data and clear eligibility context.
                    </p>
                </header>

                <section className="hero-panel mb-24">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="form-group">
                            <label htmlFor="tender-search">Search</label>
                            <div className="search-wrap">
                                <Search size={16} className="search-wrap__icon" />
                                <input
                                    id="tender-search"
                                    className="form-control"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Title, department, keywords"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gov-type">Government Type</label>
                            <select
                                id="gov-type"
                                className="form-control"
                                value={governmentType}
                                onChange={(e) => setGovernmentType(e.target.value)}
                            >
                                <option value="all">All Types</option>
                                <option value="central">Central</option>
                                <option value="state">State</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                                {categories.map((item) => (
                                    <option key={item} value={item}>
                                        {item === 'all' ? 'All Categories' : item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                <div className="table-like">
                    {filtered.map((tender) => (
                        <article key={tender.id} className="table-like__row">
                            <div className="chip-row">
                                <span className={`chip ${tender.isPaidContent ? 'chip--premium' : 'chip--sky'}`}>
                                    {tender.isPaidContent ? 'Premium' : 'Open'}
                                </span>
                                <span className="chip">{tender.governmentType}</span>
                                <span className="chip">{tender.category}</span>
                            </div>
                            <h2 className="section-title title-md">{tender.title}</h2>
                            <p className="section-subtitle">{tender.description}</p>
                            <div className="table-like__meta">
                                <div>
                                    <strong>Department</strong>
                                    <span>{tender.department}</span>
                                </div>
                                <div>
                                    <strong>Tender No.</strong>
                                    <span>{tender.tenderNumber}</span>
                                </div>
                                <div>
                                    <strong>Location</strong>
                                    <span>{tender.state}, {tender.district}</span>
                                </div>
                                <div>
                                    <strong>Last Date</strong>
                                    <span>{new Date(tender.lastDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="cta-row">
                                <Link to={`/tenders/${tender.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tenders;
