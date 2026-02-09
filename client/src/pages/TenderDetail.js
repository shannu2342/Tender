
import { useParams } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin, Download, Share } from 'lucide-react';

const TenderDetail = () => {
    const { id } = useParams();

    const tender = {
        id,
        title: 'Supply of Computer Accessories',
        department: 'Department of Information Technology',
        governmentType: 'state',
        state: 'Uttar Pradesh',
        district: 'Lucknow',
        tenderNumber: 'UPIT/2023/001',
        description: 'Supply of computer accessories including keyboards, mice, monitors, and other peripherals.',
        details: 'Complete specifications and requirements can be found in the tender document. The tender is open to all registered businesses, with preference given to MSMEs.',
        eligibilityCriteria: 'MSMEs and registered businesses only. Must have valid GST and company registration certificates.',
        documentsRequired: ['GST Certificate', 'Company Registration', 'Bank Details', 'PAN Card'],
        startDate: '2023-10-01',
        lastDate: '2023-10-31',
        openingDate: '2023-11-05',
        status: 'active',
        category: 'computers',
        estimatedValue: 1500000,
        currency: 'INR',
        contact: {
            name: 'Mr. Kumar',
            phone: '+91 9876543210',
            email: 'it.tenders@up.gov.in',
            whatsapp: '+91 9876543210'
        },
        location: {
            address: 'IT Department, Lucknow',
            pinCode: '226001',
            city: 'Lucknow',
            state: 'Uttar Pradesh'
        },
        documents: [
            { name: 'Tender Notice', url: '#' },
            { name: 'Technical Specifications', url: '#' },
            { name: 'Terms and Conditions', url: '#' }
        ],
        tags: ['Computers', 'IT Accessories', 'Government Tender'],
        seo: {
            metaTitle: 'Supply of Computer Accessories - Uttar Pradesh IT Department',
            metaDescription: 'Tender for supply of computer accessories in Uttar Pradesh',
            metaKeywords: 'computer accessories, government tender, Uttar Pradesh, IT department'
        },
        isFeatured: true,
        isEnabled: true,
        views: 150,
        enquiryCount: 12,
        isPaidContent: true
    };

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <div className="card" style={{ overflow: 'hidden', marginBottom: '40px' }}>
                <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <div style={{
                            backgroundColor: tender.isPaidContent ? '#fef5e7' : '#e8f5e9',
                            color: tender.isPaidContent ? '#f57c00' : '#2e7d32',
                            padding: '5px 10px',
                            borderRadius: '3px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            {tender.isPaidContent ? 'Paid' : 'Free'}
                        </div>
                        <div style={{
                            backgroundColor: tender.governmentType === 'central' ? '#e3f2fd' : '#fff3e0',
                            color: tender.governmentType === 'central' ? '#1565c0' : '#ef6c00',
                            padding: '5px 10px',
                            borderRadius: '3px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            {tender.governmentType === 'central' ? 'Central Government' : 'State Government'}
                        </div>
                        <div style={{
                            backgroundColor: '#f3e5f5',
                            color: '#6a1b9a',
                            padding: '5px 10px',
                            borderRadius: '3px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            {tender.category.charAt(0).toUpperCase() + tender.category.slice(1)}
                        </div>
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2d3748' }}>
                        {tender.title}
                    </h1>
                    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr 1fr' }}>
                        <div>
                            <strong style={{ color: '#2d3748' }}>Department:</strong>
                            <span style={{ display: 'block', color: '#718096' }}>{tender.department}</span>
                        </div>
                        <div>
                            <strong style={{ color: '#2d3748' }}>Tender Number:</strong>
                            <span style={{ display: 'block', color: '#718096' }}>{tender.tenderNumber}</span>
                        </div>
                        <div>
                            <strong style={{ color: '#2d3748' }}>Estimated Value:</strong>
                            <span style={{ display: 'block', color: '#718096' }}>
                                {tender.currency} {tender.estimatedValue.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
                        <div>
                            <strong style={{ color: '#2d3748' }}>Last Date:</strong>
                            <span style={{ display: 'block', color: '#718096' }}>
                                {new Date(tender.lastDate).toLocaleDateString('en-GB')}
                            </span>
                        </div>
                        <div>
                            <strong style={{ color: '#2d3748' }}>Opening Date:</strong>
                            <span style={{ display: 'block', color: '#718096' }}>
                                {new Date(tender.openingDate).toLocaleDateString('en-GB')}
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '30px' }}>
                    <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: '1fr 300px' }}>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Description</h2>
                            <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                                {tender.details}
                            </p>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Eligibility Criteria</h2>
                            <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                                {tender.eligibilityCriteria}
                            </p>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Documents Required</h2>
                            <ul style={{ listStyle: 'none', padding: '0', marginBottom: '30px' }}>
                                {tender.documentsRequired.map((document, index) => (
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
                                        {document}
                                    </li>
                                ))}
                            </ul>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Tags</h2>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                {tender.tags.map((tag, index) => (
                                    <span key={index} style={{
                                        backgroundColor: '#f7fafc',
                                        color: '#4a5568',
                                        padding: '5px 10px',
                                        borderRadius: '3px',
                                        fontSize: '0.8rem',
                                        border: '1px solid #e2e8f0'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Location</h2>
                            <div style={{ display: 'flex', alignItems: 'start', gap: '10px', color: '#718096', marginBottom: '30px' }}>
                                <MapPin style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                                <span>
                                    {tender.location.address}, {tender.location.city}, {tender.location.state} - {tender.location.pinCode}
                                </span>
                            </div>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Contact Information</h2>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                <a href={`tel:${tender.contact.phone}`} style={{
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
                                    Call: {tender.contact.phone}
                                </a>

                                <a href={`mailto:${tender.contact.email}`} style={{
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
                                    Email: {tender.contact.email}
                                </a>

                                <a href={`https://wa.me/${tender.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{
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
                                    WhatsApp: {tender.contact.whatsapp}
                                </a>
                            </div>
                        </div>

                        <div>
                            <div style={{ backgroundColor: '#f7fafc', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#2d3748' }}>Tender Documents</h3>
                                {tender.documents.map((document, index) => (
                                    <a key={index} href={document.url} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        textDecoration: 'none',
                                        color: '#2d3748',
                                        marginBottom: '10px',
                                        border: '1px solid #e2e8f0',
                                        transition: 'background-color 0.3s ease'
                                    }}>
                                        <Download style={{ width: '20px', height: '20px', color: '#3182ce' }} />
                                        <span style={{ fontSize: '0.9rem' }}>{document.name}</span>
                                    </a>
                                ))}
                            </div>

                            <div style={{ backgroundColor: '#f7fafc', padding: '20px', borderRadius: '5px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#2d3748' }}>Quick Actions</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                        Apply for Tender
                                    </button>
                                    <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                        <Download style={{ width: '16px', height: '16px' }} />
                                        Download All Documents
                                    </button>
                                    <button className="btn btn-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                        <Share style={{ width: '16px', height: '16px' }} />
                                        Share Tender
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Related Tenders</h2>
                </div>
                <div style={{ padding: '30px' }}>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="card" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                                <div style={{ flex: '0 0 150px' }}>
                                    <img
                                        src={`https://picsum.photos/seed/tender${item}/300/200`}
                                        alt={`Related Tender ${item}`}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '5px'
                                        }}
                                    />
                                </div>
                                <div style={{ flex: '1' }}>
                                    <div style={{
                                        backgroundColor: '#e6f4ff',
                                        color: '#3182ce',
                                        padding: '5px 10px',
                                        borderRadius: '3px',
                                        display: 'inline-block',
                                        fontSize: '0.8rem',
                                        marginBottom: '10px'
                                    }}>
                                        {item === 1 ? 'Computers' : item === 2 ? 'Construction' : 'Medical'}
                                    </div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#2d3748' }}>
                                        {item === 1 ? 'Supply of Laptops' : item === 2 ? 'Office Renovation' : 'Medical Equipment'}
                                    </h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#718096' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '5px' }}>📍</span>
                                            <span>Uttar Pradesh</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '5px' }}>📅</span>
                                            <span>2023-11-{item * 10}</span>
                                        </div>
                                    </div>
                                    <a href={`/tenders/${item}`} style={{
                                        display: 'inline-block',
                                        backgroundColor: '#3182ce',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '3px',
                                        textDecoration: 'none',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        marginTop: '10px'
                                    }}>
                                        View Details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderDetail;