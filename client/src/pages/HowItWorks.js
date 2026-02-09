

const HowItWorks = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>How It Works</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Our streamlined process makes it easy for businesses to register on GeM and participate in government tenders.
            </p>

            <div className="grid gap-12 md:grid-cols-3">
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#3182ce',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        1
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Register on GeM</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        Our experts will guide you through the entire GeM registration process, ensuring all required documents are properly submitted.
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#38a169',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        2
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Catalog Management</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        We help you create and manage your product catalog on GeM, ensuring compliance with government specifications.
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#ed8936',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        3
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Bid Participation</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        Get access to latest government tenders and participate with our expert guidance on bid preparation and submission.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Get Started Now
                </button>
            </div>
        </div>
    );
};

export default HowItWorks;