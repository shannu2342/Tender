

const ServiceAgreement = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Service Agreement</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                This agreement outlines the terms and conditions for using our services.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>1. Parties to the Agreement</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This Service Agreement ("Agreement") is entered into between [Your Company Name] ("Service Provider") and the client ("Client") upon acceptance of the services offered by the Service Provider.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>2. Services Provided</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    The Service Provider agrees to provide the following services to the Client:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>GeM registration and profile creation</li>
                    <li>Catalog management on GeM portal</li>
                    <li>Tender participation support</li>
                    <li>Bid preparation and submission assistance</li>
                    <li>Government procurement consulting</li>
                    <li>Other related services as agreed upon</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>3. Fees and Payment Terms</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    The Client agrees to pay the Service Provider the fees as specified in the service proposal or agreement. Payment terms and conditions are as follows:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Fees are payable in Indian Rupees (INR)</li>
                    <li>Payment must be made within [number] days of invoice issuance</li>
                    <li>Late payments may incur interest at the rate of [percentage]% per month</li>
                    <li>All taxes and applicable fees are the responsibility of the Client</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>4. Term of Agreement</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This Agreement shall commence on the date of acceptance and shall continue for the duration of the services provided. Either party may terminate this Agreement by providing [number] days' written notice.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>5. Confidentiality</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    Both parties agree to maintain the confidentiality of all information exchanged during the course of the services. This includes but is not limited to business plans, financial information, and proprietary technology.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>6. Intellectual Property</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    All intellectual property rights related to the services provided shall remain the property of the Service Provider unless otherwise agreed in writing.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>7. Limitation of Liability</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    The Service Provider's liability for any damages arising out of or in connection with the services shall be limited to the fees paid by the Client for the services.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>8. Governing Law</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This Agreement is governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts in Delhi.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>9. Amendments</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    Any amendments to this Agreement must be in writing and signed by both parties.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>10. Entire Agreement</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements and understandings, whether written or oral, relating to the subject matter of this Agreement.
                </p>

                <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#718096' }}>
                    <p>Last Updated: October 2023</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceAgreement;