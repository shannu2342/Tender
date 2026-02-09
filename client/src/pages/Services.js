

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'GeM Registration',
            description: 'Complete assistance for registering your business on the Government e-Marketplace.',
            image: 'https://picsum.photos/seed/service1/400/300',
            icon: '📝',
            price: '₹999',
            features: [
                'Business verification',
                'Document preparation',
                'Profile creation',
                'Verification support'
            ]
        },
        {
            id: 2,
            title: 'Catalog Management',
            description: 'Professional catalog creation and management services to attract government buyers.',
            image: 'https://picsum.photos/seed/service2/400/300',
            icon: '📊',
            price: '₹1,999',
            features: [
                'Product listing',
                'Image optimization',
                'Price management',
                'Category optimization'
            ]
        },
        {
            id: 3,
            title: 'Tender Participation',
            description: 'Complete support for finding, preparing, and submitting government tender bids.',
            image: 'https://picsum.photos/seed/service3/400/300',
            icon: '🏆',
            price: '₹2,999',
            features: [
                'Tender discovery',
                'Bid preparation',
                'Document review',
                'Submission support'
            ]
        },
        {
            id: 4,
            title: 'Bid Preparation',
            description: 'Expert assistance in preparing competitive bids for government tenders.',
            image: 'https://picsum.photos/seed/service4/400/300',
            icon: '📋',
            price: '₹4,999',
            features: [
                'Bid strategy',
                'Document drafting',
                'Price analysis',
                'Compliance check'
            ]
        },
        {
            id: 5,
            title: 'MSME Registration',
            description: 'Complete assistance for MSME registration and Udyam Aadhaar certificate.',
            image: 'https://picsum.photos/seed/service5/400/300',
            icon: '🏢',
            price: '₹1,499',
            features: [
                'MSME registration',
                'Udyam Aadhaar',
                'Document preparation',
                'Verification support'
            ]
        },
        {
            id: 6,
            title: 'Government Procurement Consulting',
            description: 'Expert consulting services for government procurement and tender management.',
            image: 'https://picsum.photos/seed/service6/400/300',
            icon: '💼',
            price: '₹9,999',
            features: [
                'Procurement strategy',
                'Tender analysis',
                'Compliance guidance',
                'Process optimization'
            ]
        }
    ];

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Our Services</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Comprehensive services to help your business succeed in government procurement.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div key={service.id} className="card" style={{ overflow: 'hidden' }}>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img
                                src={service.image}
                                alt={service.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div style={{
                                backgroundColor: '#e6f4ff',
                                color: '#3182ce',
                                padding: '5px 10px',
                                borderRadius: '3px',
                                display: 'inline-block',
                                fontSize: '0.8rem',
                                marginBottom: '10px'
                            }}>
                                {service.price}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#2d3748' }}>
                                <a href={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {service.title}
                                </a>
                            </h3>
                            <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '15px', fontSize: '0.9rem' }}>
                                {service.description}
                            </p>
                            <ul style={{ listStyle: 'none', padding: '0', marginBottom: '20px' }}>
                                {service.features.map((feature, index) => (
                                    <li key={index} style={{
                                        color: '#4a5568',
                                        marginBottom: '8px',
                                        paddingLeft: '20px',
                                        position: 'relative',
                                        fontSize: '0.9rem'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#3182ce'
                                        }}>✅</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href={`/services/${service.id}`} style={{
                                display: 'inline-block',
                                backgroundColor: '#3182ce',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s ease'
                            }}>
                                Learn More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Contact Us for Custom Services
                </button>
            </div>
        </div>
    );
};

export default Services;