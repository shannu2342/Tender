import { useState } from 'react';
import { Search, Filter, Download, Share } from 'lucide-react';

const Tenders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedGovernmentType, setSelectedGovernmentType] = useState('all');
    const [selectedState, setSelectedState] = useState('all');
    const [selectedDistrict, setSelectedDistrict] = useState('all');

    const tenders = [
        {
            id: 1,
            title: 'Supply of Computer Accessories',
            department: 'Department of Information Technology',
            governmentType: 'state',
            state: 'Uttar Pradesh',
            district: 'Lucknow',
            tenderNumber: 'UPIT/2023/001',
            description: 'Supply of computer accessories including keyboards, mice, monitors, and other peripherals.',
            details: 'Complete specifications and requirements can be found in the tender document.',
            eligibilityCriteria: 'MSMEs and registered businesses only.',
            documentsRequired: ['GST Certificate', 'Company Registration', 'Bank Details'],
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
        },
        {
            id: 2,
            title: 'Renovation of Government School',
            department: 'Department of Education',
            governmentType: 'state',
            state: 'Uttar Pradesh',
            district: 'Kanpur',
            tenderNumber: 'UPEducation/2023/002',
            description: 'Renovation and repair work of government school buildings in Kanpur district.',
            details: 'Complete specifications and requirements can be found in the tender document.',
            eligibilityCriteria: 'Registered construction companies with minimum 5 years experience.',
            documentsRequired: ['GST Certificate', 'Company Registration', 'Work Experience', 'Bank Details'],
            startDate: '2023-10-05',
            lastDate: '2023-11-15',
            openingDate: '2023-11-20',
            status: 'active',
            category: 'construction',
            estimatedValue: 25000000,
            currency: 'INR',
            contact: {
                name: 'Mr. Sharma',
                phone: '+91 9876543211',
                email: 'education.tenders@up.gov.in',
                whatsapp: '+91 9876543211'
            },
            location: {
                address: 'Education Department, Kanpur',
                pinCode: '208001',
                city: 'Kanpur',
                state: 'Uttar Pradesh'
            },
            documents: [
                { name: 'Tender Notice', url: '#' },
                { name: 'Technical Specifications', url: '#' },
                { name: 'Terms and Conditions', url: '#' }
            ],
            tags: ['Construction', 'School Renovation', 'Government Tender'],
            seo: {
                metaTitle: 'Renovation of Government School - Kanpur',
                metaDescription: 'Tender for renovation of government school in Kanpur',
                metaKeywords: 'school renovation, construction, government tender, Kanpur'
            },
            isFeatured: false,
            isEnabled: true,
            views: 85,
            enquiryCount: 7,
            isPaidContent: true
        },
        {
            id: 3,
            title: 'Supply of Medical Equipment',
            department: 'Department of Health',
            governmentType: 'central',
            state: 'Uttar Pradesh',
            district: 'Lucknow',
            tenderNumber: 'MOHFW/2023/003',
            description: 'Supply of medical equipment for government hospitals in Lucknow.',
            details: 'Complete specifications and requirements can be found in the tender document.',
            eligibilityCriteria: 'Registered medical equipment suppliers with necessary certifications.',
            documentsRequired: ['GST Certificate', 'Company Registration', 'ISO Certificate', 'Bank Details'],
            startDate: '2023-10-10',
            lastDate: '2023-11-05',
            openingDate: '2023-11-10',
            status: 'active',
            category: 'medical',
            estimatedValue: 50000000,
            currency: 'INR',
            contact: {
                name: 'Dr. Verma',
                phone: '+91 9876543212',
                email: 'health.tenders@mohfw.gov.in',
                whatsapp: '+91 9876543212'
            },
            location: {
                address: 'Health Department, Lucknow',
                pinCode: '226001',
                city: 'Lucknow',
                state: 'Uttar Pradesh'
            },
            documents: [
                { name: 'Tender Notice', url: '#' },
                { name: 'Technical Specifications', url: '#' },
                { name: 'Terms and Conditions', url: '#' }
            ],
            tags: ['Medical Equipment', 'Government Tender', 'Health'],
            seo: {
                metaTitle: 'Supply of Medical Equipment - Lucknow',
                metaDescription: 'Tender for supply of medical equipment in Lucknow',
                metaKeywords: 'medical equipment, government tender, Lucknow, health department'
            },
            isFeatured: true,
            isEnabled: true,
            views: 200,
            enquiryCount: 15,
            isPaidContent: true
        }
    ];

    const categories = [
        'all', 'computers', 'construction', 'medical', 'education', 'transportation', 'communication', 'other'
    ];

    const governmentTypes = ['all', 'central', 'state'];

    const states = ['all', 'Uttar Pradesh', 'Delhi', 'Maharashtra', 'Gujarat', 'Tamil Nadu'];

    const districts = ['all', 'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Allahabad'];

    const filteredTenders = tenders.filter(tender => {
        const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tender.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tender.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || tender.category === selectedCategory;
        const matchesGovernmentType = selectedGovernmentType === 'all' || tender.governmentType === selectedGovernmentType;
        const matchesState = selectedState === 'all' || tender.state === selectedState;
        const matchesDistrict = selectedDistrict === 'all' || tender.district === selectedDistrict;

        return matchesSearch && matchesCategory && matchesGovernmentType && matchesState && matchesDistrict;
    });

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Tenders</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Browse and participate in government tenders from various departments.
            </p>

            {/* Search and Filter Section */}
            <div style={{ backgroundColor: '#f7fafc', padding: '30px', borderRadius: '5px', marginBottom: '40px' }}>
                <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr auto' }}>
                    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#2d3748'
                            }}>
                                Category
                            </label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#2d3748'
                            }}>
                                Government Type
                            </label>
                            <select
                                value={selectedGovernmentType}
                                onChange={(e) => setSelectedGovernmentType(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                {governmentTypes.map(type => (
                                    <option key={type} value={type}>
                                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#2d3748'
                            }}>
                                State
                            </label>
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                {states.map(state => (
                                    <option key={state} value={state}>
                                        {state === 'all' ? 'All States' : state}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#2d3748'
                            }}>
                                District
                            </label>
                            <select
                                value={selectedDistrict}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                {districts.map(district => (
                                    <option key={district} value={district}>
                                        {district === 'all' ? 'All Districts' : district}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <div style={{ flex: '1', position: 'relative' }}>
                        <Search style={{
                            position: 'absolute',
                            left: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#718096',
                            width: '20px',
                            height: '20px'
                        }} />
                        <input
                            type="text"
                            placeholder="Search tenders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 45px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '5px',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Filter style={{ width: '20px', height: '20px' }} />
                        Apply Filters
                    </button>
                </div>
            </div>

            {/* Tenders List */}
            <div style={{ marginBottom: '40px' }}>
                {filteredTenders.map(tender => (
                    <div key={tender.id} className="card" style={{ marginBottom: '20px', overflow: 'hidden' }}>
                        <div style={{ padding: '20px', display: 'grid', gap: '20px', gridTemplateColumns: '1fr auto' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
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
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2d3748' }}>
                                    <a href={`/tenders/${tender.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {tender.title}
                                    </a>
                                </h3>
                                <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '15px' }}>
                                    {tender.description}
                                </p>
                                <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr' }}>
                                    <div>
                                        <strong style={{ color: '#2d3748' }}>Department:</strong>
                                        <span style={{ display: 'block', color: '#718096' }}>{tender.department}</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: '#2d3748' }}>Location:</strong>
                                        <span style={{ display: 'block', color: '#718096' }}>
                                            {tender.state}, {tender.district}
                                        </span>
                                    </div>
                                    <div>
                                        <strong style={{ color: '#2d3748' }}>Estimated Value:</strong>
                                        <span style={{ display: 'block', color: '#718096' }}>
                                            {tender.currency} {tender.estimatedValue.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr' }}>
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
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <a href={`/tenders/${tender.id}`} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    View Details
                                </a>
                                <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <Download style={{ width: '16px', height: '16px' }} />
                                    Download Document
                                </button>
                                <button className="btn btn-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <Share style={{ width: '16px', height: '16px' }} />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button className="btn btn-light" disabled>Previous</button>
                <button className="btn btn-primary">1</button>
                <button className="btn btn-light">2</button>
                <button className="btn btn-light">3</button>
                <button className="btn btn-light">Next</button>
            </div>
        </div>
    );
};

export default Tenders;