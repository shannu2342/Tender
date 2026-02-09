

const Testimonials = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Testimonials</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                See what our clients are saying about us.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="card" style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#3182ce',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginRight: '16px'
                        }}>
                            A
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: '#2d3748' }}>Arun Kumar</h4>
                            <p style={{ fontSize: '0.9rem', color: '#718096' }}>CEO, Tech Solutions Inc.</p>
                        </div>
                    </div>
                    <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '16px' }}>
                        "The team helped us register on GeM in just 2 days. Their expert guidance made the entire process smooth and hassle-free.
                        We have already won 3 tenders through their assistance."
                    </p>
                    <div style={{ color: '#ed8936' }}>
                        ⭐⭐⭐⭐⭐
                    </div>
                </div>

                <div className="card" style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#38a169',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginRight: '16px'
                        }}>
                            P
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: '#2d3748' }}>Priya Sharma</h4>
                            <p style={{ fontSize: '0.9rem', color: '#718096' }}>Founder, Creative Designs</p>
                        </div>
                    </div>
                    <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '16px' }}>
                        "Their catalog management service is excellent. They helped us create a professional product catalog that complies
                        with all government specifications. We have seen a significant increase in our tender participation."
                    </p>
                    <div style={{ color: '#ed8936' }}>
                        ⭐⭐⭐⭐⭐
                    </div>
                </div>

                <div className="card" style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#ed8936',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginRight: '16px'
                        }}>
                            R
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: '#2d3748' }}>Rajesh Singh</h4>
                            <p style={{ fontSize: '0.9rem', color: '#718096' }}>MD, Manufacturing Co.</p>
                        </div>
                    </div>
                    <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '16px' }}>
                        "The bid preparation support is outstanding. They helped us prepare a winning bid for a government tender, and we
                        successfully won the contract. Their attention to detail and compliance knowledge is impressive."
                    </p>
                    <div style={{ color: '#ed8936' }}>
                        ⭐⭐⭐⭐⭐
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Become Our Client
                </button>
            </div>
        </div>
    );
};

export default Testimonials;