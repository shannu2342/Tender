

const WhyChooseUs = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Why Choose Us</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                We are your trusted partner for all GeM and government tender related services.
            </p>

            <div className="grid gap-12 md:grid-cols-2">
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#3182ce',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2.5rem'
                    }}>
                        ⭐
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Expert Team</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        Our team of experts has extensive experience in government procurement and compliance, ensuring you get the best guidance.
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#38a169',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2.5rem'
                    }}>
                        📈
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Proven Track Record</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        We have helped numerous businesses successfully register on GeM and win government tenders.
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#ed8936',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2.5rem'
                    }}>
                        🔒
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Secure & Compliant</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        We ensure all your data is secure and all processes are compliant with government regulations.
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#e53e3e',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white',
                        fontSize: '2.5rem'
                    }}>
                        🚀
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#2d3748' }}>Fast & Efficient</h3>
                    <p style={{ color: '#718096', lineHeight: '1.6' }}>
                        Our streamlined processes ensure quick registration and tender participation.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Contact Us Today
                </button>
            </div>
        </div>
    );
};

export default WhyChooseUs;