

const Pricing = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Pricing</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Choose the plan that best fits your business needs.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Basic</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3182ce' }}>₹999</span>
                        <span style={{ color: '#718096' }}>/month</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: '0', marginBottom: '30px' }}>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>GeM Registration</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Catalog Management</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>10 Tenders/Month</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Basic Support</li>
                    </ul>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
                </div>

                <div className="card" style={{ padding: '30px', textAlign: 'center', backgroundColor: '#f7fafc', border: '2px solid #3182ce' }}>
                    <div style={{ backgroundColor: '#3182ce', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', marginBottom: '20px' }}>
                        Most Popular
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Pro</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3182ce' }}>₹2,999</span>
                        <span style={{ color: '#718096' }}>/month</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: '0', marginBottom: '30px' }}>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>GeM Registration</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Catalog Management</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Unlimited Tenders</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Priority Support</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Bid Preparation</li>
                    </ul>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
                </div>

                <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Enterprise</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3182ce' }}>Custom</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: '0', marginBottom: '30px' }}>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>All Pro Features</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Dedicated Account Manager</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Custom Catalog Solutions</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>24/7 Premium Support</li>
                        <li style={{ color: '#718096', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>Custom Integration</li>
                    </ul>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Contact Sales</button>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <p style={{ color: '#718096', marginBottom: '20px' }}>
                    All plans include a 14-day free trial. No credit card required.
                </p>
                <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Contact Us for Custom Pricing
                </button>
            </div>
        </div>
    );
};

export default Pricing;